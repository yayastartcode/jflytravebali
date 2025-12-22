import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-0 bg-white">
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-sky-400 to-sky-500 p-12 lg:p-16 flex items-center"
          >
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Need more customized tour?
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Let's build together your tour based on your preferences
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white uppercase tracking-wide px-8"
              >
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.customTour)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CONTACT US
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-auto overflow-hidden"
          >
            <img
              src="https://international.unud.ac.id/protected/storage/file_summernote/4a0885ebc3c02b217cbf6c079eca6b37.jpg"
              alt="Bali Temple and Luxury Car"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
