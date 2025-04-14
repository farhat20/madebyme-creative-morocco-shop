
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Comment puis-je créer mon propre design ?",
    answer: "Notre éditeur en ligne vous permet de créer facilement vos designs personnalisés. Sélectionnez un produit, utilisez nos outils de design intuitifs pour ajouter du texte, des images et des motifs, puis prévisualisez votre création avant de commander.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Les délais de livraison varient selon votre localisation au Maroc. En général, comptez 3-5 jours ouvrés pour les grandes villes et 5-7 jours pour les autres régions. Vous recevrez un numéro de suivi dès l'expédition de votre commande.",
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer: "Nous acceptons les paiements par carte bancaire, PayPal, et le paiement à la livraison dans certaines zones. Tous les paiements sont sécurisés et cryptés pour votre protection.",
  },
  {
    question: "Quelle est votre politique de retour ?",
    answer: "Nous acceptons les retours dans les 14 jours suivant la réception pour les produits non personnalisés et en parfait état. Les produits personnalisés ne peuvent être retournés que s'ils présentent un défaut de fabrication.",
  },
  {
    question: "Puis-je modifier ma commande après l'avoir passée ?",
    answer: "Les modifications sont possibles uniquement dans l'heure qui suit la commande. Contactez immédiatement notre service client si vous souhaitez effectuer des changements.",
  },
  {
    question: "Quelle est la qualité des produits ?",
    answer: "Nous travaillons exclusivement avec des fournisseurs marocains de qualité et utilisons des matériaux durables. Chaque produit est vérifié avant expédition pour garantir sa qualité.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Questions Fréquentes
            </h1>
            <p className="text-gray-700 text-center mb-12">
              Trouvez rapidement des réponses à vos questions sur nos produits et services.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 bg-morocco-sand/30 p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold mb-4">Vous ne trouvez pas votre réponse ?</h2>
              <p className="text-gray-700 mb-6">
                Notre équipe de support est là pour vous aider avec toutes vos questions.
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

export default FAQ;
