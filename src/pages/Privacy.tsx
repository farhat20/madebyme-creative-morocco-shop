
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Politique de Confidentialité
            </h1>

            <div className="prose prose-lg">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Collecte des Données</h2>
                <p className="text-gray-700 mb-4">
                  Nous collectons les informations que vous nous fournissez lors de la création
                  de votre compte, de vos commandes et de vos interactions avec notre plateforme.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Utilisation des Données</h2>
                <p className="text-gray-700 mb-4">
                  Vos données sont utilisées pour traiter vos commandes, personnaliser votre
                  expérience et améliorer nos services. Nous ne vendons jamais vos informations
                  personnelles à des tiers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Protection des Données</h2>
                <p className="text-gray-700 mb-4">
                  Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos
                  données contre tout accès, modification ou divulgation non autorisés.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre plateforme.
                  Vous pouvez contrôler les cookies via les paramètres de votre navigateur.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Vos Droits</h2>
                <p className="text-gray-700 mb-4">
                  Vous avez le droit d&apos;accéder à vos données, de les corriger ou de les
                  supprimer. Contactez-nous pour exercer ces droits.
                </p>
              </section>
            </div>

            <div className="mt-12 bg-morocco-sand/30 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Protection de Vos Données</h2>
              <p className="text-gray-700 mb-6">
                La protection de vos données personnelles est notre priorité. Pour toute
                question, n&apos;hésitez pas à nous contacter.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-morocco-terracotta text-white rounded-md hover:bg-morocco-clay transition-colors"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
