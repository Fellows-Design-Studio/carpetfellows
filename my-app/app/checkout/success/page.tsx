import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tilaus vastaanotettu",
  description: "Kiitos tilauksestasi! Tilaus on vastaanotettu ja käsitellään pian.",
};

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Kiitos tilauksestasi!</h1>
        
        <p className="text-muted-foreground mb-8">
          Tilaus on vastaanotettu ja lähetämme sinulle vahvistuksen sähköpostiin. 
          Toimitusaika on 3-5 arkipäivää.
        </p>
        
        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link href="/products">Jatka ostoksia</Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Palaa etusivulle</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
