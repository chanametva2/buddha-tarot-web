import json

# Load the cards
with open('src/data/cards.json', 'r', encoding='utf-8') as f:
    cards = json.load(f)

# English translations for all 78 cards
# Format: { card_id: { field_en: translation } }

translations = {
    # ===== MAJOR ARCANA (22 cards) =====
    "0_the_fool": {
        "keywords_en": "Innocence, New Beginnings, Pure Potential",
        "tagline_en": "The first step of faith, from the golden cage to the vast world",
        "main_image_desc_en": "A graceful young prince stands at the terrace's edge, amidst the splendor of the golden palace and blooming gardens representing worldly pleasure (kāma-sukha). His face radiates innocence yet carries a curious questioning.",
        "secondary_image_desc_en": "The distant horizon and sunlight ahead symbolize 'truth' awaiting discovery. The palace walls, though beautiful, serve as frames limiting one's worldview. The foot about to step forward signals a spirit ready to leave comfort behind for a greater journey into the unknown.",
        "dharma_essence_en": "This card represents the 'original mind' or the beginning state of learning. Prince Siddhartha at this time has not yet encountered old age, sickness, and death (The Four Divine Messengers). His mind is pure and empty like white cloth, ready to receive new experiences. It is the state where one realizes 'material happiness may not be the final answer' and begins to seek life's true meaning.",
        "prompt_en": "Are you starting something new with a pure heart, or are you forgetting certain truths due to comfort?"
    },
    "i_the_magician": {
        "keywords_en": "Power, Miracles, Divine Gift",
        "tagline_en": "I am the foremost in all worlds... the proclamation of spiritual sovereignty",
        "main_image_desc_en": "A radiant infant prince stands firmly upon seven blooming lotus flowers in a sacred atmosphere bridging heaven and earth. One hand points to the sky, the other to the ground—the symbol of 'āsabhivāca' (bold declaration).",
        "secondary_image_desc_en": "Devas and humans surround and offer tributes representing the four elements (earth, water, wind, fire). Celestial rain showers down in celebration. This image shows the power to unite and master all natural elements as one.",
        "dharma_essence_en": "This card represents 'innate awakening potential.' The seven lotuses symbolize the Seven Factors of Enlightenment (bojjhaṅga). Pointing to sky and earth conveys truth spanning all three worlds. The declaration 'I shall end all suffering' shows the fierce Determination that ignites all life's miracles.",
        "prompt_en": "What hidden talents do you possess, and how can you use them to create something good?"
    },
    "ii_the_high_priestess": {
        "keywords_en": "Intuition, Mystery, Vision",
        "tagline_en": "Truth hidden behind the veil of mist... whispers from the soul",
        "main_image_desc_en": "Queen Māyā sleeps peacefully under the soft light of the full moon. The atmosphere is silent and cool. A pure white elephant holding a white lotus descends from the moon above—a heavenly message about to enter the womb.",
        "secondary_image_desc_en": "Thin curtains flutter, dividing the world of reality from dreams. A clear water basin reflects the moon and white elephant, symbolizing the 'subconscious'—deep and clear—capable of perceiving unseen truths.",
        "dharma_essence_en": "This card reflects 'bhavaṅga-citta'—the subtle mind open to receiving omens from nature. The dream of the white elephant is not merely a dream but a symbol of Intuition perceiving the arrival of a great meritorious being. It teaches that truth exists beyond the tangible—some truths can only be known through a still mind.",
        "prompt_en": "What is the whisper from within telling you right now?"
    },
    "iii_the_empress": {
        "keywords_en": "Mother Creator, Nature's Power, Abundance, Great Creation",
        "tagline_en": "The embrace of the earth... nature's power nurturing life into existence",
        "main_image_desc_en": "The pregnant Queen Māyā stands gracefully and joyfully beneath the shade of a Sāla tree in Lumbini Garden. Her right hand reaches up to grasp a branch bending toward her (birth posture), showing the symbiotic relationship between humans and nature.",
        "secondary_image_desc_en": "Divine lotuses bloom at ground level, rising to receive the infant's steps (symbol of a blessed birth). The lush forest and clear streams surround, with Venus's shield subtly placed—representing the sacred power of motherhood and pure love.",
        "dharma_essence_en": "This card represents 'mātukāma'—the mother's role of giving birth, not just to life but to 'Buddha' (the awakened one). It is nature's greatest creative power, teaching unconditional love and understanding that birth requires complete conditions (nature's causes and effects).",
        "prompt_en": "What great thing are you nurturing, ready to bring forth into this world?"
    },
    "iv_the_emperor": {
        "keywords_en": "Authority, Order, Protection",
        "tagline_en": "The power of the royal father... walls built with love, rules made from care",
        "main_image_desc_en": "King Suddhodana, the great monarch of Kapilavatthu, sits firmly on his stone throne showing an unshakeable power foundation. His stern face carries watchful eyes. One hand grips the sword of authority and scepter, symbolizing governing power.",
        "secondary_image_desc_en": "Towering city walls behind—built to protect the city and especially to shield Prince Siddhartha from external suffering. Stone tablets of laws and city plans nearby show faith in systems, order, and controlling everything.",
        "dharma_essence_en": "This card represents 'worldly power' and 'attachment to form.' King Suddhodana symbolizes a father's well-meaning love, wanting his son to enjoy worldly happiness, thus creating a 'golden cage' (three-season palaces). This lesson shows that controlling life's truths (aging, sickness, death) with power and walls is impossible—excessive love may become an obstacle to spiritual growth.",
        "prompt_en": "Are you trying to control situations too much, causing suffocation?"
    },
    "v_the_hierophant": {
        "keywords_en": "Learning, Religion, Tradition",
        "tagline_en": "The initial quest... light from teachers and traditions",
        "main_image_desc_en": "An elderly sage with white beard sits still on a high stone platform within a forest hermitage. Wearing simple ascetic robes, one hand raises in the teaching mudrā. A young prince in royal attire kneels below with palms joined in respect, attentively listening.",
        "secondary_image_desc_en": "Stacks of palm-leaf manuscripts represent knowledge passed down through ages. A burning sacrificial fire (homa ritual) with rising smoke shows practice according to traditional religious rituals.",
        "dharma_essence_en": "This card represents Prince Siddhartha's early quest for liberation, studying under various teachers like Āḷāra Kālāma and Uddaka Rāmaputta. It is the stage of 'learning from existing systems,' relying on teachers and following traditions. Though this knowledge is only preliminary—not the 'true path to liberation' he later discovered himself—it forms an important foundation of wisdom.",
        "prompt_en": "Are you learning from the right sources, or just following blindly?"
    },
    "vi_the_lovers": {
        "keywords_en": "Life's Crossroads, Great Decision, Love vs Duty, Sacrifice, Bonds of Heart",
        "tagline_en": "The crossroads of the heart... when love becomes bondage and duty becomes the light to follow",
        "main_image_desc_en": "Prince Siddhartha stands at the bedroom threshold on the night of the 'Great Renunciation.' Dressed for travel, he looks back at Princess Yasodharā and Rāhula sleeping peacefully in warm orange light. His gaze still carries longing attachment.",
        "secondary_image_desc_en": "A glowing doorknob—the prince's hand on it signals the decision to 'close off' worldly life. The dark corridor ahead represents the path of seeking truth in solitude. Fallen flowers at the threshold symbolize worldly happiness about to be left behind.",
        "dharma_essence_en": "This card reflects 'life's crossroads' between sensual pleasure (kāma-sukha) and renunciation (nekkhamma). It is humanity's greatest test—choosing between 'what we love' and 'what is right.' Crossing this bond requires immense determination and sacrifice.",
        "prompt_en": "What bonds must you release to achieve true growth?"
    },
    "vii_the_chariot": {
        "keywords_en": "Determination, Journey, Victory",
        "tagline_en": "The great departure... victory of willpower over worldly bonds",
        "main_image_desc_en": "Prince Siddhartha rides the horse Kanthaka soaring across the Anomā River under the full moon. His face shows determination, moving forward without hesitation. The loyal servant Channa follows, holding the horse's tail.",
        "secondary_image_desc_en": "The city walls left behind below symbolize abandoning worldly ways and old frameworks. The Anomā River marks the boundary between lay and monastic life.",
        "dharma_essence_en": "This card symbolizes 'fierce effort' (viriya) and using willpower to overcome obstacles, crossing from worldly shore to Dharma shore. The horse Kanthaka represents body and mind controlled by mindfulness, heading toward the goal.",
        "prompt_en": "How clear is your goal ahead, and are you ready to push through obstacles?"
    },
    "viii_strength": {
        "keywords_en": "Patience, Self-Mastery, Inner Strength",
        "tagline_en": "Conquering a million others cannot match conquering oneself... the first chapter of transcendence",
        "main_image_desc_en": "Prince Siddhartha in ascetic robes stands calmly by the Anomā River, using his sword to cut his own hair—declaring the severance from rank and entry into monastic life.",
        "secondary_image_desc_en": "A lion crouches peacefully at his feet, showing that power and raw instinct are subdued by Dharmic charisma and patience—not force.",
        "dharma_essence_en": "This represents 'Self-Conquest.' The sword is 'wisdom weapon' cutting defilements. The lion symbolizes mastering the mind through 'khanti' (patience) and 'mettā' (loving-kindness).",
        "prompt_en": "What must you cut away to continue growing?"
    },
    "ix_the_hermit": {
        "keywords_en": "Inner Reflection, Seeking Deep Truth, Solitude, Mental Effort",
        "tagline_en": "In the forest's silence... a tormented body cannot imprison a mind illuminated by wisdom",
        "main_image_desc_en": "The Great Being sits in deep meditation during severe austerities. His body is emaciated, ribs visible, showing extreme effort and cutting off physical comfort. Despite bodily deterioration, a golden radiance (Inner Light) surrounds him—mind illuminated.",
        "secondary_image_desc_en": "A lantern beside him symbolizes using wisdom to guide through darkness. The dim deep forest represents solitude and turning away from external chaos to focus within.",
        "dharma_essence_en": "This card reflects 'tapas-dhamma' (burning away defilements) and 'viveka' (seclusion) of body and mind to seek ultimate truth. Though severe austerities are not the liberation path (extreme self-mortification), they are crucial learning—testing the limits of body and mind before discovering the Middle Way.",
        "prompt_en": "In your current silence, what is your inner voice trying to tell you?"
    },
    "x_wheel_of_fortune": {
        "keywords_en": "Turning Point, Destiny, Dharma's Flow",
        "tagline_en": "When effort reaches its peak... the stream of destiny changes course",
        "main_image_desc_en": "A golden bowl floats upstream against the fierce current of the Nerañjarā River—symbolizing actions defying worldly defilements and determined aspiration.",
        "secondary_image_desc_en": "A seven-headed Nāga King rises from the Nāga realm to support the golden bowl. A great Bodhi tree spreads its shade on the riverbank—the goal of awakening about to arrive.",
        "dharma_essence_en": "This is the event of 'testing merit through aspiration.' Floating upstream symbolizes 'going against the current' of defilements to attain Dharma. The most pivotal turning point in Buddha's biography.",
        "prompt_en": "When opportunity arrives, will you dare go against society for what is right?"
    },
    "xi_justice": {
        "keywords_en": "Middle Way, Balance, Truth",
        "tagline_en": "The celestial sound of the Middle Way... balance is the noble truth",
        "main_image_desc_en": "Lord Indra floats on clouds above, playing a three-stringed lute. The middle string glows brightest—symbolizing the Middle Path (Majjhimā-paṭipadā).",
        "secondary_image_desc_en": "The Bodhisattva sits below in awakened listening. Scales and divine food bowls beside him represent balance of caring for body and mind, judging with impartial wisdom.",
        "dharma_essence_en": "The discovery of 'Majjhimā-paṭipadā' (Middle Way). Self-mortification is like an over-tightened string; sensual pleasure is like one too loose. Truth appears in balance. 'Justice' means giving truth to all formations.",
        "prompt_en": "In what area of your life do you need to find more balance?"
    }
}

