
import { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-morocco-terracotta to-morocco-blue bg-clip-text text-transparent">
                MadeByMe
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-medium hover:text-morocco-blue transition-colors">
              Accueil
            </Link>
            <Link to="/products" className="font-medium hover:text-morocco-blue transition-colors">
              Produits
            </Link>
            <Link to="/editor" className="font-medium hover:text-morocco-blue transition-colors">
              Créer
            </Link>
            <Link to="/faq" className="font-medium hover:text-morocco-blue transition-colors">
              FAQ
            </Link>
            <Link to="/about" className="font-medium hover:text-morocco-blue transition-colors">
              À propos
            </Link>
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
            <Link to="/" className="font-medium hover:text-morocco-blue transition-colors">
              Accueil
            </Link>
            <Link to="/products" className="font-medium hover:text-morocco-blue transition-colors">
              Produits
            </Link>
            <Link to="/editor" className="font-medium hover:text-morocco-blue transition-colors">
              Créer
            </Link>
            <Link to="/faq" className="font-medium hover:text-morocco-blue transition-colors">
              FAQ
            </Link>
            <Link to="/about" className="font-medium hover:text-morocco-blue transition-colors">
              À propos
            </Link>
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
