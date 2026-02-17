import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export default function TourPackages() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const packages = [
    {
      id: 1,
      title: "Volcano Jeep Adventure and Ubud Tour",
      location: "Kintamani, Ubud",
      duration: "10 Hours",
      people: "2-6 People",
      price: 60,
      image: "/images/jip.jpeg",
      description:
        "Experience the black lava jeep adventure at the feet of Batur sacred volcano. This...",
      featured: true,
    },
    {
      id: 2,
      title: "Bali Gate of Heaven Temple Tour",
      location: "Candidasa, Ubud",
      duration: "10 Hours",
      people: "1-4 People",
      price: 65,
      image: "/images/gate.jpeg",
      description:
        "Join this early morning trip to the east side of Bali. Lempuyang Temple is one o...",
      featured: false,
    },
    {
      id: 3,
      title: "Best of Ubud Tour with Jungle Swing",
      location: "Ubud",
      duration: "10 Hours",
      people: "2-6 People",
      price: 50,
      image: "/images/rmswing.webp",
      description:
        "Begin the tour by meeting your driver or tour guide at your hotel lobby with a war...",
      featured: true,
    },
    {
      id: 4,
      title: "West Nusa Penida Day Tour",
      location: "Nusa Penida",
      duration: "10 Hours",
      people: "2-6 People",
      price: 65,
      image: "/images/rmwesnusa.webp",
      description:
        "Experience the most popular day trip to Nusa Penida the sister island of Bali. You will...",
      featured: false,
    },
    {
      id: 5,
      title: "Best of Bali Waterfalls: Tibumana, Tukad Cepung",
      location: "Ubud",
      duration: "8 Hours",
      people: "2-6 People",
      price: 75,
      image: "/images/rmwater.webp",
      description:
        "Visit three most beautiful waterfalls near to Ubud area. You will be taken to the first...",
      featured: false,
    },
  ];

  const itemsPerPage = 4;
  const totalSlides = Math.ceil(packages.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentPackages = packages.slice(
    currentSlide * itemsPerPage,
    (currentSlide + 1) * itemsPerPage
  );

  return (
    <section
      id="tour-packages"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Popular Tour Packages
          </h2>
          <p className="text-lg text-slate-600">
            Discover the best of Bali with our curated tour packages
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons - Only show if there are multiple slides */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-slate-50 transition-colors hidden md:block"
                aria-label="Previous"
              >
                <ChevronLeft size={24} className="text-slate-700" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-slate-50 transition-colors hidden md:block"
                aria-label="Next"
              >
                <ChevronRight size={24} className="text-slate-700" />
              </button>
            </>
          )}

          {/* Package Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {currentPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-lime-200 to-lime-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative"
                >
                  {/* Featured Badge */}
                  {pkg.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-slate-800 px-3 py-1 rounded-full text-sm font-medium z-10">
                      Featured
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden m-3 rounded-lg">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-slate-800 mb-3 min-h-[3.5rem]">
                      {pkg.title}
                    </h3>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-slate-700">
                        <MapPin size={16} className="mr-2 flex-shrink-0" />
                        <span>{pkg.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-700">
                        <Clock size={16} className="mr-2 flex-shrink-0" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-700">
                        <Users size={16} className="mr-2 flex-shrink-0" />
                        <span>{pkg.people}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-red-500">
                        ${pkg.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-700 mb-4 line-clamp-2 min-h-[2.5rem]">
                      {pkg.description}
                    </p>

                    {/* Button */}
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                    >
                      <a
                        href={getWhatsAppUrl(
                          WHATSAPP_MESSAGES.tourPackage(pkg.title)
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        VIEW DETAILS
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator - Only show if there are multiple slides */}
          {totalSlides > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${currentSlide === index
                    ? "w-8 bg-slate-800"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
