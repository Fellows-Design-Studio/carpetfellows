import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/sanity";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isOnSale = product.salePrice && product.salePrice < product.price;

  return (
    <Link href={`/product/${product.slug.current}`}>
      <Card className="group overflow-hidden border-0 shadow-none bg-transparent">
        <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-secondary">
          {product.images?.[0] ? (
            <Image
              src={product.images[0].url}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary">
              <span className="text-4xl">🏠</span>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isOnSale && (
              <Badge className="bg-primary text-primary-foreground">
                Tarjous
              </Badge>
            )}
            {product.stock === 0 && (
              <Badge variant="secondary">
                Loppu
              </Badge>
            )}
          </div>

          {/* Quick add button - appears on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="bg-background/90 backdrop-blur-sm rounded-md p-3 text-center text-sm font-medium">
              Näytä tuote
            </div>
          </div>
        </div>

        <CardContent className="p-4 px-0">
          <p className="text-sm text-muted-foreground mb-1">
            {product.category?.name}
          </p>
          
          <h3 className="font-medium mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2">
            {isOnSale ? (
              <>
                <span className="font-semibold text-primary">
                  {product.salePrice?.toFixed(2)} €
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  {product.price.toFixed(2)} €
                </span>
              </>
            ) : (
              <span className="font-semibold">
                {product.price.toFixed(2)} €
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
