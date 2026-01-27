import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import cardsData from '../data/cards.json';
import { CardDetailsModal } from '../components/CardDetailsModal';

export default function Home() {
    const { language } = useLanguage();
    const t = translations[language].home;
    const [dailyCard, setDailyCard] = useState(null);

    const handleDailyReading = () => {
        const randomIndex = Math.floor(Math.random() * cardsData.length);
        setDailyCard(cardsData[randomIndex]);
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <div className="relative z-10 text-center max-w-4xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">{t.subtitle}</h2>
                        <h1 className="text-5xl md:text-7xl font-serif text-gold-100 mb-8 leading-tight">
                            {t.title_1} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
                                {t.title_2}
                            </span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
                            {t.desc}
                        </p>

                        <div className="flex gap-4 justify-center">
                            <NavLink to="/gallery">
                                <Button>{t.explore_gallery}</Button>
                            </NavLink>
                            <Button variant="outline" onClick={handleDailyReading}>
                                {t.daily_reading}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature Section Placeholder */}
            <section className="py-20 bg-black/20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h3 className="text-3xl font-serif text-gold-200 mb-8">{t.suits_title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {['Dukkha (Swords)', 'Samudaya (Cups)', 'Nirodha (Pentacles)', 'Magga (Wands)'].map((suit, i) => (
                            <div key={i} className="p-8 border border-white/5 rounded-xl bg-white/5 backdrop-blur-sm hover:border-gold-500/30 transition-all">
                                <h4 className="text-xl font-serif text-gold-300">{suit}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Daily Card Modal */}
            <AnimatePresence>
                {dailyCard && (
                    <CardDetailsModal
                        card={dailyCard}
                        onClose={() => setDailyCard(null)}
                    />
                )}
            </AnimatePresence>
        </Layout>
    );
}
