import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toimitus | CarpetFellows",
  description: "Toimitustiedot ja -ehdot CarpetFellows-verkkokaupasta.",
};

export default function ShippingPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">
            Asiakaspalvelu
          </p>
          <h1 className="text-3xl lg:text-4xl font-light mb-12">Toimitus</h1>

          <div className="space-y-12">
            {/* Delivery Times */}
            <section>
              <h2 className="text-lg font-normal mb-4">Toimitusajat</h2>
              <div className="text-sm text-gray-600 space-y-2">
                <p>
                  Toimitamme tilaukset 1-3 arkipäivän kuluessa tilauksen vastaanottamisesta.
                </p>
                <p>
                  Toimitusaika on yleensä 3-5 arkipäivää tilauksen lähettämisestä.
                </p>
                <p>
                  Saat sähköpostiin seurantalinkin, kun tilaus on lähetetty.
                </p>
              </div>
            </section>

            {/* Shipping Costs */}
            <section className="border-t border-gray-100 pt-12">
              <h2 className="text-lg font-normal mb-4">Toimituskulut</h2>
              <div className="text-sm text-gray-600">
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Tilaukset yli 100 €</span>
                    <span className="font-medium">Ilmainen</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Tilaukset alle 100 €</span>
                    <span className="font-medium">6,90 €</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Kotiinkuljetus</span>
                    <span className="font-medium">12,90 €</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Delivery Methods */}
            <section className="border-t border-gray-100 pt-12">
              <h2 className="text-lg font-normal mb-4">Toimitustavat</h2>
              <div className="text-sm text-gray-600 space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Postin pakettiautomaatti</h3>
                  <p>Nouda paketti lähimmästä Postin pakettiautomaatista.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Postin toimipiste</h3>
                  <p>Nouda paketti valitsemastasi Postin toimipisteestä.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Kotiinkuljetus</h3>
                  <p>Paketti toimitetaan kotiovelle sovitusti.</p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="border-t border-gray-100 pt-12">
              <h2 className="text-lg font-normal mb-4">Kysyttävää toimituksesta?</h2>
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