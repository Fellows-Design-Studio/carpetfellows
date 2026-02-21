import Link from "next/link";
import Image from "next/image";
import { Category } from "@/types/sanity";

interface CategoriesGridProps {
  categories: Category[];
}

export function CategoriesGrid({ categories }: CategoriesGridProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Selaa kategorioittain</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Löydä täydellinen matto kotiisi laajasta valikoimastamme
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/products?category=${category.slug.current}`}
              className="group relative aspect-square rounded-xl overflow-hidden bg-secondary"
            >
              {category.image ? (
                <Image
                  src={category.image.url}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-secondary">
                  <span className="text-4xl">🏠</span>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.productCount || 0} tuotetta</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
