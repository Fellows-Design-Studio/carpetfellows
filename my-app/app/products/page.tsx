import { Metadata } from "next";
import { Suspense } from "react";
import { ProductGrid } from "@/components/product/product-grid";
import { ProductFilters } from "@/components/product/product-filters";
import { getProducts, getCategories } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Kaikki matot",
  description: "Selaa laajaa valikoimaamme laadukkaita skandinaavisia mattoja ja sisustustuotteita.",
};

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string;
    material?: string;
    size?: string;
    color?: string;
    minPrice?: string;
    maxPrice?: string;
    q?: string;
  }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  // Filter products based on search params
  let filteredProducts = products;

  if (params.category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category?.slug.current === params.category
    );
  }

  if (params.material) {
    const material = params.material;
    filteredProducts = filteredProducts.filter(
      (p) => p.material?.toLowerCase() === material.toLowerCase()
    );
  }

  if (params.color) {
    const color = params.color;
    filteredProducts = filteredProducts.filter(
      (p) => p.color?.toLowerCase() === color.toLowerCase()
    );
  }

  if (params.minPrice) {
    const minPrice = parseFloat(params.minPrice);
    filteredProducts = filteredProducts.filter(
      (p) => (p.salePrice || p.price) >= minPrice
    );
  }

  if (params.maxPrice) {
    const maxPrice = parseFloat(params.maxPrice);
    filteredProducts = filteredProducts.filter(
      (p) => (p.salePrice || p.price) <= maxPrice
    );
  }

  if (params.q) {
    const query = params.q.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description?.toLowerCase().includes(query) ||
        p.material?.toLowerCase().includes(query) ||
        p.color?.toLowerCase().includes(query)
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Kaikki matot</h1>
        <p className="text-muted-foreground">
          {filteredProducts.length} tuotetta
        </p>
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        <aside className="hidden lg:block">
          <Suspense fallback={<div>Loading filters...</div>}>
            <ProductFilters categories={categories} />
          </Suspense>
        </aside>

        <div>
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}