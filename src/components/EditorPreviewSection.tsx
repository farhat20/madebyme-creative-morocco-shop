
import { Button } from "@/components/ui/button";
import { Layers, Text, Image, PenSquare, PaintBucket, Download } from "lucide-react";

const EditorPreviewSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-morocco-sand/20 to-morocco-mint/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre éditeur de design</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Un outil simple et puissant pour donner vie à vos créations, même sans compétences en design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold mb-4">Créez sans limites</h3>
            <p className="text-gray-700 mb-6">
              Notre éditeur intuitif vous permet de personnaliser facilement vos produits avec vos propres designs, textes et images.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-morocco-terracotta/20 p-2 rounded-full mr-4">
                  <Layers className="h-6 w-6 text-morocco-terracotta" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Interface intuitive</h4>
                  <p className="text-gray-600 text-sm">
                    Facile à utiliser, même pour les débutants
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-morocco-blue/20 p-2 rounded-full mr-4">
                  <Text className="h-6 w-6 text-morocco-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Multiples polices</h4>
                  <p className="text-gray-600 text-sm">
                    Une large sélection de styles typographiques
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-morocco-ocre/20 p-2 rounded-full mr-4">
                  <Image className="h-6 w-6 text-morocco-ocre" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Importation d'images</h4>
                  <p className="text-gray-600 text-sm">
                    Ajoutez vos propres photos et illustrations
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-morocco-mint/20 p-2 rounded-full mr-4">
                  <PaintBucket className="h-6 w-6 text-morocco-mint" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Palette de couleurs</h4>
                  <p className="text-gray-600 text-sm">
                    Personnalisez chaque élément avec précision
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button className="bg-morocco-blue hover:bg-morocco-majorelle text-white font-medium">
                Essayer l'éditeur
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3 relative">
            {/* Editor UI Mockup */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
              {/* Editor Header */}
              <div className="bg-gray-50 border-b border-gray-200 p-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Text className="h-4 w-4 mr-2" />
                    Texte
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Image className="h-4 w-4 mr-2" />
                    Image
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center">
                    <PenSquare className="h-4 w-4 mr-2" />
                    Formes
                  </Button>
                </div>
                <Button size="sm" className="bg-morocco-terracotta hover:bg-morocco-clay">
                  <Download className="h-4 w-4 mr-2" />
                  Enregistrer
                </Button>
              </div>

              {/* Editor Content */}
              <div className="h-80 relative">
                {/* Canvas */}
                <div className="absolute inset-0 m-8 bg-gray-100 flex items-center justify-center">
                  {/* T-shirt preview */}
                  <div className="relative w-48">
                    <svg className="w-full h-auto" viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M75 50C75 50 100 10 150 10C200 10 225 50 225 50L275 80L250 150L225 140V340H75V140L50 150L25 80L75 50Z" fill="white" stroke="#CCCCCC" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-morocco-blue/10 w-24 h-24 flex items-center justify-center rounded">
                        <span className="font-bold text-morocco-blue">MadeByMe</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Side panels */}
                <div className="absolute top-0 right-0 bottom-0 w-48 bg-white border-l border-gray-200 p-4">
                  <h4 className="font-medium mb-2 text-sm">Propriétés</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-500">Couleur</label>
                      <div className="flex space-x-2 mt-1">
                        <div className="w-5 h-5 rounded-full bg-morocco-blue cursor-pointer"></div>
                        <div className="w-5 h-5 rounded-full bg-morocco-terracotta cursor-pointer"></div>
                        <div className="w-5 h-5 rounded-full bg-morocco-ocre cursor-pointer"></div>
                        <div className="w-5 h-5 rounded-full bg-morocco-mint cursor-pointer"></div>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">Taille</label>
                      <div className="flex space-x-2 mt-1">
                        <div className="px-2 py-1 border border-gray-300 rounded text-xs">S</div>
                        <div className="px-2 py-1 border border-morocco-blue bg-morocco-blue/10 rounded text-xs">M</div>
                        <div className="px-2 py-1 border border-gray-300 rounded text-xs">L</div>
                        <div className="px-2 py-1 border border-gray-300 rounded text-xs">XL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Editor Footer */}
              <div className="bg-gray-50 border-t border-gray-200 p-4 flex justify-between items-center">
                <div className="text-sm text-gray-500">Prix: 199 MAD</div>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Ajouter au panier
                </Button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-morocco-ocre/10 rounded-full" />
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-morocco-terracotta/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorPreviewSection;
