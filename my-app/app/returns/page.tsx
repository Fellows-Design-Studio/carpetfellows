import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palautukset",
  description: "Tietoa palautuskäytännöistämme.",
};

export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Palautukset</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">14 päivän palautusoikeus</h2>
          
          <p>
            Sinulla on oikeus palauttaa tilauksesi tai osa siitä 14 vuorokauden 
            kuluessa tilauksen vastaanottamisesta. Palautusoikeus koskee 
            käyttämättömiä ja myyntikuntoisia tuotteita.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Miten palautan tuotteen?</h2>
          
          <ol className="list-decimal list-inside space-y-2">
            <li>Täytä palautuslomake, joka toimitettiin tilauksen mukana</li>
            <li>Pakkaa tuote huolellisesti alkuperäispakkaukseen</li>
            <li>Liitä palautuslomake pakkaukseen</li>
            <li>Toimita paketti lähimpään Postin toimipisteeseen</li>
          </ol>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Palautuskustannukset</h2>
          
          <p>
            Asiakas vastaa palautuskustannuksista, paitsi jos tuote on 
            viallinen tai väärä tuote on toimitettu. Palautuskustannus on 
            5,90 €, joka vähennetään hyvityksestä.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Hyvitys</h2>
          
          <p>
            Hyvitämme palautetut tuotteet 14 päivän kuluessa palautuksen 
            vastaanottamisesta. Hyvitys tehdään samalla maksutavalla, 
            jolla alkuperäinen maksu suoritettiin.
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 mt-8">
            <h3 className="font-semibold mb-2">Huomioitavaa:</h3>
            <p className="text-sm">
              Mittatilaustyönä valmistettuja tuotteita ei voi palauttaa 
              kuluttajansuojalain mukaisesti. Tarkista aina mittatilauksen 
              tiedot ennen tilaamista.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
