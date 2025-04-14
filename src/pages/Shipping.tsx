
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, Package, Clock, ShieldCheck } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Livraison et Retours
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Truck className="w-12 h-12 text-morocco-terracotta mb-4" />
                <h2 className="text-xl font-bold mb-4">Livraison Nationale</h2>
                <p className="text-gray-700">
                  Livraison disponible dans tout le Maroc. Délais de 3-7 jours ouvrés selon
                  votre localisation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Package className="w-12 h-12 text-morocco-blue mb-4" />
                <h2 className="text-xl font-bold mb-4">Emballage Sécurisé</h2>
                <p className="text-gray-700">
                  Vos produits sont soigneusement emballés pour garantir une livraison en
                  parfait état.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Clock className="w-12 h-12 text-morocco-ocre mb-4" />
                <h2 className="text-xl font-bold mb-4">Suivi en Temps Réel</h2>
                <p className="text-gray-700">
                  Suivez votre commande en temps réel grâce à notre système de tracking
                  en ligne.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ShieldCheck className="w-12 h-12 text-morocco-mint mb-4" />
                <h2 className="text-xl font-bold mb-4">Garantie Satisfait</h2>
                <p className="text-gray-700">
                  Retours acceptés sous 14 jours pour les produits non personnalisés.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h2 className="text-2xl font-bold mb-6">Tarifs de Livraison</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h3 className="font-bold">Casablanca</h3>
                    <p className="text-sm text-gray-600">Délai: 2-3 jours</p>
                  </div>
                  <span className="font-bold text-morocco-terracotta">30 DH</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h3 className="font-bold">Grandes Villes</h3>
                    <p className="text-sm text-gray-600">Délai: 3-5 jours</p>
                  </div>
                  <span className="font-bold text-morocco-terracotta">40 DH</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">Autres Régions</h3>
                    <p className="text-sm text-gray-600">Délai: 5-7 jours</p>
                  </div>
                  <span className="font-bold text-morocco-terracotta">50 DH</span>
                </div>
              </div>
            </div>

            <div className="bg-morocco-sand/30 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Questions sur votre livraison ?</h2>
              <p className="text-gray-700 mb-6">
                Notre équipe est disponible pour répondre à toutes vos questions concernant
                les livraisons et les retours.
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

export default Shipping;
