import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ card, onClick }) => {

    // Use passed displayName if available (for i18n), fallback to name_en
    const displayName = card.displayName || card.name_en;
    const displaySubtitle = card.displaySubtitle || card.name_th;

    const getImageUrl = (path) => {
        if (!path) return '';
        // Replace ../ with nothing, we will construct the path manually
        const cleanPath = path.replace('../', '');
        // Construct path using BASE_URL to handle both local (root) and production (subpath)
        return `${import.meta.env.BASE_URL}assets/${cleanPath}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.98 }}
            className="group relative cursor-pointer"
            onClick={onClick}
        >
            <div className="aspect-[2/3] overflow-hidden rounded-xl border border-gold-500/30 shadow-2xl bg-indigo-900/50 backdrop-blur-sm relative transition-all duration-500 group-hover:shadow-gold-500/20">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 to-transparent z-10" />

                {card.image_path ? (
                    <img
                        src={getImageUrl(card.image_path)}
                        alt={displayName}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => { e.target.style.display = 'none' }}
                    />
                ) : (
                    <div className="h-full w-full flex items-center justify-center text-gold-500/20 font-serif text-4xl">?</div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-center">
                    <h3 className="text-gold-200 font-serif text-xl leading-tight mb-1 group-hover:text-gold-400 transition-colors">
                        {displayName}
                    </h3>
                    <p className="text-white/60 text-sm font-sans tracking-wider uppercase">
                        {displaySubtitle}
                    </p>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 rounded-xl border border-gold-400/0 group-hover:border-gold-400/50 transition-all duration-500 pointer-events-none" />
            </div>
        </motion.div>
    );
};
