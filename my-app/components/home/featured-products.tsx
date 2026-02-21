import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/sanity";

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  // Näytä max 4 tuotetta
  const displayProducts = products.slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-sm tracking-widest uppercase text-gray-500 mb-4 text-center">
          Suosituimmat
        </p>
        <h2 className="text-2xl lg:text-3xl font-light text-center mb-12">
          Asiakkaidemme suosikit
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayProducts.map((product) => {
            const isOnSale = product.salePrice && product.salePrice < product.price;
            const currentPrice = isOnSale ? product.salePrice : product.price;
            
            return (
              <Link
                key={product._id}
                href={`/product/${product.slug.current}`}
                className="group"
              >
                {/* Product image */}
                <div className="relative aspect-square bg-gray-50 mb-4 overflow-hidden">
                  {product.images?.[0] ? (
                    <Image
                      src={product.images[0].url}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <span className="text-gray-400">Ei kuvaa</span>
                    </div>
                  )}
                </div>

                {/* Product info */}
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    {product.category?.name || "Matto"}
                  </p>
                  <h3 className="text-sm font-normal text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2 line-clamp-1">
                    {product.description?.slice(0, 60) || "Laadukas matto"}...
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-gray-900">
                      {currentPrice?.toFixed(2)} €
                    </span>
                    {isOnSale && (
                      <span className="text-xs text-blue-600">
                        Jäsenhinta
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block border-b border-black pb-1 text-sm tracking-wide hover:text-gray-600 hover:border-gray-600 transition-colors"
          >
            Näytä kaikki tuotteet
          </Link>
        </div>
      </div>
    </section>
  );
}