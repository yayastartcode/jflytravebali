import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

import { useLanguage } from '@/context/LanguageContext';
export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <img
                src="/images/jlg.jpg"
                alt="JFLY Travel Logo"
                className="h-16 w-auto object-contain mb-2"
              />
              <p className="text-sm text-slate-300 italic">
                {t('header.slogan')}
              </p>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t('footer.companyDesc')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  {t('header.home')}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  {t('header.about')}
                </a>
              </li>
              <li>
                <a
                  href="#car-rental"
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  {t('carRental.title')}
                </a>
              </li>
              <li>
                <a
                  href="#tour-packages"
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  {t('tourPackages.title')}
                </a>
              </li>
              <li>
                <a
                  href="#top-destinations"
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  {t('header.destinations')}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactUs')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-2 mt-1 flex-shrink-0 text-emerald-400"
                />
                <span className="text-slate-300 text-sm">
                  JL.TUNJUNG SARI GG MENURI 1A, Bali, Indonesia
                </span>
              </li>
              <li className="flex items-start">
                <Phone
                  size={18}
                  className="mr-2 mt-1 flex-shrink-0 text-emerald-400"
                />
                <span className="text-slate-300 text-sm">
                  +62 85119333995
                </span>
              </li>
              <li className="flex items-start">
                <Mail
                  size={18}
                  className="mr-2 mt-1 flex-shrink-0 text-emerald-400"
                />
                <span className="text-slate-300 text-sm">
                  jflytravel@gmail.com
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-slate-700 hover:bg-emerald-600 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-700 hover:bg-emerald-600 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.instagram.com/jflytravel/"
                className="bg-slate-700 hover:bg-emerald-600 p-3 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-700 pt-8 text-center"
        >
          <p className="text-slate-400 text-sm">
            © {currentYear} JFLY Travel. {t('footer.rightsReserved')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