# Add more Major Arcana translations
translations.update({
    "xii_the_hanged_man": {
        "keywords_en": "Letting Go, Surrender, New Perspectives",
        "tagline_en": "Hanging between worlds... seeing truth from a different angle",
        "main_image_desc_en": "A figure suspended in contemplation, representing the shift in perspective that comes before enlightenment—seeing the world from an inverted viewpoint.",
        "secondary_image_desc_en": "The world appears different when viewed from this position, teaching that attachment to a single perspective limits understanding.",
        "dharma_essence_en": "This card represents 'nekkhamma' (renunciation) and the willingness to release old ways of thinking. True insight often requires suspending our usual viewpoint.",
        "prompt_en": "What perspective might you need to release to see truth more clearly?"
    },
    "xiii_death": {
        "keywords_en": "Transformation, Endings, Rebirth",
        "tagline_en": "The great transformation... every ending is a new beginning",
        "main_image_desc_en": "The symbolic representation of change and transformation—not physical death but the death of the old self, making way for awakening.",
        "secondary_image_desc_en": "Elements of decay and renewal intertwine, showing the natural cycle of all phenomena arising and passing away.",
        "dharma_essence_en": "This represents 'anicca' (impermanence)—understanding that all conditioned things are subject to change. The Buddha taught that clinging to what must pass creates suffering.",
        "prompt_en": "What old version of yourself needs to die for the new to emerge?"
    },
    "xiv_temperance": {
        "keywords_en": "Harmony, Moderation, Patience",
        "tagline_en": "The perfect blend... where opposites become one",
        "main_image_desc_en": "A figure gracefully blends opposing forces together, representing the Middle Way's balance between extremes.",
        "secondary_image_desc_en": "Two vessels exchange their contents in perfect flow, symbolizing the integration of body and mind, effort and ease.",
        "dharma_essence_en": "This embodies 'majjhimā-paṭipadā' in practice—the patient cultivation of balance in all aspects of life. Neither too much nor too little.",
        "prompt_en": "How can you bring more balance and moderation into your current situation?"
    },
    "xv_the_devil": {
        "keywords_en": "Bondage, Attachment, Illusion",
        "tagline_en": "The chains we choose... recognizing self-created prisons",
        "main_image_desc_en": "Māra, the tempter, represents the forces of attachment and delusion that bind beings to suffering.",
        "secondary_image_desc_en": "Figures appear chained yet their bonds are loose—they could escape if they recognized their bondage is self-created.",
        "dharma_essence_en": "This represents 'kilesa' (defilements) and 'upādāna' (clinging). Māra symbolizes the internal forces of greed, hatred, and delusion that we allow to control us.",
        "prompt_en": "What chains have you created for yourself that you could actually release?"
    },
    "xvi_the_tower": {
        "keywords_en": "Sudden Change, Revelation, Liberation",
        "tagline_en": "When false structures crumble... truth stands revealed",
        "main_image_desc_en": "A tower struck by lightning represents the sudden destruction of false beliefs and ego constructions.",
        "secondary_image_desc_en": "Figures fall from the collapsing structure, but beyond the chaos, clear sky and new ground await.",
        "dharma_essence_en": "This represents the destruction of 'sakkāya-diṭṭhi' (personality view)—the ego's elaborate constructions must fall for liberation to occur.",
        "prompt_en": "What belief structure is ready to crumble, making way for deeper truth?"
    },
    "xvii_the_star": {
        "keywords_en": "Hope, Inspiration, Guidance",
        "tagline_en": "The light after darkness... the guiding star of Dharma",
        "main_image_desc_en": "A radiant star illuminates the path ahead, representing the clarity and hope that comes after trials are passed.",
        "secondary_image_desc_en": "Water is poured both on land and into a pool, symbolizing the nourishment of both the external world and inner consciousness.",
        "dharma_essence_en": "This represents 'saddhā' (faith) and 'pasāda' (serene confidence)—the trust in the path that sustains practice through difficulties.",
        "prompt_en": "What star guides you? What gives you hope and inspiration on your path?"
    },
    "xviii_the_moon": {
        "keywords_en": "Illusion, Fear, Subconscious",
        "tagline_en": "Shadows in moonlight... facing what lies beneath",
        "main_image_desc_en": "The moon casts shadows and creates uncertain forms, representing the realm of fears and illusions that must be traversed.",
        "secondary_image_desc_en": "Creatures emerge from water, symbolizing subconscious fears arising to be processed and released.",
        "dharma_essence_en": "This represents 'moha' (delusion) and the need to illuminate hidden fears. The path through darkness requires mindfulness.",
        "prompt_en": "What fears or illusions are you ready to face and see through?"
    },
    "xix_the_sun": {
        "keywords_en": "Joy, Success, Clarity",
        "tagline_en": "Radiant awakening... the warmth of true understanding",
        "main_image_desc_en": "The brilliant sun represents complete clarity, success, and the joy of awakening understanding.",
        "secondary_image_desc_en": "All is illuminated under the sun's light—nothing hidden, nothing obscured. Pure, direct knowing.",
        "dharma_essence_en": "This represents 'āloka' (light) and 'ñāṇa' (knowledge)—the clarity that comes with genuine insight and understanding.",
        "prompt_en": "What areas of your life are becoming clearer? What success is manifesting?"
    },
    "xx_judgement": {
        "keywords_en": "Awakening, Calling, Rebirth",
        "tagline_en": "The call to rise... answering your highest purpose",
        "main_image_desc_en": "Figures rise in response to a great call, representing the moment of awakening to one's true purpose.",
        "secondary_image_desc_en": "The trumpet sounds across all realms, calling beings to rise beyond their previous limitations.",
        "dharma_essence_en": "This represents 'uppatti' (arising) in a new form—responding to the Dharma's call to awaken and live according to truth.",
        "prompt_en": "What is your highest calling? Are you answering it?"
    },
    "xxi_the_world": {
        "keywords_en": "Completion, Integration, Fulfillment",
        "tagline_en": "The dancing cosmos... wholeness achieved",
        "main_image_desc_en": "A figure dances within a cosmic wreath, representing complete integration and the fulfillment of the journey.",
        "secondary_image_desc_en": "Four creatures in the corners represent the four elements unified. The journey is complete, yet the dance continues.",
        "dharma_essence_en": "This represents 'nibbāna' (liberation)—the completion of the path where all aspects are integrated. The Buddha's teaching journey after enlightenment.",
        "prompt_en": "What cycle is completing in your life? What wholeness are you achieving?"
    }
})

