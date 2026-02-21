"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/sanity";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/store/cart";
import { toast } from "sonner";
import { ShoppingCart, Check, Minus, Plus } from "lucide-react";

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
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
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
              <span className="text-6xl">🏠</span>
            </div>
          )}

          {isOnSale && (
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              Tarjous
            </Badge>
          )}
        </div>

        {/* Thumbnail Gallery */}
        {product.images && product.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${
                  selectedImage === index
                    ? "border-primary"
                    : "border-transparent hover:border-primary/50"
                }`}
              >
                <Image
                  src={image.url}
                  alt={`${product.name} - kuva ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-2">
            {product.category?.name}
          </p>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-primary">
              {currentPrice.toFixed(2)} €
            </span>
            {isOnSale && (
              <span className="text-xl text-muted-foreground line-through">
                {product.price.toFixed(2)} €
              </span>
            )}
          </div>
        </div>

        {/* Product Meta */}
        <div className="flex flex-wrap gap-4 text-sm">
          {product.material && (
            <div>
              <span className="text-muted-foreground">Materiaali: {" "}</span>
              <span className="font-medium">{product.material}</span>
            </div>
          )}
          {product.size && (
            <div>
              <span className="text-muted-foreground">Koko: {" "}</span>
              <span className="font-medium">{product.size}</span>
            </div>
          )}
          {product.color && (
            <div>
              <span className="text-muted-foreground">Väri: {" "}</span>
              <span className="font-medium">{product.color}</span>
            </div>
          )}
        </div>

        {/* Stock Status */}
        <div>
          {isOutOfStock ? (
            <Badge variant="secondary">Loppu varastosta</Badge>
          ) : product.stock <= 5 ? (
            <Badge variant="destructive">Vain {product.stock} jäljellä</Badge>
          ) : (
            <Badge variant="outline" className="text-green-600 border-green-600">
              Varastossa
            </Badge>
          )}
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(Math.min(product.stock || 10, quantity + 1))}
              disabled={quantity >= (product.stock || 10)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Button
            size="lg"
            className="flex-1 min-w-[200px] gap-2"
            onClick={handleAddToCart}
            disabled={isOutOfStock}
          >
            <ShoppingCart className="h-5 w-5" />
            {isOutOfStock ? "Loppu varastosta" : "Lisää ostoskoriin"}
          </Button>
        </div>

        {/* Product Description Tabs */}
        <Tabs defaultValue="description" className="pt-6">
          <TabsList className="w-full">
            <TabsTrigger value="description" className="flex-1">Kuvaus</TabsTrigger>
            <TabsTrigger value="details" className="flex-1">Tiedot</TabsTrigger>
            <TabsTrigger value="shipping" className="flex-1">Toimitus</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="pt-4">
            <div className="prose prose-sm max-w-none">
              {product.description ? (
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
              ) : (
                <p className="text-muted-foreground">Ei kuvausta saatavilla.</p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="details" className="pt-4">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.material && (
                <>
                  <dt className="text-muted-foreground">Materiaali</dt>
                  <dd className="font-medium">{product.material}</dd>
                </>
              )}
              {product.size && (
                <>
                  <dt className="text-muted-foreground">Koko</dt>
                  <dd className="font-medium">{product.size}</dd>
                </>
              )}
              {product.color && (
                <>
                  <dt className="text-muted-foreground">Väri</dt>
                  <dd className="font-medium">{product.color}</dd>
                </>
              )}
              <dt className="text-muted-foreground">Tuotekoodi</dt>
              <dd className="font-medium">{product._id}</dd>
            </dl>
          </TabsContent>
          
          <TabsContent value="shipping" className="pt-4">
            <div className="space-y-2 text-sm">
              <p>
                <strong>Ilmainen toimitus</strong> yli 100 € tilauksille.
              </p>
              <p>Toimitusaika 3-5 arkipäivää.</p>
              <p>
                <a href="/shipping" className="text-primary hover:underline">
                  Lue lisää toimituksesta
                </a>
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
