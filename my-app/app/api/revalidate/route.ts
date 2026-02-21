import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-sanity-webhook-secret");

  // Verify webhook secret
  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { _type, slug } = body;

    // Revalidate based on document type
    switch (_type) {
      case "product":
        revalidatePath("/products");
        revalidatePath(`/product/${slug?.current}`);
        break;
      case "category":
        revalidatePath("/products");
        break;
      case "blogPost":
        revalidatePath("/blog");
        revalidatePath(`/blog/${slug?.current}`);
        break;
      case "siteSettings":
        revalidatePath("/");
        break;
      default:
        revalidatePath("/");
    }

    return NextResponse.json({ revalidated: true });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Failed to revalidate" },
      { status: 500 }
    );
  }
}
