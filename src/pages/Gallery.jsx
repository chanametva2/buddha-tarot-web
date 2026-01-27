import React, { useState, useMemo } from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/Card';
import { CardDetailsModal } from '../components/CardDetailsModal';
import cardsData from '../data/cards.json';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export default function Gallery() {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);

    const { language } = useLanguage();
    const t = translations[language].gallery;

    const filteredCards = useMemo(() => {
        return cardsData.filter(card => {
            // Allow searching by both EN and TH
            const matchesSearch = card.name_en.toLowerCase().includes(search.toLowerCase()) ||
                card.name_th.includes(search);

            if (filter === 'all') return matchesSearch;
            if (filter === 'major') return matchesSearch && card.suit === 'major';
            if (filter === 'minor') return matchesSearch && card.suit === 'minor';
            if (['dukkha', 'samudaya', 'nirodha', 'magga'].includes(filter)) {
                return matchesSearch && card.suit_specific === filter;
            }
            return matchesSearch;
        });
    }, [filter, search]);

    const suits = [
        { id: 'all', label: t.filters.all },
        { id: 'major', label: t.filters.major },
        { id: 'dukkha', label: t.filters.dukkha },
        { id: 'samudaya', label: t.filters.samudaya },
        { id: 'nirodha', label: t.filters.nirodha },
        { id: 'magga', label: t.filters.magga },
    ];

    // Helper to extract clean keywords/essence for display
    const getContent = (card) => {
        const clean = (str) => str ? str.replace('} ', '') : '';
        return {
            name: language === 'th' ? card.name_th : card.name_en,
            subtitle: language === 'th' ? card.name_en : card.name_th,
            tagline: card.tagline
        };
    };

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 py-8">

                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <h1 className="text-4xl font-serif text-gold-100">{t.title}</h1>

                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                            <input
                                type="text"
                                placeholder={t.search_placeholder}
                                className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-gold-100 placeholder:text-white/30 focus:outline-none focus:border-gold-500/50 w-full md:w-64"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            {suits.map(s => (
                                <button
                                    key={s.id}
                                    onClick={() => setFilter(s.id)}
                                    className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${filter === s.id
                                        ? 'bg-gold-500 text-indigo-950 border-gold-500'
                                        : 'bg-transparent text-white/50 border-white/10 hover:border-gold-500/30 hover:text-gold-200'
                                        }`}
                                >
                                    {s.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <AnimatePresence>
                        {filteredCards.map(card => {
                            const content = getContent(card);
                            return (
                                <Card
                                    key={card.id}
                                    card={{ ...card, displayName: content.name, displaySubtitle: content.subtitle }}
                                    onClick={() => setSelectedCard(card)}
                                />
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {filteredCards.length === 0 && (
                    <div className="text-center py-20 text-white/40 font-serif">
                        {t.no_results}
                    </div>
                )}

            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedCard && (
                    <CardDetailsModal
                        card={selectedCard}
                        onClose={() => setSelectedCard(null)}
                    />
                )}
            </AnimatePresence>
        </Layout>
    );
}
