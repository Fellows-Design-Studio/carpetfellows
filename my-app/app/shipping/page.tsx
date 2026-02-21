import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toimitus",
  description: "Tietoa toimitusajoista ja -kustannuksista.",
};

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Toimitus</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Toimitusajat</h2>
          
          <p>
            Toimitamme tilaukset 1-2 arkipäivän kuluessa tilauksen vastaanottamisesta. 
            Toimitusaika on yleensä 3-5 arkipäivää Suomessa.
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 my-6">
            <h3 className="font-semibold mb-4">Toimitusajat maittain:</h3>
            <ul className="space-y-2">
              <li>Suomi: 3-5 arkipäivää</li>
              <li>Ruotsi: 4-6 arkipäivää</li>
              <li>Norja: 4-6 arkipäivää</li>
              <li>Tanska: 4-6 arkipäivää</li>
              <li>Viro: 3-5 arkipäivää</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Toimituskustannukset</h2>
          
          <p>
            Tarjoamme ilmaisen toimituksen kaikille yli 100 € tilauksille. 
            Alle 100 € tilauksissa toimituskustannus on 5,90 €.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Seuranta</h2>
          
          <p>
            Saat sähköpostiisi seurantanumeron, kun tilauksesi on lähetetty. 
            Voit seurata lähetystä Postin tai muun kuljetusyhtiön verkkosivuilla.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Nouto varastolta</h2>
          
          <p>
            Voit myös noutaa tilauksesi veloituksetta varastoltamme Helsingistä. 
            Valitse kassalla "Nouto varastolta" toimitustavaksi.
          </p>
        </div>
      </div>
    </div>
  );
}
