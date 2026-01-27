import os
from PIL import Image

# Configuration
SOURCE_DIR = 'public/assets'
THUMB_DIR = 'public/assets/thumbnails'
TARGET_WIDTH = 400
QUALITY = 80

def generate_thumbnails():
    # Ensure thumbnail root directory exists
    if not os.path.exists(THUMB_DIR):
        os.makedirs(THUMB_DIR)
        print(f"Created directory: {THUMB_DIR}")

    # Walk through source directory
    for root, dirs, files in os.walk(SOURCE_DIR):
        # Skip the thumbnails directory itself to avoid recursion
        if 'thumbnails' in root:
            continue

        for file in files:
            if file.lower().endswith(('.webp', '.jpg', '.jpeg', '.png')):
                source_path = os.path.join(root, file)
                
                # Determine relative path to maintain structure
                rel_path = os.path.relpath(root, SOURCE_DIR)
                target_subdir = os.path.join(THUMB_DIR, rel_path)
                
                # Ensure target subdirectory exists
                if not os.path.exists(target_subdir):
                    os.makedirs(target_subdir)
                
                target_path = os.path.join(target_subdir, file)
                
                # Skip if thumbnail already exists (optional, but good for re-runs)
                # For now, we overwrite to ensure latest settings
                
                try:
                    with Image.open(source_path) as img:
                        # Calculate new height preserving aspect ratio
                        width_percent = (TARGET_WIDTH / float(img.size[0]))
                        target_height = int((float(img.size[1]) * float(width_percent)))
                        
                        # Resize
                        img = img.resize((TARGET_WIDTH, target_height), Image.Resampling.LANCZOS)
                        
                        # Save
                        img.save(target_path, quality=QUALITY, optimize=True)
                        print(f"Generated: {target_path} ({TARGET_WIDTH}x{target_height})")
                        
                except Exception as e:
                    print(f"Error processing {source_path}: {e}")

if __name__ == "__main__":
    print("Starting thumbnail generation...")
    generate_thumbnails()
    print("Thumbnail generation complete!")