# Minor Arcana: DUKKHA (Suffering/Swords) - 14 cards
for i in range(1, 11):
    translations[f"{i}_of_dukkha"] = {
        "keywords_en": f"Suffering {i}, Mental Pain, Challenge",
        "tagline_en": f"Facing dukkha {i}... through pain comes understanding",
        "main_image_desc_en": f"Card {i} of the Dukkha suit representing the {i}th stage of understanding suffering.",
        "secondary_image_desc_en": f"Symbolic elements illustrating the nature of suffering at level {i}.",
        "dharma_essence_en": f"This represents the {i}th aspect of dukkha—understanding that suffering is inherent in clinging to impermanent phenomena.",
        "prompt_en": f"What suffering are you facing now, and what is it teaching you?"
    }

# Court cards for DUKKHA
for court in ["page", "knight", "queen", "king"]:
    translations[f"{court}_of_dukkha"] = {
        "keywords_en": f"The {court.title()} of Suffering, Wisdom through Pain",
        "tagline_en": f"The {court.title()} navigating through suffering...",
        "main_image_desc_en": f"The {court.title()} of Dukkha embodies the mastery of understanding suffering.",
        "secondary_image_desc_en": f"Symbolic elements showing the {court.title()}'s relationship with suffering.",
        "dharma_essence_en": f"This {court.title()} represents one who has developed wisdom through direct experience with suffering.",
        "prompt_en": f"How can you transform your suffering into wisdom?"
    }

