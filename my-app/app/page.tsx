import { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { CategoriesGrid } from "@/components/home/categories-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { getFeaturedProducts } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "CarpetFellows | Matot ja sisustus",
  description: "Laadukkaat skandinaaviset matot ja sisustustuotteet. Tutustu valikoimaamme ja löydä täydellinen matto kotiisi.",
};

export default async function HomePage() {
  const products = await getFeaturedProducts();

  return (
    <>
      <HeroSection />
      <CategoriesGrid />
      <FeaturedProducts products={products} />
    </>
  );
}