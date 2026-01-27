import React from 'react';

export const SpreadPreview = ({ layout, count }) => {
    // Common styles
    const cardClass = "fill-white/20 stroke-gold-400 stroke-2";

    const renderLayout = () => {
        switch (layout) {
            case 'cross':
                return (
                    // 4 cards: Center, Left, Top, Bottom (Cross/Diamond)
                    <g transform="translate(50, 50)">
                        <rect x="-10" y="-15" width="20" height="30" className={cardClass} /> {/* Center */}
                        <rect x="-10" y="20" width="20" height="30" className={cardClass} />  {/* Bottom */}
                        <rect x="-10" y="-50" width="20" height="30" className={cardClass} /> {/* Top */}
                        <rect x="-45" y="-15" width="20" height="30" className={cardClass} /> {/* Left */}
                        <rect x="25" y="-15" width="20" height="30" className={cardClass} />  {/* Right */}
                    </g>
                );

            case 'linear':
                // Dynamic linear layout based on count
                const numCards = count || 3;
                const width = 20; // Card width
                const gap = 5;    // Gap between cards
                const totalWidth = (numCards * width) + ((numCards - 1) * gap);
                const startX = -(totalWidth / 2) + (width / 2); // Center items

                return (
                    <g transform="translate(50, 50)">
                        {Array.from({ length: numCards }).map((_, i) => (
                            <rect
                                key={i}
                                x={startX + (i * (width + gap)) - (width / 2)}
                                y="-15"
                                width={width}
                                height="30"
                                className={cardClass}
                            />
                        ))}
                    </g>
                );

            case 'circle':
                return (
                    // 4 cards in a ring
                    <g transform="translate(50, 50)">
                        <rect x="-10" y="-40" width="20" height="30" className={cardClass} /> {/* Top */}
                        <rect x="20" y="-15" width="20" height="30" className={cardClass} />  {/* Right */}
                        <rect x="-10" y="10" width="20" height="30" className={cardClass} />  {/* Bottom */}
                        <rect x="-40" y="-15" width="20" height="30" className={cardClass} /> {/* Left */}
                    </g>
                );

            case 'complex':
                return (
                    // Celtic Cross approximations
                    <g transform="translate(50, 50) scale(0.8)">
                        {/* Cross */}
                        <rect x="-20" y="-15" width="20" height="30" className={cardClass} transform="rotate(90)" />
                        <rect x="-10" y="-15" width="20" height="30" className={cardClass} />
                        {/* Staff */}
                        <rect x="30" y="-40" width="15" height="22" className={cardClass} />
                        <rect x="30" y="-15" width="15" height="22" className={cardClass} />
                        <rect x="30" y="10" width="15" height="22" className={cardClass} />
                        <rect x="30" y="35" width="15" height="22" className={cardClass} />
                    </g>
                );

            case 'flow':
                return (
                    // Random scatter
                    <g transform="translate(50, 50)">
                        <rect x="-20" y="-20" width="20" height="30" className={cardClass} transform="rotate(-15)" />
                        <rect x="0" y="-10" width="20" height="30" className={cardClass} transform="rotate(10)" />
                        <rect x="-10" y="10" width="20" height="30" className={cardClass} transform="rotate(-5)" />
                    </g>
                );

            default:
                return (
                    <g transform="translate(50, 50)">
                        <rect x="-10" y="-15" width="20" height="30" className={cardClass} />
                    </g>
                );
        }
    };

    return (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity">
            {renderLayout()}
        </svg>
    );
};
