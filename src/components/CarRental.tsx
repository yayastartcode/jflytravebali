import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

import { useLanguage } from '@/context/LanguageContext';
export default function CarRental() {
  const { t } = useLanguage();
  const vehicles = [
    {
      title: t('carRental.standardMinivan'),
      model: "TOYOTA AVANZA",
      price: 38,
      duration: "10",
      image: "/images/avanzarm.webp",
      capacityAirport: "Max 4",
      capacityTour: "Max 5",
    },
    {
      title: t('carRental.bigVan'),
      model: "TOYOTA HI-ACE",
      price: 80,
      duration: "10",
      image: "/images/hiacerm.webp",
      capacityAirport: "Max 11",
      capacityTour: "Max 15",
    },
    {
      title: t('carRental.innovaCar'),
      model: "TOYOTA INNOVA REBORN",
      price: 65,
      duration: "10",
      image: "/images/ino.jpeg",
      capacityAirport: "Max 5",
      capacityTour: "Max 5",
    },
  ];

  return (
    <section id="car-rental" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.model}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white border border-slate-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Title */}
              <h3 className="text-center text-lg font-medium text-slate-800 mb-4 min-h-[3rem]">
                {vehicle.title}
              </h3>

              {/* Vehicle Image */}
              <div className="mb-6 bg-slate-50 rounded-lg overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.model}
                  className="w-full h-48 object-contain"
                />
              </div>

              {/* Model Name */}
              <p className="text-center text-slate-800 font-medium mb-4">
                {vehicle.model}
              </p>

              {/* Price */}
              <div className="text-center mb-2">
                <span className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                  USD {vehicle.price}
                </span>
              </div>

              {/* Duration */}
              <p className="text-center text-blue-600 font-medium mb-6">
                {vehicle.duration} {t('carRental.duration')}
              </p>

              {/* Capacity Details */}
              <div className="text-center text-sm text-slate-600 space-y-2 mb-6 min-h-[3rem]">
                <p>{vehicle.capacityAirport} {t('carRental.capacityAirport')}</p>
                <p>{vehicle.capacityTour} {t('carRental.capacityTour')}</p>
              </div>

              {/* Read More Button */}
              <Button
                asChild
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
              >
                <a
                  href={getWhatsAppUrl(
                    WHATSAPP_MESSAGES.carRental(vehicle.model)
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  {t('carRental.readMore')}
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            {t('carRental.title')}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            {t('carRental.welcomeDesc')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
