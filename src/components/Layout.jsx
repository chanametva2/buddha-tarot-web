import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sparkles, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];

    const navItems = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.gallery, path: '/gallery' },
        { name: t.nav.reading, path: '/reading' },
        { name: t.nav.about, path: '/about' },
    ];

    return (
        <div className="min-h-screen bg-mystic-gradient text-cream font-sans selection:bg-gold-500/30">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-indigo-950/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <NavLink to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-400 to-gold-600 flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-700">
                                <Sparkles className="text-indigo-950 w-6 h-6" />
                            </div>
                            <div>
                                <span className="block font-serif text-xl text-gold-100 tracking-wide">BUDDHA</span>
                                <span className="block text-[0.65rem] text-gold-400 uppercase tracking-[0.2em] -mt-1">Tarot</span>
                            </div>
                        </NavLink>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `text-sm tracking-widest font-medium uppercase transition-colors hover:text-gold-300 ${isActive ? 'text-gold-400' : 'text-white/60'}`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}

                            {/* Language Switcher */}
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-1 text-gold-400 hover:text-gold-200 transition-colors border border-gold-500/30 px-3 py-1 rounded-full text-xs font-semibold"
                            >
                                <Languages className="w-3 h-3" />
                                {language === 'en' ? 'TH' : 'EN'}
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-4">
                            <button
                                onClick={toggleLanguage}
                                className="text-gold-400 text-xs font-bold border border-gold-500/30 px-2 py-1 rounded"
                            >
                                {language === 'en' ? 'TH' : 'EN'}
                            </button>
                            <button
                                className="text-gold-100 p-2"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed top-20 left-0 right-0 bg-indigo-950 border-b border-white/10 z-40 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `text-lg font-serif ${isActive ? 'text-gold-400' : 'text-white/70'}`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="pt-20 min-h-screen">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-black/30 py-12 border-t border-white/5 mt-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-white/40 text-sm font-light">
                        {t.footer.text}
                    </p>
                </div>
            </footer>
        </div>
    );
};
