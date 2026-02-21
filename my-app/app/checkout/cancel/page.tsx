import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Maksu peruutettu",
  description: "Maksu peruutettiin. Voit yrittää uudelleen.",
};

export default function CheckoutCancelPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-orange-100 flex items-center justify-center">
          <XCircle className="h-10 w-10 text-orange-600" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Maksu peruutettu</h1>
        
        <p className="text-muted-foreground mb-8">
          Maksu peruutettiin. Tuotteet ovat edelleen ostoskorissasi, 
          jos haluat yrittää uudelleen.
        </p>
        
        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link href="/checkout">Palaa kassalle</Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <Link href="/products">Jatka ostoksia</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
