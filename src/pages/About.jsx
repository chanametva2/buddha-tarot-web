import React from 'react';
import { Layout } from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ArrowRight, BookOpen, Heart, Eye, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    const { language } = useLanguage();
    const t = translations[language].about;
    const btnText = translations[language].home.daily_reading; // Reuse or find 'Start Reading'

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <Layout>
            <div className="min-h-screen py-20 px-4">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl mx-auto space-y-16"
                >
                    {/* Header */}
                    <motion.div variants={item} className="text-center space-y-6">
                        <h1 className="text-5xl md:text-6xl font-serif text-gold-100">{t.title}</h1>
                        <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full" />
                    </motion.div>

                    {/* Vision Section */}
                    <motion.div variants={item} className="grid md:grid-cols-2 gap-12 items-center bg-white/5 p-8 rounded-2xl border border-white/10">
                        <div>
                            <h2 className="text-3xl font-serif text-gold-300 mb-4 flex items-center gap-3">
                                <Eye className="w-6 h-6 text-gold-500" />
                                {t.vision_title}
                            </h2>
                            <p className="text-lg text-white/80 leading-relaxed">
                                {t.vision_desc}
                            </p>
                        </div>
                        <div className="bg-black/20 p-6 rounded-xl border border-gold-500/20 text-center italic text-gold-200/80 font-serif text-xl">
                            "{t.philosophy_desc}"
                        </div>
                    </motion.div>

                    {/* Structure Section */}
                    <motion.div variants={item} className="space-y-8">
                        <h2 className="text-3xl font-serif text-white/90 text-center mb-12">{t.structure_title}</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Major Arcana */}
                            <div className="bg-indigo-900/40 p-6 rounded-xl border border-gold-500/10 hover:border-gold-500/30 transition-colors">
                                <BookOpen className="w-8 h-8 text-gold-400 mb-4" />
                                <h3 className="text-xl font-bold text-gold-100 mb-2">Major Arcana</h3>
                                <p className="text-white/60">{t.major_arcana}</p>
                            </div>

                            {/* Minor Arcana Group */}
                            <div className="bg-indigo-900/40 p-6 rounded-xl border border-gold-500/10 hover:border-gold-500/30 transition-colors">
                                <Sun className="w-8 h-8 text-gold-400 mb-4" />
                                <h3 className="text-xl font-bold text-gold-100 mb-2">Minor Arcana</h3>
                                <p className="text-white/60 mb-4">{t.minor_arcana}</p>

                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm text-white/70">
                                        <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                                        {t.suit_dukkha}
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-white/70">
                                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                        {t.suit_samudaya}
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-white/70">
                                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                                        {t.suit_nirodha}
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-white/70">
                                        <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                                        {t.suit_magga}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Philosophy / CTA */}
                    <motion.div variants={item} className="text-center pt-12 border-t border-white/10">
                        <Heart className="w-12 h-12 text-gold-500 mx-auto mb-6 animate-pulse" />
                        <h3 className="text-2xl font-serif text-white/90 mb-8 max-w-2xl mx-auto">
                            {t.philosophy_title}
                        </h3>

                        <Link to="/reading">
                            <Button size="lg" className="text-xl px-12 py-4 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 transform hover:-translate-y-1 transition-all">
                                {translations[language].reading.title} <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>

                        <p className="mt-16 text-xs text-white/20 font-mono">
                            {t.credits}
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </Layout>
    );
}
