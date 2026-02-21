import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Matot ja sisustus{" "}
              <span className="text-primary">ystävällisesti</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
              Laadukkaat skandinaaviset matot ja sisustustuotteet kotiisi. 
              Kestävää laatua ja ajatonta designia.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/products">
                  Tutustu valikoimaan
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Lue lisää meistä
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Tuotetta</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Kestävää</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">Ilmainen</p>
                <p className="text-sm text-muted-foreground">Toimitus</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary overflow-hidden">
              {/* Placeholder for hero image - replace with actual image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-16 h-16 text-primary"
                    >
                      <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">Hero Image</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
