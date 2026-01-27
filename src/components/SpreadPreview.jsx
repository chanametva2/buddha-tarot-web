import React from 'react';

export const SpreadPreview = ({ layout }) => {
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
                return (
                    // 3 cards in a row
                    <g transform="translate(50, 50)">
                        <rect x="-35" y="-20" width="20" height="30" className={cardClass} />
                        <rect x="-10" y="-20" width="20" height="30" className={cardClass} />
                        <rect x="15" y="-20" width="20" height="30" className={cardClass} />
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
