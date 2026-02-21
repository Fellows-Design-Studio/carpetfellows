import { Metadata } from "next";
import { CheckoutForm, OrderSummary } from "@/components/checkout/checkout-components";

export const metadata: Metadata = {
  title: "Kassa",
  description: "Viimeistele tilauksesi CarpetFellows-verkkokaupassa.",
};

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Kassa</h1>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-secondary/50 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Tilauksen yhteenveto</h2>
            <p className="text-muted-foreground">
              Siirryt turvalliselle Stripe-maksusivulle viimeistelläksesi tilauksesi.
            </p>
          </div>
          
          <CheckoutForm />
        </div>
        
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
