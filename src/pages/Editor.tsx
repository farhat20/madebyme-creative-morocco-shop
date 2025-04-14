
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Editor = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Éditeur de Design</h1>
          <div className="bg-morocco-sand/30 p-6 rounded-lg text-center">
            <p className="text-lg">Notre éditeur sera bientôt disponible</p>
            <p>Revenez prochainement pour créer vos designs personnalisés</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Editor;
