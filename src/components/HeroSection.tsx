
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background pattern - Moroccan inspired */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CB6D51' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}/>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-morocco-terracotta">Créez.</span> <span className="text-morocco-blue">Personnalisez.</span> <span className="text-morocco-ocre">Commandez.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Exprimez votre créativité avec MadeByMe, la première plateforme marocaine de produits personnalisés. Concevez facilement vos propres designs, nous nous occupons du reste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-morocco-terracotta hover:bg-morocco-clay text-white font-medium">
                Commencer à créer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="font-medium">
                Découvrir les produits
              </Button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="h-96 relative overflow-hidden">
                <div className="absolute inset-0 bg-morocco-sand/50"></div>
                {/* Image will be added as a background */}
                <div className="absolute inset-0 bg-cover bg-center" style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1517135414084-7d13ed992c11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')",
                  backgroundBlendMode: "overlay"
                }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-xs text-center">
                    <h3 className="text-2xl font-bold mb-2">Édition facile</h3>
                    <p className="text-sm text-gray-700">Créez votre design personnalisé en quelques clics avec notre éditeur intuitif</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-morocco-mint rounded-full" />
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-morocco-ocre rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
