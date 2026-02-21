import { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { CategoriesGrid } from "@/components/home/categories-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { getFeaturedProducts, getCategories } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "CarpetFellows | Matot ja sisustus - ystävällisesti",
  description: "Laadukkaat skandinaaviset matot ja sisustustuotteet. Tutustu valikoimaamme ja löydä täydellinen matto kotiisi.",
  alternates: {
    canonical: "/",
  },
};

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getFeaturedProducts(),
    getCategories(),
  ]);

  return (
    <>
      <HeroSection />
      <CategoriesGrid categories={categories} />
      <FeaturedProducts products={products} />
      <NewsletterSection />
      
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "CarpetFellows",
            url: process.env.NEXT_PUBLIC_SITE_URL || "https://carpetfellows.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || "https://carpetfellows.com"}/products?q={search_term_string}`,
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "CarpetFellows",
            description: "Laadukkaat skandinaaviset matot ja sisustustuotteet",
            url: process.env.NEXT_PUBLIC_SITE_URL || "https://carpetfellows.com",
            logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://carpetfellows.com"}/logo.png`,
            sameAs: [
              "https://facebook.com/carpetfellows",
              "https://instagram.com/carpetfellows",
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry: "FI",
            },
          }),
        }}
      />
    </>
  );
}
