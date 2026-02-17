import { motion } from "motion/react";
import { DollarSign, Truck, UserCheck, Palmtree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

import { useLanguage } from '@/context/LanguageContext';
export default function AboutUs() {
  const { t } = useLanguage();
  const services = [
    {
      icon: DollarSign,
      title: t('about.affordableCar'),
      description:
        t('about.affordableCarDesc'),
    },
    {
      icon: Truck,
      title: t('about.customTours'),
      description:
        t('about.customToursDesc'),
    },
    {
      icon: UserCheck,
      title: t('about.experiencedGuides'),
      description:
        t('about.experiencedGuidesDesc'),
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-6">
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-slate-700 leading-relaxed">
            {t('about.intro')}
          </p>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-16"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-600 to-transparent w-64" />
          <Palmtree className="mx-4 text-emerald-600" size={24} />
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-600 to-transparent w-64" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-4">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-16"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-600 to-transparent w-64" />
          <Palmtree className="mx-4 text-emerald-600" size={24} />
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-600 to-transparent w-64" />
        </motion.div>

        {/* Private Car Booking Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            {t('about.bookTitle')}
          </h2>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            {t('about.bookDesc')}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >

            <p className="text-xl text-blue-600 font-medium">
              {t('about.coverage')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white text-lg px-12 py-6 h-auto"
            >
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.bookDriver)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Truck className="mr-2" size={20} />
                {t('about.bookButton')}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
