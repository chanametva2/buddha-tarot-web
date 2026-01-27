import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export const CardDetailsModal = ({ card, onClose }) => {
    const { language } = useLanguage();
    const t = translations[language].gallery; // Re-use gallery translations for consistency

    if (!card) return null;

    // Helper to extract clean content
    const getContent = (c) => {
        const clean = (str) => str ? str.replace('} ', '') : '';
        return {
            name: language === 'th' ? c.name_th : c.name_en,
            subtitle: language === 'th' ? c.name_en : c.name_th,
            keywords: clean(c.keywords),
            essence: clean(c.dharma_essence),
            tagline: c.tagline
        };
    };

    const content = getContent(card);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={onClose}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-indigo-950 border border-gold-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button Mobile */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white/60 hover:bg-black/60"
                >
                    ✕
                </button>

                {/* Left: Image */}
                <div className="md:w-1/2 bg-black/20 p-8 flex items-center justify-center relative">
                    <div className="aspect-[2/3] w-full max-w-sm rounded-lg overflow-hidden border border-white/10 shadow-lg">
                        {card.image_path ? (
                            <img
                                src={card.image_path.startsWith('/assets/')
                                    ? `${import.meta.env.BASE_URL}${card.image_path.slice(1)}`
                                    : `${import.meta.env.BASE_URL}assets/${card.image_path.replace('../', '')}`}
                                className="w-full h-full object-cover"
                                alt={content.name}
                            />
                        ) : <div className="w-full h-full bg-indigo-900" />}
                    </div>
                </div>

                {/* Right: Content */}
                <div className="md:w-1/2 p-8 text-left overflow-y-auto">
                    <h2 className="text-3xl font-serif text-gold-400 mb-2">{content.name}</h2>
                    <h3 className="text-xl font-sans text-white/60 mb-6">{content.subtitle}</h3>

                    <div className="space-y-6 text-base text-white/80 leading-relaxed">
                        {content.keywords && (
                            <div>
                                <span className="text-gold-600 uppercase tracking-widest text-sm block mb-1">{t.keywords}</span>
                                <p>{content.keywords}</p>
                            </div>
                        )}

                        {content.essence && (
                            <div>
                                <span className="text-gold-600 uppercase tracking-widest text-sm block mb-1">{t.dharma_essence}</span>
                                <p>{content.essence}</p>
                            </div>
                        )}

                        {card.prompt && (
                            <div>
                                <span className="text-gold-600 uppercase tracking-widest text-sm block mb-1">Reflection</span>
                                <p className="italic text-white/70">"{card.prompt}"</p>
                            </div>
                        )}

                        {content.tagline && (
                            <div>
                                <span className="text-gold-600 uppercase tracking-widest text-sm block mb-1">{t.tagline}</span>
                                <p className="italic text-gold-100/80 font-serif text-xl">"{content.tagline}"</p>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
