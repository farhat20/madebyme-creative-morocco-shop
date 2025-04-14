
import { PenTool, Package, Truck, ThumbsUp } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Créez votre design",
    description: "Utilisez notre éditeur simple et intuitif pour personnaliser vos produits exactement comme vous le souhaitez.",
    icon: PenTool,
    color: "bg-morocco-terracotta",
  },
  {
    id: 2,
    title: "Nous produisons",
    description: "Notre équipe fabrique votre commande avec soin, utilisant des matériaux de qualité et des technologies de pointe.",
    icon: Package,
    color: "bg-morocco-blue",
  },
  {
    id: 3,
    title: "Livraison rapide",
    description: "Recevez votre commande directement à votre domicile partout au Maroc dans les meilleurs délais.",
    icon: Truck,
    color: "bg-morocco-ocre",
  },
  {
    id: 4,
    title: "Satisfaction garantie",
    description: "Nous nous engageons à vous offrir des produits de qualité et un service client irréprochable.",
    icon: ThumbsUp,
    color: "bg-morocco-mint",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça marche</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Un processus simple en quelques étapes pour transformer vos idées en produits personnalisés de qualité.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative z-10 h-full">
                  <div className={`${step.color} text-white w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0`}>
                    <step.icon size={24} />
                  </div>
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full border-4 border-white bg-morocco-sand flex items-center justify-center font-bold text-morocco-dark md:block hidden">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center md:text-left">{step.title}</h3>
                  <p className="text-gray-600 text-center md:text-left">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center bg-morocco-sand/30 p-8 rounded-lg border border-morocco-sand">
          <h3 className="text-xl font-bold mb-3 text-morocco-dark">Vous avez des questions ?</h3>
          <p className="text-gray-700 mb-6">
            Notre équipe est là pour vous accompagner tout au long du processus de création et de commande.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="px-6 py-2 bg-white border border-morocco-terracotta text-morocco-terracotta rounded-md font-medium hover:bg-morocco-terracotta hover:text-white transition-colors duration-300">
              Nous contacter
            </a>
            <a href="/faq" className="px-6 py-2 bg-white border border-morocco-blue text-morocco-blue rounded-md font-medium hover:bg-morocco-blue hover:text-white transition-colors duration-300">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