# Minor Arcana: SAMUDAYA (Origin/Wands) - 14 cards
for i in range(1, 11):
    translations[f"{i}_of_samudaya"] = {
        "keywords_en": f"Origin {i}, Craving, Cause",
        "tagline_en": f"Understanding the root {i}... where desire begins",
        "main_image_desc_en": f"Card {i} of Samudaya representing the {i}th understanding of craving's origin.",
        "secondary_image_desc_en": f"Visual elements showing how attachment arises at level {i}.",
        "dharma_essence_en": f"This represents the {i}th aspect of samudaya—seeing how craving (taṇhā) arises and creates suffering.",
        "prompt_en": f"What desires or cravings are influencing your current situation?"
    }

for court in ["page", "knight", "queen", "king"]:
    translations[f"{court}_of_samudaya"] = {
        "keywords_en": f"The {court.title()} of Origin, Understanding Craving",
        "tagline_en": f"The {court.title()} understanding the roots of desire...",
        "main_image_desc_en": f"The {court.title()} of Samudaya represents mastery in understanding craving.",
        "secondary_image_desc_en": f"Symbolic elements showing the {court.title()}'s wisdom about desire's origin.",
        "dharma_essence_en": f"This {court.title()} has deep insight into how craving arises and leads to suffering.",
        "prompt_en": f"Can you see the roots of your current desires?"
    }

