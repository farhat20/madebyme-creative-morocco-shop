
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-morocco-terracotta to-morocco-blue bg-clip-text text-transparent">
                MadeByMe
              </h2>
            </div>
            <p className="text-gray-400 mb-4">
              La première plateforme marocaine dédiée à la création et à la vente de produits personnalisés, conçue pour les designers, artistes et étudiants.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Produits
                </a>
              </li>
              <li>
                <a href="/editor" className="text-gray-400 hover:text-white transition-colors">
                  Créer
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  Comment ça marche
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Livraison et retours
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-morocco-terracotta mr-2 mt-0.5" />
                <span className="text-gray-400">
                  123 Rue Mohammed V, Casablanca, Maroc
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-morocco-terracotta mr-2" />
                <span className="text-gray-400">+212 522 123 456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-morocco-terracotta mr-2" />
                <span className="text-gray-400">contact@madebyme.ma</span>
              </li>
            </ul>
            <div className="mt-4 bg-gray-800 rounded-lg p-4">
              <h4 className="text-sm font-medium mb-2">Inscrivez-vous à notre newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-morocco-blue"
                />
                <button className="bg-morocco-terracotta text-white px-4 py-2 rounded-r-md hover:bg-morocco-clay transition-colors">
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MadeByMe. Tous droits réservés.
          </p>
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_Morocco.svg/800px-Flag_of_Morocco.svg.png"
                alt="Drapeau du Maroc"
                className="w-5 h-3"
              />
              <span className="text-sm text-gray-500">Fabriqué au Maroc avec ❤️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
