import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({ children, className, variant = 'primary', ...props }) => {
    const baseStyles = "px-6 py-2 rounded-full font-serif font-semibold transition-all duration-300 transform active:scale-95";

    const variants = {
        primary: "bg-gradient-to-r from-gold-400 to-gold-600 text-indigo-950 shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 hover:brightness-110",
        outline: "border border-gold-400 text-gold-400 hover:bg-gold-400/10",
        ghost: "text-gold-400 hover:text-gold-300 hover:bg-white/5"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
};
