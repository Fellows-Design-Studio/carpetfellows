"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/store/cart";
import { toast } from "sonner";
import { Loader2, CreditCard } from "lucide-react";
import Image from "next/image";

export function CheckoutForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { items, totalPrice } = useCart();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      toast.error("Ostoskori on tyhjä");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
          })),
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Maksun käsittelyssä tapahtui virhe. Yritä uudelleen.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Etunimi *</Label>
          <Input id="firstName" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="lastName">Sukunimi *</Label>
          <Input id="lastName" required />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Sähköposti *</Label>
        <Input id="email" type="email" required />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Puhelinnumero</Label>
        <Input id="phone" type="tel" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="address">Osoite *</Label>
        <Input id="address" required />
      </div>
      
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="postalCode">Postinumero *</Label>
          <Input id="postalCode" required />
        </div>
        
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="city">Kaupunki *</Label>
          <Input id="city" required />
        </div>
      </div>
      
      <Button
        type="submit"
        size="lg"
        className="w-full gap-2"
        disabled={isLoading || items.length === 0}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Käsitellään...
          </>
        ) : (
          <>
            <CreditCard className="h-5 w-5" />
            Siirry maksamaan
          </>
        )}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        Maksu käsitellään turvallisesti Stripe-palvelun kautta.
      </p>
    </form>
  );
}

export function OrderSummary() {
  const { items, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-secondary/50 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Tilauksen tiedot</h2>
        <p className="text-muted-foreground">Ostoskori on tyhjä.</p>
      </div>
    );
  }

  return (
    <div className="bg-secondary/50 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Tilauksen tiedot</h2>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="relative w-16 h-16 rounded-md overflow-hidden bg-secondary flex-shrink-0">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-xl">🏠</span>
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">
                {item.quantity} x {item.price.toFixed(2)} €
              </p>
            </div>
            
            <p className="font-medium">
              {(item.price * item.quantity).toFixed(2)} €
            </p>
          </div>
        ))}
      </div>
      
      <Separator className="my-4" />
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Välisumma</span>
          <span>{totalPrice().toFixed(2)} €</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Toimitus</span>
          <span>Lasketaan kassalla</span>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex justify-between text-lg font-semibold">
        <span>Yhteensä</span>
        <span>{totalPrice().toFixed(2)} €</span>
      </div>
    </div>
  );
}
