
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Users2, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">À propos de MadeByMe</h1>
            <p className="text-lg text-gray-700">
              MadeByMe est la première plateforme marocaine dédiée à la création et à la vente
              de produits personnalisés. Notre mission est de permettre à chacun d&apos;exprimer
              sa créativité tout en soutenant l&apos;industrie locale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Building2 className="w-12 h-12 text-morocco-terracotta mb-4" />
              <h2 className="text-xl font-bold mb-4">Notre Histoire</h2>
              <p className="text-gray-700">
                Fondée en 2024 à Casablanca, MadeByMe est née de la vision de créer
                un pont entre la créativité marocaine et la production locale de qualité.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Users2 className="w-12 h-12 text-morocco-blue mb-4" />
              <h2 className="text-xl font-bold mb-4">Notre Équipe</h2>
              <p className="text-gray-700">
                Une équipe passionnée de designers, développeurs et experts en
                production, unis par l&apos;ambition de révolutionner le marché des
                produits personnalisés au Maroc.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Target className="w-12 h-12 text-morocco-ocre mb-4" />
              <h2 className="text-xl font-bold mb-4">Notre Mission</h2>
              <p className="text-gray-700">
                Démocratiser la personnalisation de produits tout en soutenant
                l&apos;artisanat et l&apos;industrie locale marocaine.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-morocco-mint mb-4" />
              <h2 className="text-xl font-bold mb-4">Nos Valeurs</h2>
              <p className="text-gray-700">
                Qualité, innovation, durabilité et engagement envers notre communauté
                sont au cœur de tout ce que nous faisons.
              </p>
            </div>
          </div>

          <div className="bg-morocco-sand/30 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Rejoignez l&apos;Aventure</h2>
            <p className="text-gray-700 mb-6">
              Nous sommes toujours à la recherche de talents passionnés pour rejoindre
              notre équipe en pleine croissance.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center px-6 py-3 bg-morocco-terracotta text-white rounded-md hover:bg-morocco-clay transition-colors"
            >
              Voir nos offres d&apos;emploi
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
