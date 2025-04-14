
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    title: "T-shirts & Vêtements",
    description: "Personnalisez votre garde-robe avec des designs uniques",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    color: "bg-morocco-terracotta",
  },
  {
    id: 2,
    title: "Accessoires",
    description: "Des accessoires pour compléter votre style personnel",
    image: "https://images.unsplash.com/photo-1625591338802-2d816e2ecb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    color: "bg-morocco-blue", 
  },
  {
    id: 3,
    title: "Déco & Maison",
    description: "Embellissez votre intérieur avec des créations uniques",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    color: "bg-morocco-ocre", 
  },
  {
    id: 4,
    title: "Papeterie",
    description: "Donnez du caractère à votre communication écrite",
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    color: "bg-morocco-mint", 
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explorez nos catégories</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Découvrez notre large gamme de produits personnalisables, conçus pour s'adapter à tous vos besoins créatifs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 ${category.color} mix-blend-multiply opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white text-morocco-dark hover:bg-morocco-sand">
                    Découvrir
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-morocco-blue">Plusieurs modèles</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-morocco-blue transform group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="font-medium">
            Voir toutes les catégories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
