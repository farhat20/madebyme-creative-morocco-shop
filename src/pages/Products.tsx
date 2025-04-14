
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Nos Produits</h1>
          <div className="bg-morocco-sand/30 p-6 rounded-lg text-center">
            <p className="text-lg">Page en cours de construction</p>
            <p>Notre catalogue de produits sera bientôt disponible</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
