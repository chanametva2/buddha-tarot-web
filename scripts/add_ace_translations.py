import json

# Load the cards
with open('src/data/cards.json', 'r', encoding='utf-8') as f:
    cards = json.load(f)

# Translations for Ace cards
ace_translations = {
    "ace_of_dukkha": {
        "keywords_en": "Birth of Suffering, Beginning of Problems, Harsh Truth",
        "tagline_en": "The first chapter of the cycle... the moment life begins, so does the bond of suffering",
        "main_image_desc_en": "A strong Thai sword stands firmly planted into cracked earth, marking the 'birth' amidst the void.",
        "secondary_image_desc_en": "Thorny vines coil around the sword from base to hilt, symbolizing the bonds of karma and defilements that follow immediately upon birth. The sky above is dark and overcast.",
        "dharma_essence_en": "This card represents the first Noble Truth: 'Dukkha'. It emphasizes 'jāti-pi dukkhā' (birth itself is suffering). The sword planted in the ground is like consciousness descending into existence. Birth brings not just life, but aging, sickness, death, and obstacles.",
        "prompt_en": "What truth are you trying to escape from... but cannot?"
    },
    "ace_of_samudaya": {
        "keywords_en": "Root of Craving, Origin of Desire, Seed of Attachment",
        "tagline_en": "The spark that ignites the cycle... where wanting becomes suffering",
        "main_image_desc_en": "A flame-tipped wand emerges from dark waters, representing the arising of craving from the depths of consciousness.",
        "secondary_image_desc_en": "Smoke rises and takes the shape of various objects of desire, showing how craving multiplies and spreads.",
        "dharma_essence_en": "This represents Samudaya, the Second Noble Truth—the origin of suffering through taṇhā (craving). The Ace shows the very first spark of desire that sets the whole cycle in motion.",
        "prompt_en": "What desire is currently driving your actions?"
    },
    "ace_of_nirodha": {
        "keywords_en": "Possibility of Peace, Glimpse of Liberation, Seed of Cessation",
        "tagline_en": "The first taste of freedom... a glimpse of what lies beyond suffering",
        "main_image_desc_en": "A golden chalice overflows with pure water, representing the possibility of peace and the quenching of craving.",
        "secondary_image_desc_en": "Lotus petals float on the water's surface, symbolizing purity arising from the cessation of mental impurities.",
        "dharma_essence_en": "This represents Nirodha, the Third Noble Truth—the cessation of suffering. The Ace shows the first moment of understanding that liberation is possible.",
        "prompt_en": "Where have you experienced a moment of true peace?"
    },
    "ace_of_magga": {
        "keywords_en": "First Step on the Path, Beginning of Practice, Foundation of Wisdom",
        "tagline_en": "The journey of a thousand miles... begins with a single mindful step",
        "main_image_desc_en": "A golden coin inscribed with the Dharma wheel represents the foundation of practice and the first step on the noble path.",
        "secondary_image_desc_en": "A clear path stretches into the distance, lit by the glow of the coin, showing the way forward.",
        "dharma_essence_en": "This represents Magga, the Fourth Noble Truth—the path leading to the cessation of suffering. The Ace shows the first commitment to walking the Eightfold Path.",
        "prompt_en": "What first step are you ready to take on your path?"
    }
}

# Apply translations to cards
updated = 0
for card in cards:
    card_id = card.get('id', '').lower()
    if card_id in ace_translations:
        for field, value in ace_translations[card_id].items():
            card[field] = value
        updated += 1
        print(f"Updated: {card_id}")

# Save updated cards
with open('src/data/cards.json', 'w', encoding='utf-8') as f:
    json.dump(cards, f, ensure_ascii=False, indent=2)

print(f"\nUpdated {updated} Ace cards with English translations")
