import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/sanity/queries";
import { ProductDetails } from "@/components/product/product-details";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Tuotetta ei löytynyt",
    };
  }

  return {
    title: product.seoTitle || product.name,
    description: product.seoDescription || product.description?.slice(0, 160),
    openGraph: {
      title: product.seoTitle || product.name,
      description: product.seoDescription || product.description?.slice(0, 160),
      images: product.images?.[0] ? [{ url: product.images[0].url }] : undefined,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const isOnSale = product.salePrice && product.salePrice < product.price;
  const currentPrice = isOnSale ? product.salePrice! : product.price;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProductDetails product={product} />

      {/* Schema.org Product markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: product.images?.map((img) => img.url) || [],
            description: product.description,
            sku: product._id,
            brand: {
              "@type": "Brand",
              name: "CarpetFellows",
            },
            offers: {
              "@type": "Offer",
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/product/${product.slug.current}`,
              priceCurrency: "EUR",
              price: currentPrice.toFixed(2),
              availability: product.stock > 0
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
              itemCondition: "https://schema.org/NewCondition",
            },
            category: product.category?.name,
            material: product.material,
            color: product.color,
          }),
        }}
      />
    </div>
  );
}
