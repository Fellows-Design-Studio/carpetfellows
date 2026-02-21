import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meistä",
  description: "Tutustu CarpetFellowsiin - skandinaavisen sisustuksen asiantuntija.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Meistä</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8">
            CarpetFellows on suomalainen perheyritys, joka on erikoistunut 
            laadukkaisiin skandinaavisiin mattoihin ja sisustustuotteisiin.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Tarina</h2>
          <p>
            CarpetFellows syntyi rakkaudesta kauniisiin koteihin ja laadukkaisiin 
            materiaaleihin. Vuonna 2020 perustettu yrityksemme on kasvanut 
            pienestä verkkokaupasta Suomen johtavaksi skandinaavisten mattojen 
            erikoisliikkeeksi.
          </p>
          
          <p>
            Valikoimamme koostuu huolellisesti valituista tuotteista, jotka 
            edustavat pohjoismaista design-filosofiaa: yksinkertaisuutta, 
            toiminnallisuutta ja kestävyyttä.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Arvomme</h2>
          
          <ul className="space-y-4">
            <li>
              <strong>Laatu:</strong> Jokainen tuote valitaan huolellisesti 
              laadun ja kestävyyden perusteella.
            </li>
            <li>
              <strong>Kestävyys:</strong> Suosimme ekologisia materiaaleja 
              ja kestäviä tuotantotapoja.
            </li>
            <li>
              <strong>Asiakaspalvelu:</strong> Olemme täällä sinua varten 
              - ystävällisesti ja ammattitaitoisesti.
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Ota yhteyttä</h2>
          
          <p>
            Onko sinulla kysyttävää? Olemme täällä auttamassa!
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 mt-6">
            <p>
              <strong>Sähköposti:</strong>{" "}
              <a href="mailto:info@carpetfellows.com" className="text-primary hover:underline">
                info@carpetfellows.com
              </a>
            </p>
            <p>
              <strong>Puhelin:</strong> 040 123 4567
            </p>
            <p>
              <strong>Osoite:</strong> Mattojenkatu 1, 00100 Helsinki
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
