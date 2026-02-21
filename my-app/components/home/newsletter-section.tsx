"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail, ArrowRight, Check } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Syötä validi sähköpostiosoite");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSuccess(true);
    toast.success("Kiitos tilauksesta!");
    setEmail("");

    // Reset success state after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Tilaa uutiskirjeemme</h2>
          
          <p className="text-muted-foreground mb-8">
            Saa ensimmäisenä tietoa uusista tuotteista, tarjouksista ja 
            sisustusvinkkejä suoraan sähköpostiisi.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="sähköposti@esimerkki.fi"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              disabled={isLoading}
            />
            
            <Button 
              type="submit" 
              disabled={isLoading || isSuccess}
              className="gap-2"
            >
              {isSuccess ? (
                <>
                  <Check className="h-4 w-4" />
                  Tilattu!
                </>
              ) : (
                <>
                  Tilaa
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            Tilaamalla uutiskirjeen hyväksyt{" "}
            <a href="/privacy" className="underline hover:text-primary">
              tietosuojakäytäntömme
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
