import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meistä | CarpetFellows",
  description: "Tutustu CarpetFellowsiin - skandinaavisen sisustuksen asiantuntija.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">
            CarpetFellows
          </p>
          <h1 className="text-3xl lg:text-5xl font-light mb-6">
            Matot ja sisustus
            <br />
            <span className="font-normal">ystävällisesti</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed">
            Olemme suomalainen perheyritys, joka on erikoistunut laadukkaisiin 
            skandinaavisiin mattoihin. Valikoimamme koostuu huolellisesti valituista 
            tuotteista, jotka edustavat pohjoismaista design-filosofiaa.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-sm uppercase tracking-wider mb-4">Laatu</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Jokainen tuote valitaan huolellisesti laadun ja kestävyyden perusteella.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-sm uppercase tracking-wider mb-4">Kestävyys</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Suosimme ekologisia materiaaleja ja kestäviä tuotantotapoja.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-sm uppercase tracking-wider mb-4">Palvelu</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Olemme täällä sinua varten - ystävällisesti ja ammattitaitoisesti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-light mb-8">Ota yhteyttä</h2>
            
            <div className="space-y-4 text-sm">
              <p>
                <span className="text-gray-500">Sähköposti:</span>{" "}
                <a href="mailto:info@carpetfellows.fi" className="hover:text-gray-600">
                  info@carpetfellows.fi
                </a>
              </p>
              <p>
                <span className="text-gray-500">Puhelin:</span>{" "}
                040 123 4567
              </p>
              <p>
                <span className="text-gray-500">Osoite:</span>{" "}
                Mattojenkatu 1, 00100 Helsinki
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}