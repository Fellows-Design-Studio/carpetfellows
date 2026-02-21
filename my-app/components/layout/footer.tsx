import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  shop: [
    { name: "Kaikki matot", href: "/products" },
    { name: "Villamatot", href: "/products?material=villa" },
    { name: "Puuvillamatot", href: "/products?material=puuvilla" },
    { name: "Ryijyt", href: "/products?category=ryijyt" },
  ],
  info: [
    { name: "Meistä", href: "/about" },
    { name: "Toimitus", href: "/shipping" },
    { name: "Palautukset", href: "/returns" },
    { name: "Yhteydenotto", href: "/contact" },
  ],
  legal: [
    { name: "Tietosuoja", href: "/privacy" },
    { name: "Käyttöehdot", href: "/terms" },
    { name: "Evästeet", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-primary">
              CarpetFellows
            </Link>
            <p className="text-sm text-muted-foreground">
              Matot ja sisustus - ystävällisesti. Laadukkaat skandinaaviset matot suoraan kotiovellesi.
            </p>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="font-semibold mb-4">Kauppa</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info links */}
          <div>
            <h3 className="font-semibold mb-4">Tietoa</h3>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="font-semibold mb-4">Lakiasiat</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CarpetFellows. Kaikki oikeudet pidätetään.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ in Finland
          </p>
        </div>
      </div>
    </footer>
  );
}
