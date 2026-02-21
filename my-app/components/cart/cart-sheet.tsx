"use client";

import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export function CartSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Ostoskori on tyhjä");
      return;
    }
    setIsOpen(false);
    // Navigate to checkout
    window.location.href = "/checkout";
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Ostoskori">
          <ShoppingBag className="h-5 w-5" />
          {totalItems() > 0 && (
            <Badge
              variant="default"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {totalItems()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Ostoskori ({totalItems()})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">Ostoskori on tyhjä</p>
            <p className="text-sm text-muted-foreground mb-6">
              Lisää tuotteita ostoskoriin jatkaaksesi
            </p>
            <Button asChild onClick={() => setIsOpen(false)}>
              <Link href="/products">Jatka ostoksia</Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-20 h-20 rounded-md overflow-hidden bg-secondary flex-shrink-0">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-2xl">🏠</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/product/${item.id}`}
                        className="font-medium line-clamp-1 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        {item.price.toFixed(2)} €
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 ml-auto text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Välisumma</span>
                <span>{totalPrice().toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Toimitus</span>
                <span>Lasketaan kassalla</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-semibold">
                <span>Yhteensä</span>
                <span>{totalPrice().toFixed(2)} €</span>
              </div>

              <Button className="w-full gap-2" size="lg" onClick={handleCheckout}>
                Siirry kassalle
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link href="/products">Jatka ostoksia</Link>
              </Button>

              {items.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-muted-foreground"
                  onClick={clearCart}
                >
                  Tyhjennä ostoskori
                </Button>
              )}
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
