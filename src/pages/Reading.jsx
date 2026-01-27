import React, { useState, useRef, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { CardDetailsModal } from '../components/CardDetailsModal';
import { spreads } from '../data/spreads';
import cardsData from '../data/cards.json';
import { motion, AnimatePresence } from 'framer-motion';
import { Shuffle, RotateCw, Play, ArrowRight, Sparkles, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import backImage from '../assets/back.jpg';
import { SpreadPreview } from '../components/SpreadPreview';

export default function Reading() {
    const [step, setStep] = useState('select');
    const [selectedSpread, setSelectedSpread] = useState(null);
    const [drawnCards, setDrawnCards] = useState([]);
    const [remainingDeck, setRemainingDeck] = useState([]);
    const [isShuffling, setIsShuffling] = useState(false);
    const [selectedCardForModal, setSelectedCardForModal] = useState(null);
    const [isCopied, setIsCopied] = useState(false);

    // Reference for scrollable fan
    const fanRef = useRef(null);

    const { language } = useLanguage();
    const t = translations[language].reading;

    const copyToClipboard = () => {
        const spreadTitle = selectedSpread.title[language] || selectedSpread.title;
        const spreadDesc = selectedSpread.description[language] || selectedSpread.description;

        // Build the prompt
        let prompt = `Act as an expert Buddhist Tarot Reader using the 'Bodhi Nyana Pathika' deck.\n\n`;
        prompt += `CONTEXT:\n- Spread: ${spreadTitle}\n- Intent: ${spreadDesc}\n\n`;
        prompt += `CARDS DRAWN:\n`;

        drawnCards.forEach((card, index) => {
            const content = getCardContent(card);
            const pos = selectedSpread.positions[index];
            const posName = pos?.name?.[language] || pos?.name || `Position ${index + 1}`;
            const posDesc = pos?.description?.[language] || pos?.description || "";

            prompt += `${index + 1}. [${posName}]: ${content.name} (${content.tagline})\n`;
            if (posDesc) prompt += `   - Position Meaning: ${posDesc}\n`;
        });

        prompt += `\nINSTRUCTION:\nInterpret this reading using Theravada Buddhist philosophy (Four Noble Truths, Three Marks of Existence). Focus on insight, mindfulness, and practical advice for the querent. Avoid fortune-telling; instead, offer 'Dharma Guide' reflection.`;

        navigator.clipboard.writeText(prompt).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    const getCardContent = (card) => {
        const isEn = language === 'en';
        return {
            name: isEn ? card.name_en : card.name_th,
            tagline: isEn ? (card.tagline_en || card.tagline) : card.tagline,
            prompt: isEn ? (card.prompt_en || card.prompt) : card.prompt,
            keywords: isEn ? (card.keywords_en || card.keywords) : card.keywords
        };
    };

    const drawCards = () => {
        const deck = [...cardsData];
        // Fisher-Yates
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    };

    const handleStartReading = (spread) => {
        setSelectedSpread(spread);
        setStep('shuffle');
    };

    const handleShuffle = () => {
        setIsShuffling(true);
        setTimeout(() => {
            setIsShuffling(false);
            const shuffled = drawCards();
            setRemainingDeck(shuffled);
            setDrawnCards([]);
            // Everyone goes to 'pick' phase now
            setStep('pick');
        }, 2000);
    };

    const handleCardPick = (cardIndex) => {
        // Prevent picking if we already have enough for fixed spread
        if (selectedSpread.id !== 'free-form' && drawnCards.length >= selectedSpread.cardCount) {
            return;
        }

        const pickedCard = remainingDeck[cardIndex];
        const newRemaining = remainingDeck.filter((_, i) => i !== cardIndex);

        setRemainingDeck(newRemaining);
        const newDrawn = [...drawnCards, pickedCard];
        setDrawnCards(newDrawn);

        // Auto-advance for fixed spreads if count reached
        if (selectedSpread.id !== 'free-form' && newDrawn.length === selectedSpread.cardCount) {
            setTimeout(() => setStep('result'), 500);
        }
    };

    const handleReset = () => {
        setStep('select');
        setSelectedSpread(null);
        setDrawnCards([]);
        setRemainingDeck([]);
        setSelectedCardForModal(null);
    };

    return (
        <Layout>
            <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto flex flex-col">
                {step !== 'result' && (
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-serif text-gold-100 mb-2">{t.title}</h1>
                        <p className="text-white/50 max-w-xl mx-auto">{t.subtitle}</p>
                    </div>
                )}

                <AnimatePresence mode="wait">

                    {/* STEP 1: SELECT */}
                    {step === 'select' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {spreads.map(spread => (
                                <div
                                    key={spread.id}
                                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold-500/50 hover:bg-white/10 transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden"
                                    onClick={() => handleStartReading(spread)}
                                >
                                    {/* SVG Preview Background */}
                                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none -mr-8 -mt-8">
                                        <SpreadPreview layout={spread.layout} count={spread.cardCount} />
                                    </div>

                                    <div className="flex justify-between items-start mb-4 z-10">
                                        <h3 className="text-xl font-serif text-gold-200 group-hover:text-gold-400">
                                            {spread.title[language] || spread.title}
                                        </h3>
                                        <span className="bg-black/30 text-xs px-2 py-1 rounded text-white/40">
                                            {spread.id === 'free-form' ? (language === 'th' ? 'อิสระ' : '∞') : spread.cardCount} {t.cards_count}
                                        </span>
                                    </div>

                                    {/* Main Preview Container */}
                                    <div className="w-full h-24 mb-6 bg-black/20 rounded-lg p-2 border border-white/5 group-hover:border-gold-500/20 transition-colors">
                                        <SpreadPreview layout={spread.layout} count={spread.cardCount} />
                                    </div>

                                    <p className="text-white/60 text-sm mb-6 min-h-[3rem] z-10">
                                        {spread.description[language] || spread.description}
                                    </p>
                                    <div className="flex justify-end mt-auto z-10">
                                        <span className="text-gold-500 text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            {t.select_btn} <Play className="w-3 h-3" />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* STEP 2: SHUFFLE */}
                    {step === 'shuffle' && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            className="flex flex-col items-center justify-center min-h-[50vh]"
                        >
                            <div className="relative w-48 h-72 mb-8">
                                {/* Top Card */}
                                <motion.div
                                    variants={{
                                        idle: { x: 0, y: 0, rotate: 0 },
                                        shuffling: {
                                            x: [-1, 1, -1, 0],
                                            y: [0, -1, 0],
                                            rotate: [0, 1, -1, 0],
                                            transition: { repeat: Infinity, duration: 0.2 }
                                        }
                                    }}
                                    initial="idle"
                                    animate={isShuffling ? "shuffling" : "idle"}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 rounded-xl border border-gold-500/30 flex items-center justify-center shadow-2xl overflow-hidden z-20 bg-indigo-900"
                                >
                                    <img src={backImage} alt="Deck Back" className="w-full h-full object-cover" />
                                </motion.div>

                                {/* Middle Card */}
                                <motion.div
                                    variants={{
                                        idle: { x: 8, y: 8, rotate: 3 },
                                        shuffling: {
                                            x: [2, 0, 2],
                                            rotate: [3, 5, 3],
                                            transition: { repeat: Infinity, duration: 0.3 }
                                        }
                                    }}
                                    initial="idle"
                                    animate={isShuffling ? "shuffling" : "idle"}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 rounded-xl border border-gold-500/20 overflow-hidden shadow-lg bg-indigo-900"
                                >
                                    <img src={backImage} alt="" className="w-full h-full object-cover opacity-80" />
                                </motion.div>

                                {/* Bottom Card */}
                                <motion.div
                                    variants={{
                                        idle: { x: -4, y: 12, rotate: -2 },
                                        shuffling: {
                                            x: [-2, -4, -2],
                                            rotate: [-2, -4, -2],
                                            transition: { repeat: Infinity, duration: 0.25 }
                                        }
                                    }}
                                    initial="idle"
                                    animate={isShuffling ? "shuffling" : "idle"}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 rounded-xl border border-gold-500/10 overflow-hidden shadow-lg bg-indigo-900"
                                >
                                    <img src={backImage} alt="" className="w-full h-full object-cover opacity-60" />
                                </motion.div>
                            </div>

                            <h3 className="text-2xl font-serif text-gold-100 mb-6">
                                {isShuffling ? t.shuffling : t.focus}
                            </h3>

                            {!isShuffling ? (
                                <Button onClick={handleShuffle} className="flex items-center gap-2 text-lg px-8 py-3 relative z-30">
                                    <Shuffle className="w-5 h-5" /> {t.shuffle_btn}
                                </Button>
                            ) : (
                                <div className="flex gap-2 relative z-30">
                                    <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-gold-500 rounded-full" />
                                    <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-gold-500 rounded-full" />
                                    <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-gold-500 rounded-full" />
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* STEP 3: PICK (FAN) */}
                    {step === 'pick' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full flex-1 flex flex-col"
                        >
                            {/* Header for Pick Phase */}
                            <div className="sticky top-20 z-40 bg-indigo-950/90 backdrop-blur-md border-b border-white/10 py-4 mb-4 flex justify-between items-center px-4 rounded-b-xl">
                                <div>
                                    <h2 className="text-xl font-serif text-gold-200">
                                        {selectedSpread.title[language] || selectedSpread.title}
                                    </h2>
                                    <p className="text-white/50 text-xs">
                                        {selectedSpread.id === 'free-form'
                                            ? (language === 'th' ? 'หยิบไพ่ตามใจ' : 'Intuitive Draw')
                                            : (language === 'th'
                                                ? `กรุณาหยิบไพ่ ${selectedSpread.cardCount} ใบ`
                                                : `Please pick ${selectedSpread.cardCount} cards`)
                                        }
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <span className="text-2xl font-bold text-gold-400">{drawnCards.length}</span>
                                        <span className="text-white/30 text-xs uppercase tracking-wider ml-2">
                                            / {selectedSpread.id === 'free-form' ? '∞' : selectedSpread.cardCount}
                                        </span>
                                    </div>
                                    {selectedSpread.id === 'free-form' && drawnCards.length > 0 && (
                                        <Button onClick={() => setStep('result')} className="text-xs px-3 py-1 h-8">
                                            {language === 'th' ? 'จบการหยิบ' : 'Finish'}
                                        </Button>
                                    )}
                                    <Button variant="outline" onClick={handleReset} className="h-8 w-8 p-0 flex items-center justify-center">
                                        <RotateCw className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* THE STACKED WRAP LAYOUT */}
                            <div className="w-full px-4 pb-12 pt-4">
                                <motion.div
                                    className="flex flex-wrap justify-center max-w-5xl mx-auto pl-12" // pl-12 to balance the negative margin of the first items/rows
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.01
                                            }
                                        }
                                    }}
                                >
                                    {remainingDeck.map((card, index) => (
                                        <motion.div
                                            key={card.id}
                                            layoutId={`card-${card.id}`}
                                            onClick={() => handleCardPick(index)}
                                            variants={{
                                                hidden: { opacity: 0, y: 50, scale: 0.8 },
                                                visible: { opacity: 1, y: 0, scale: 1 }
                                            }}
                                            whileHover={{
                                                y: -30,
                                                scale: 1.1,
                                                zIndex: 100,
                                                transition: { duration: 0.2 }
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            className="cursor-pointer relative w-24 h-36 -ml-12 mb-8" // Negative margin for overlap
                                        >
                                            <div className="w-full h-full rounded-lg border border-gold-500/30 overflow-hidden shadow-2xl bg-indigo-900 group hover:border-gold-500 transition-colors">
                                                <img src={backImage} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Hint */}
                            <p className="text-center text-white/30 text-xs animate-pulse">
                                {language === 'th' ? 'เลือกไพ่ของคุณ' : 'Pick your cards'}
                            </p>

                            {/* Preview of Drawn Cards (Mini) */}
                            {drawnCards.length > 0 && (
                                <div className="mt-auto pt-8 border-t border-white/5 sticky bottom-0 bg-indigo-950/80 backdrop-blur-md pb-4 z-40">
                                    <div className="flex justify-center gap-4 flex-wrap">
                                        {drawnCards.map((card, i) => (
                                            <motion.div key={card.id} layoutId={`card-${card.id}`} className="w-20 h-32 rounded-lg border border-gold-500/50 overflow-hidden shadow-lg">
                                                <img src={backImage} className="w-full h-full object-cover" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* STEP 4: RESULTS */}
                    {step === 'result' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full"
                        >
                            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4 sticky top-20 bg-indigo-950/80 backdrop-blur-md z-40 py-4">
                                <div>
                                    <h2 className="text-2xl font-serif text-gold-200">
                                        {selectedSpread.title[language] || selectedSpread.title}
                                    </h2>
                                    <p className="text-white/40 text-sm">
                                        {selectedSpread.description[language] || selectedSpread.description}
                                    </p>
                                </div>
                                <Button variant="outline" onClick={handleReset} className="flex items-center gap-2">
                                    <RotateCw className="w-4 h-4" /> {t.new_reading}
                                </Button>
                                <Button
                                    onClick={copyToClipboard}
                                    className={`flex items-center gap-2 transition-all ${isCopied ? 'bg-green-600 border-green-500 text-white' : 'bg-gold-600/20 border-gold-500/50 text-gold-200 hover:bg-gold-600/40'}`}
                                >
                                    {isCopied ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                                    {isCopied ? t.copied : t.ai_prompt}
                                </Button>
                            </div>

                            <div className={`grid gap-8 ${selectedSpread.id === 'free-form'
                                ? 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5'
                                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
                                }`}>
                                {drawnCards.map((card, index) => {
                                    const content = getCardContent(card);
                                    const pos = selectedSpread.positions[index];
                                    return (
                                        <motion.div
                                            key={card.id + index}
                                            initial={{ opacity: 0, y: 50, rotateY: 90 }}
                                            animate={{ opacity: 1, y: 0, rotateY: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.6 }}
                                            className="bg-black/20 p-4 rounded-xl border border-white/5"
                                        >
                                            <div className="mb-4 text-center">
                                                <span className="text-gold-500 text-sm tracking-widest uppercase font-semibold">
                                                    {pos?.name?.[language] || pos?.name || (language === 'th' ? `ใบที่ ${index + 1}` : `${t.position} ${index + 1}`)}
                                                </span>
                                                <p className="text-white/40 text-xs mt-1 line-clamp-2">
                                                    {pos?.description?.[language] || pos?.description}
                                                </p>
                                            </div>

                                            <Card
                                                card={{ ...card, displayName: content.name }}
                                                onClick={() => setSelectedCardForModal(card)}
                                            />

                                            <div className="mt-4 space-y-2">
                                                <p className="text-gold-100 font-serif text-center text-lg">{content.name}</p>
                                                <p className="text-white/60 text-sm leading-relaxed border-t border-white/5 pt-2 mt-2 italic">
                                                    "{content.prompt}"
                                                </p>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>

                {/* MODAL */}
                <AnimatePresence>
                    {selectedCardForModal && (
                        <CardDetailsModal
                            card={selectedCardForModal}
                            onClose={() => setSelectedCardForModal(null)}
                        />
                    )}
                </AnimatePresence>

                {/* COPY TOAST NOTIFICATION */}
                <AnimatePresence>
                    {isCopied && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[150] bg-gold-500 text-indigo-950 px-8 py-4 rounded-xl shadow-2xl flex items-center gap-3 font-medium border border-white/20 text-lg"
                        >
                            <Check className="w-5 h-5" />
                            <span>
                                {language === 'th'
                                    ? 'คัดลอกเสร็จแล้ว กรุณานำไปวางเพื่อถาม AI ที่ท่านต้องการ'
                                    : 'Copied! Please paste to ask your AI.'}
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </Layout>
    );
}
