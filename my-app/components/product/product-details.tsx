"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/sanity";
import { useCart } from "@/store/cart";
import { toast } from "sonner";
import { Minus, Plus } from "lucide-react";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCart((state) => state.addItem);

  const isOnSale = product.salePrice && product.salePrice < product.price;
  const currentPrice = isOnSale ? product.salePrice! : product.price;
  const isOutOfStock = product.stock === 0;

  const handleAddToCart = () => {
    if (isOutOfStock) {
      toast.error("Tuote on loppu varastosta");
      return;
    }

    addItem({
      id: product._id,
      name: product.name,
      price: currentPrice,
      image: product.images?.[0]?.url || "",
      quantity,
    });

    toast.success(`${product.name} lisätty ostoskoriin`);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="relative aspect-square bg-gray-50 overflow-hidden">
          {product.images?.[selectedImage] ? (
            <Image
              src={product.images[selectedImage].url}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400">Ei kuvaa</span>
            </div>
          )}

          {isOnSale && (
            <div className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1">
              Tarjous
            </div>
          )}
        </div>

        {/* Thumbnail Gallery */}
        {product.images && product.images.length > 1 && (
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-16 h-16 overflow-hidden border ${
                  selectedImage === index
                    ? "border-black"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <Image
                  src={image.url}
                  alt={`${product.name} - kuva ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
            {product.category?.name || "Matto"}
          </p>
          <h1 className="text-2xl lg:text-3xl font-light mb-4">{product.name}</h1>

          <div className="flex items-center gap-3">
            <span className="text-xl">
              {currentPrice.toFixed(2)} €
            </span>
            {isOnSale && (
              <span className="text-sm text-gray-400 line-through">
                {product.price.toFixed(2)} €
              </span>
            )}
            {isOnSale && (
              <span className="text-xs text-blue-600">
                Jäsenhinta
              </span>
            )}
          </div>
        </div>

        {/* Product Meta */}
        <div className="space-y-2 text-sm border-t border-b border-gray-100 py-4">
          {product.material && (
            <div className="flex justify-between">
              <span className="text-gray-500">Materiaali</span>
              <span>{product.material}</span>
            </div>
          )}
          {product.size && (
            <div className="flex justify-between">
              <span className="text-gray-500">Koko</span>
              <span>{product.size}</span>
            </div>
          )}
          {product.color && (
            <div className="flex justify-between">
              <span className="text-gray-500">Väri</span>
              <span>{product.color}</span>
            </div>
          )}
        </div>

        {/* Stock Status */}
        <div className="text-sm">
          {isOutOfStock ? (
            <span className="text-gray-500">Loppu varastosta</span>
          ) : product.stock <= 5 ? (
            <span className="text-orange-600">Vain {product.stock} jäljellä</span>
          ) : (
            <span className="text-green-600">Varastossa</span>
          )}
        </div>

        {/* Quantity and Add to Cart */}
        <div className="space-y-4">
          <div className="flex items-center border border-gray-200 w-fit">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="px-4 py-2 hover:bg-gray-50 disabled:opacity-50"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-12 text-center text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(Math.min(product.stock || 10, quantity + 1))}
              disabled={quantity >= (product.stock || 10)}
              className="px-4 py-2 hover:bg-gray-50 disabled:opacity-50"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className="w-full bg-black text-white py-3 text-sm tracking-wide hover:bg-gray-800 disabled:bg-gray-300 transition-colors"
          >
            {isOutOfStock ? "Loppu varastosta" : "Lisää ostoskoriin"}
          </button>
        </div>

        {/* Description */}
        <div className="pt-6 border-t border-gray-100">
          <h3 className="text-sm uppercase tracking-wider mb-4">Kuvaus</h3>
          <div className="text-sm text-gray-600 leading-relaxed">
            {product.description || "Ei kuvausta saatavilla."}
          </div>
        </div>

        {/* Shipping */}
        <div className="pt-6 border-t border-gray-100">
          <h3 className="text-sm uppercase tracking-wider mb-4">Toimitus</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Ilmainen toimitus yli 100 € tilauksille.</p>
            <p>Toimitusaika 3-5 arkipäivää.</p>
          </div>
        </div>
      </div>
    </div>
  );
}