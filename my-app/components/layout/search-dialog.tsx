"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Loader2, ArrowRight } from "lucide-react";
import { searchProducts } from "@/lib/sanity/queries";
import { Product } from "@/types/sanity";
import Image from "next/image";
import Link from "next/link";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const search = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const products = await searchProducts(query);
        setResults(products);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(search, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onOpenChange(false);
      router.push(`/products?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle>Hae tuotteita</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Kirjoita hakusana..."
              className="pl-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
        </form>

        <ScrollArea className="max-h-[400px]">
          {isLoading ? (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : results.length > 0 ? (
            <div className="p-4 pt-0 space-y-2">
              {results.map((product) => (
                <Link
                  key={product._id}
                  href={`/product/${product.slug.current}`}
                  onClick={() => onOpenChange(false)}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  {product.images?.[0] && (
                    <div className="relative h-16 w-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={product.images[0].url}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {product.salePrice ? (
                        <>
                          <span className="text-primary font-medium">
                            {product.salePrice.toFixed(2)} €
                          </span>
                          {" "}
                          <span className="line-through">{product.price.toFixed(2)} €</span>
                        </>
                      ) : (
                        `${product.price.toFixed(2)} €`
                      )}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          ) : query.length >= 2 ? (
            <div className="p-8 text-center text-muted-foreground">
              Ei tuloksia haulle "{query}"
            </div>
          ) : null}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
