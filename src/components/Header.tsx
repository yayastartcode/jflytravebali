import { useState } from 'react'
import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/constants'
import { useLanguage } from '@/context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { name: t('header.home'), href: '#' },
    { name: t('header.destinations'), href: '#destinations' },
    { name: t('header.about'), href: '#about' },
    { name: t('header.contact'), href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#015af7] shadow-sm">
      <nav className="container mx-auto px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="/" className="flex flex-col items-start">
              <img
                src="/images/jlg.jpg"
                alt="JFLY Travel Logo"
                className="h-16 md:h-20 w-auto object-contain rounded-lg shadow-sm"
              />
              <span className="text-xs md:text-sm text-sky-100 mt-1 italic font-medium">
                {t('header.slogan')}
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="text-white hover:text-sky-200 transition-colors font-medium text-lg"
              >
                {item.name}
              </motion.a>
            ))}
            <LanguageSwitcher />
            <Button
              asChild
              className="bg-white text-[#015af7] hover:bg-sky-50 transition-colors font-semibold"
            >
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer">
                {t('header.bookNow')}
              </a>
            </Button>
          </motion.div>

          {/* Mobile Menu Button - Includes Lang Switcher next to hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4 border-t border-white/20 pt-4"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-white hover:text-sky-200 transition-colors font-medium text-lg text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              asChild
              className="w-full bg-white text-[#015af7] hover:bg-sky-50 transition-colors font-semibold"
            >
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer">
                {t('header.bookNow')}
              </a>
            </Button>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
