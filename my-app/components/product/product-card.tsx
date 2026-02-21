import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/sanity";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isOnSale = product.salePrice && product.salePrice < product.price;
  const currentPrice = isOnSale ? product.salePrice : product.price;
  const originalPrice = isOnSale ? product.price : null;

  return (
    <Link 
      href={`/product/${product.slug.current}`}
      className="group block"
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-50 mb-4 overflow-hidden">
        {product.images?.[0] ? (
          <Image
            src={product.images[0].url}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-400 text-sm">Ei kuvaa</span>
          </div>
        )}
        
        {/* Sale Badge */}
        {isOnSale && (
          <div className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">
            Tarjous
          </div>
        )}
        
        {/* Quick View Button (appears on hover) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-white text-black text-sm py-2 hover:bg-black hover:text-white transition-colors">
            Katso tuote
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          {product.category?.name || "Matto"}
        </p>        
        <h3 className="text-sm font-normal text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>        
        <p className="text-xs text-gray-500 mb-2 line-clamp-1 px-2">
          {product.material || "Laadukas materiaali"}
        </p>        
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-gray-900">
            {currentPrice?.toFixed(2)} €
          </span>          
          {originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {originalPrice.toFixed(2)} €
            </span>
          )}          
          {isOnSale && (
            <span className="text-xs text-blue-600">
              Jäsenhinta
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}