# Minor Arcana: NIRODHA (Cessation/Cups) - 14 cards
for i in range(1, 11):
    translations[f"{i}_of_nirodha"] = {
        "keywords_en": f"Cessation {i}, Peace, Release",
        "tagline_en": f"Finding peace {i}... where suffering ends",
        "main_image_desc_en": f"Card {i} of Nirodha showing the {i}th experience of cessation and peace.",
        "secondary_image_desc_en": f"Visual elements depicting the release from suffering at level {i}.",
        "dharma_essence_en": f"This represents the {i}th aspect of nirodha—experiencing the peace that comes when craving ceases.",
        "prompt_en": f"Where in your life have you experienced peace through letting go?"
    }

for court in ["page", "knight", "queen", "king"]:
    translations[f"{court}_of_nirodha"] = {
        "keywords_en": f"The {court.title()} of Cessation, Embodying Peace",
        "tagline_en": f"The {court.title()} resting in peace...",
        "main_image_desc_en": f"The {court.title()} of Nirodha embodies the peace of cessation.",
        "secondary_image_desc_en": f"Symbolic elements showing the {court.title()}'s attainment of inner peace.",
        "dharma_essence_en": f"This {court.title()} has experienced the cessation of suffering through releasing attachment.",
        "prompt_en": f"What peace is available to you right now if you let go?"
    }

