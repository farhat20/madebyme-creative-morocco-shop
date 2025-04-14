
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contactez-nous</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <MapPin className="w-8 h-8 text-morocco-terracotta mb-4" />
                  <h3 className="font-bold mb-2">Adresse</h3>
                  <p className="text-gray-600">123 Rue Mohammed V, Casablanca, Maroc</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Phone className="w-8 h-8 text-morocco-blue mb-4" />
                  <h3 className="font-bold mb-2">Téléphone</h3>
                  <p className="text-gray-600">+212 522 123 456</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Mail className="w-8 h-8 text-morocco-ocre mb-4" />
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-gray-600">contact@madebyme.ma</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Clock className="w-8 h-8 text-morocco-mint mb-4" />
                  <h3 className="font-bold mb-2">Horaires</h3>
                  <p className="text-gray-600">Lun-Ven: 9h-18h</p>
                </div>
              </div>

              <div className="bg-morocco-sand/30 p-6 rounded-lg">
                <h3 className="font-bold mb-4">Service Client</h3>
                <p className="text-gray-700 mb-4">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions
                  concernant nos produits et services.
                </p>
                <p className="text-gray-700">
                  Temps de réponse moyen: 24 heures ouvrées
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Sujet"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-morocco-terracotta hover:bg-morocco-clay">
                  Envoyer
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
