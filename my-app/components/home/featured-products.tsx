import Link from "next/link";
import { Product } from "@/types/sanity";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Suosituimmat tuotteet</h2>
            <p className="text-muted-foreground">
              Asiakkaidemme suosikit tällä hetkellä
            </p>
          </div>
          
          <Button asChild variant="outline" className="gap-2">
            <Link href="/products">
              Näytä kaikki
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
