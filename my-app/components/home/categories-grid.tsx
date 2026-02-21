import Link from "next/link";
import Image from "next/image";

// Staattiset kategoriat Marimekko-tyylisesti
const categories = [
  {
    id: "matot",
    name: "Matot",
    image: "/images/category-rugs.jpg",
    href: "/products",
  },
  {
    id: "villamatot",
    name: "Villamatot",
    image: "/images/category-wool.jpg",
    href: "/products",
  },
  {
    id: "kaytavamatot",
    name: "Käytävämatot",
    image: "/images/category-runners.jpg",
    href: "/products",
  },
  {
    id: "viskoosimatot",
    name: "Viskoosimatot",
    image: "/images/category-viscose.jpg",
    href: "/products",
  },
];

export function CategoriesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-sm tracking-widest uppercase text-gray-500 mb-4 text-center">
          Osta kategorioittain
        </p>
        <h2 className="text-2xl lg:text-3xl font-light text-center mb-12">
          Selaa valikoimaamme
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative aspect-[3/4] overflow-hidden bg-gray-100"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" /
              
              {/* Category name at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-lg font-light tracking-wide drop-shadow-lg">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}