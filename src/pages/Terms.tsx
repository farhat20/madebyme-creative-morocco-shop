
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Conditions d&apos;utilisation</h1>
            
            <div className="prose prose-lg">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  En accédant et en utilisant la plateforme MadeByMe, vous acceptez d&apos;être lié
                  par les présentes conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces conditions,
                  veuillez ne pas utiliser notre plateforme.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Utilisation du Service</h2>
                <p className="text-gray-700 mb-4">
                  MadeByMe vous permet de créer, personnaliser et commander des produits. Vous
                  vous engagez à utiliser le service de manière légale et à respecter les droits
                  de propriété intellectuelle.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Comptes Utilisateurs</h2>
                <p className="text-gray-700 mb-4">
                  Pour utiliser certaines fonctionnalités de notre plateforme, vous devrez créer
                  un compte. Vous êtes responsable de maintenir la confidentialité de vos
                  informations de connexion.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Propriété Intellectuelle</h2>
                <p className="text-gray-700 mb-4">
                  Tous les contenus présents sur MadeByMe sont protégés par les lois sur la
                  propriété intellectuelle. Vous ne pouvez pas les utiliser sans notre
                  autorisation explicite.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Commandes et Paiements</h2>
                <p className="text-gray-700 mb-4">
                  Les commandes sont soumises à notre acceptation. Les prix sont en dirhams
                  marocains et peuvent être modifiés sans préavis. Le paiement est requis au
                  moment de la commande.
                </p>
              </section>
            </div>

            <div className="mt-12 bg-morocco-sand/30 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Des questions ?</h2>
              <p className="text-gray-700 mb-6">
                Si vous avez des questions concernant nos conditions d&apos;utilisation,
                n&apos;hésitez pas à nous contacter.
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

export default Terms;
