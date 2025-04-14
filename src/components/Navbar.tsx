
import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-morocco-terracotta to-morocco-blue bg-clip-text text-transparent">
                MadeByMe
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="font-medium hover:text-morocco-blue transition-colors">
              Accueil
            </a>
            <a href="/products" className="font-medium hover:text-morocco-blue transition-colors">
              Produits
            </a>
            <a href="/editor" className="font-medium hover:text-morocco-blue transition-colors">
              Créer
            </a>
            <a href="/how-it-works" className="font-medium hover:text-morocco-blue transition-colors">
              Comment ça marche
            </a>
            <a href="/about" className="font-medium hover:text-morocco-blue transition-colors">
              À propos
            </a>
          </nav>

          {/* Desktop Right Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="font-medium">
              Se connecter
            </Button>
            <Button className="bg-morocco-blue hover:bg-morocco-majorelle text-white font-medium">
              S&apos;inscrire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden p-4 bg-white border-t">
          <nav className="flex flex-col gap-4">
            <a href="/" className="font-medium hover:text-morocco-blue transition-colors">
              Accueil
            </a>
            <a href="/products" className="font-medium hover:text-morocco-blue transition-colors">
              Produits
            </a>
            <a href="/editor" className="font-medium hover:text-morocco-blue transition-colors">
              Créer
            </a>
            <a href="/how-it-works" className="font-medium hover:text-morocco-blue transition-colors">
              Comment ça marche
            </a>
            <a href="/about" className="font-medium hover:text-morocco-blue transition-colors">
              À propos
            </a>
            <div className="flex items-center gap-4 mt-4">
              <Button variant="outline" className="font-medium flex-1">
                Se connecter
              </Button>
              <Button className="bg-morocco-blue hover:bg-morocco-majorelle text-white font-medium flex-1">
                S&apos;inscrire
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-2 justify-center">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
