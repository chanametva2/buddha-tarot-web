import json
import re

CARDS_PATH = 'src/data/cards.json'

with open(CARDS_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace ../ with /assets/
content = content.replace('"../', '"/assets/')

# Replace extensions with .webp
content = re.sub(r'\.(jpg|png|jpeg)"', '.webp"', content, flags=re.IGNORECASE)

with open(CARDS_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated cards.json references.")
