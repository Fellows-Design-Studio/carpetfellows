import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px]">
      {/* Full-width hero image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-rug.jpg"
          alt="CarpetFellows - Skandinaaviset matot"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Text content - top left */}
      <div className="relative h-full container mx-auto px-6 lg:px-12">
        <div className="pt-16 lg:pt-24 max-w-xl">
          <p className="text-sm tracking-widest uppercase text-white/90 mb-4">
            Uutta saapunut
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
            Kevään matot
            <br />
            <span className="font-normal">ovat täällä</span>
          </h1>
          <Link
            href="/products"
            className="inline-block bg-white text-black px-8 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
          >
            Tutustu valikoimaan
          </Link>
        </div>
      </div>
    </section>
  );
}