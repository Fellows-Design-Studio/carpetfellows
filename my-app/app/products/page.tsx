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
  searchParams: {
    category?: string;
    material?: string;
    size?: string;
    color?: string;
    minPrice?: string;
    maxPrice?: string;
    q?: string;
  };
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  // Filter products based on search params
  let filteredProducts = products;

  if (searchParams.category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category?.slug.current === searchParams.category
    );
  }

  if (searchParams.material) {
    const material = searchParams.material;
    filteredProducts = filteredProducts.filter(
      (p) => p.material?.toLowerCase() === material.toLowerCase()
    );
  }

  if (searchParams.color) {
    const color = searchParams.color;
    filteredProducts = filteredProducts.filter(
      (p) => p.color?.toLowerCase() === color.toLowerCase()
    );
  }

  if (searchParams.minPrice) {
    const minPrice = parseFloat(searchParams.minPrice);
    filteredProducts = filteredProducts.filter(
      (p) => (p.salePrice || p.price) >= minPrice
    );
  }

  if (searchParams.maxPrice) {
    const maxPrice = parseFloat(searchParams.maxPrice);
    filteredProducts = filteredProducts.filter(
      (p) => (p.salePrice || p.price) <= maxPrice
    );
  }

  if (searchParams.q) {
    const query = searchParams.q.toLowerCase();
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
