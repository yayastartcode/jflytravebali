import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { Check, Globe } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: "en", label: "English", flag: "🇺🇸" },
        { code: "zh", label: "中文", flag: "🇨🇳" },
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
            >
                <Globe size={18} className="text-white" />
                <span className="text-white font-medium uppercase">{language}</span>
            </button>

            {/* Backdrop to close on click outside */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[60]"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl overflow-hidden py-1 border border-slate-100 z-[70]"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code as "en" | "zh");
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-slate-50 transition-colors ${language === lang.code ? "text-[#015af7] font-medium" : "text-slate-700"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">{lang.flag}</span>
                                    <span>{lang.label}</span>
                                </div>
                                {language === lang.code && <Check size={16} />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
