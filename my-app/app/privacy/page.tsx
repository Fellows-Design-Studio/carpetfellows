import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tietosuoja",
  description: "CarpetFellowsin tietosuojakäytäntö.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Tietosuoja</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">
            Viimeksi päivitetty: {new Date().toLocaleDateString("fi-FI")}
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Keräämämme tiedot</h2>
          
          <p>Keräämme seuraavia tietoja, kun teet tilauksen tai tilaat uutiskirjeemme:</p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Nimi ja yhteystiedot</li>
            <li>Toimitusosoite</li>
            <li>Sähköpostiosoite</li>
            <li>Puhelinnumero</li>
            <li>Tilaushistoria</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Miten käytämme tietoja</h2>
          
          <p>Käytämme tietojasi seuraaviin tarkoituksiin:</p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Tilausten käsittely ja toimitus</li>
            <li>Asiakaspalvelu</li>
            <li>Uutiskirjeiden lähetys (vain suostumuksellasi)</li>
            <li>Palvelun kehittäminen</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Tietojen suojaus</h2>
          
          <p>
            Suojelemme henkilötietojasi asianmukaisesti. Käytämme SSL-salausta 
            kaikessa tiedonsiirrossa, emmekä jaa tietojasi kolmansille osapuolille 
            ilman suostumustasi.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Evästeet</h2>
          
          <p>Käytämme evästeitä parantaaksemme käyttökokemustasi. Voit hallita 
          evästeasetuksia selaimesi asetuksista.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Yhteystiedot</h2>
          
          <p>Tietosuoja-asioissa voit ottaa yhteyttä:</p>
          
          <p>
            CarpetFellows Oy<br />
            Mattojenkatu 1<br />
            00100 Helsinki<br />
            <a href="mailto:tietosuoja@carpetfellows.com" className="text-primary hover:underline">
              tietosuoja@carpetfellows.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
