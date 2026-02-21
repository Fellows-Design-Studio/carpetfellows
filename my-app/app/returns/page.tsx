import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palautukset | CarpetFellows",
  description: "Palautusohjeet ja -ehdot CarpetFellows-verkkokaupasta. 14 päivän palautusoikeus.",
};

export default function ReturnsPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">
            Asiakaspalvelu
          </p>
          <h1 className="text-3xl lg:text-4xl font-light mb-12">Palautukset</h1>

          <div className="space-y-12">
            {/* Return Policy */}
            <section>
              <h2 className="text-lg font-normal mb-4">Palautusoikeus</h2>
              <div className="text-sm text-gray-600 space-y-2">
                <p>
                  Sinulla on oikeus palauttaa tilauksesi 14 päivän kuluessa tuotteen vastaanottamisesta.
                </p>
                <p>
                  Tuotteen tulee olla käyttämätön ja alkuperäisessä kunnossa. Pakkaus tulee olla avaamaton tai
                  tuote tulee olla varovasti avattu ja pakattu takaisin alkuperäiseen kuntoon.
                </p>
                <p>
                  Palautusoikeus ei koske asiakkaalle räätälöityjä tai mittatilaustyönä valmistettuja tuotteita.
                </p>
              </div>
            </section>

            {/* How to Return */}
            <section className="border-t border-gray-100 pt-12">
              <h2 className="text-lg font-normal mb-4">Miten palautan?</h2>
              <div className="text-sm text-gray-600">
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <span className="font-medium text-gray-900">Ilmoita palautuksesta:</span>{" "}
                    Lähetä sähköpostia osoitteeseen info@carpetfellows.fi ja kerro tilauksen numero.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Pakkaa tuote:</span>{" "}
                    Pakkaa tuote huolellisesti alkuperäiseen paketukseen tai vastaavaan.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Lähetä paketti:</span>{" "}
                    Käytä palautuslähetystä, jonka saat sähköpostiin ilmoituksen jälkeen.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Hyvitys:</span>{" "}
                    Hyvitämme rahat tilillesi 5-10 arkipäivän kuluessa palautuksen saapumisesta.
                  </li>
                </ol>
              </div>
            </section>

            {/* Return Costs */}
            <section className="border-t border-gray-100 pt-12">
              <h2 className="text-lg font-normal mb-4">Palautuskulut</h2>
              <div className="text-sm text-gray-600 space-y-2">
                <p>
                  <span className="text-gray-900">Virheellinen tai vaurioitunut tuote:</span>{" "}
                  Palautus on ilmainen. Hyvitämme myös alkuperäiset toimituskulut.
                </p>
                <p>
                  <span className="text-gray-900">Muu syy:</span>{" "}
                  Asiakas maksaa palautuskulut (6,90 €). Kulut vähennetään hyvityksestä.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="border-t border-gray-100 pt-12">
              <h2 className="text-lg font-normal mb-4">Kysyttävää palautuksista?</h2>
              <div className="text-sm text-gray-600">
                <p className="mb-2">Ota yhteyttä asiakaspalveluumme:</p>
                <p><span className="text-gray-900">Sähköposti:</span> info@carpetfellows.fi</p>
                <p><span className="text-gray-900">Puhelin:</span> 040 123 4567</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}