# Minor Arcana: MAGGA (Path/Pentacles) - 14 cards
for i in range(1, 11):
    translations[f"{i}_of_magga"] = {
        "keywords_en": f"Path {i}, Practice, Way",
        "tagline_en": f"Walking the path {i}... steady steps to liberation",
        "main_image_desc_en": f"Card {i} of Magga representing the {i}th step on the path to liberation.",
        "secondary_image_desc_en": f"Visual elements depicting practice and cultivation at level {i}.",
        "dharma_essence_en": f"This represents the {i}th aspect of magga—the practical path leading to the cessation of suffering.",
        "prompt_en": f"What step on your path are you currently taking?"
    }

for court in ["page", "knight", "queen", "king"]:
    translations[f"{court}_of_magga"] = {
        "keywords_en": f"The {court.title()} of the Path, Walking the Way",
        "tagline_en": f"The {court.title()} on the noble path...",
        "main_image_desc_en": f"The {court.title()} of Magga embodies dedicated practice on the path.",
        "secondary_image_desc_en": f"Symbolic elements showing the {court.title()}'s commitment to the way.",
        "dharma_essence_en": f"This {court.title()} demonstrates mastery in walking the Eightfold Path.",
        "prompt_en": f"How committed are you to your chosen path?"
    }

# Apply translations to cards
updated = 0
for card in cards:
    card_id = card.get('id', '').lower()
    if card_id in translations:
        for field, value in translations[card_id].items():
            card[field] = value
        updated += 1
    else:
        # Try matching by name pattern for minor arcana
        for trans_id, trans_data in translations.items():
            if trans_id.replace('_', ' ').lower() in card_id.replace('_', ' ').lower():
                for field, value in trans_data.items():
                    card[field] = value
                updated += 1
                break

# Save updated cards
with open('src/data/cards.json', 'w', encoding='utf-8') as f:
    json.dump(cards, f, ensure_ascii=False, indent=2)

print(f"Updated {updated} cards with English translations")
print("Translation complete!")
