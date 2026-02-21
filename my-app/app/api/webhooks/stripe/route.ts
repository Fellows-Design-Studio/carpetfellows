import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe/stripe";

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const signature = req.headers.get("stripe-signature") || "";

  try {
    const stripe = getStripe();
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        
        // Handle successful payment
        // You can save order to database, send confirmation email, etc.
        console.log("Payment successful:", session.id);
        
        // TODO: Save order to your database
        // TODO: Send order confirmation email
        // TODO: Update inventory
        
        break;
      }
      
      case "checkout.session.expired": {
        console.log("Checkout session expired:", event.data.object.id);
        break;
      }
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 400 }
    );
  }
}
