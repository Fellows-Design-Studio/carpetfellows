import Link from "next/link";

const footerLinks = {
  shop: [
    { name: "Kaikki matot", href: "/products" },
    { name: "Villamatot", href: "/products" },
    { name: "Käytävämatot", href: "/products" },
    { name: "Viskoosimatot", href: "/products" },
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
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-lg font-light tracking-widest uppercase">
              CarpetFellows
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Matot ja sisustus ystävällisesti. Laadukkaat skandinaaviset matot suoraan kotiovellesi.
            </p>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-sm font-normal uppercase tracking-wider mb-4">Kauppa</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info links */}
          <div>
            <h3 className="text-sm font-normal uppercase tracking-wider mb-4">Tietoa</h3>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-normal uppercase tracking-wider mb-4">Uutiskirje</h3>
            <p className="text-sm text-gray-500 mb-4">
              Tilaa uutiskirje ja saa ensimmäisenä tiedon uutuuksista.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Sähköpostiosoitteesi"
                className="flex-1 px-4 py-2 text-sm border border-gray-200 focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors"
              >
                Tilaa
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} CarpetFellows. Kaikki oikeudet pidätetään.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-gray-400 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}