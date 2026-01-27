import os
from PIL import Image

# Configuration
ASSETS_DIR = os.path.join("public", "assets")
MAX_WIDTH = 800
QUALITY = 80

def optimize_images():
    count = 0
    saved_space = 0
    
    # Walk through assets directory
    for root, dirs, files in os.walk(ASSETS_DIR):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                file_path = os.path.join(root, file)
                file_size_before = os.path.getsize(file_path)
                
                try:
                    with Image.open(file_path) as img:
                        # Convert to RGB if necessary (e.g. for PNGs with transparency)
                        if img.mode in ('RGBA', 'LA'):
                            # Create a white background for transparent images if saving as JPG, 
                            # but for WebP we can keep transparency.
                            pass 
                        
                        # Resize if needed
                        if img.width > MAX_WIDTH:
                            ratio = MAX_WIDTH / img.width
                            new_height = int(img.height * ratio)
                            img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
                        
                        # Save as WebP
                        new_file_path = os.path.splitext(file_path)[0] + ".webp"
                        img.save(new_file_path, "WEBP", quality=QUALITY)
                        
                        file_size_after = os.path.getsize(new_file_path)
                        saved_space += (file_size_before - file_size_after)
                        count += 1
                        
                        print(f"Converted: {file} -> {os.path.basename(new_file_path)} (Saved {file_size_before - file_size_after} bytes)")
                        
                except Exception as e:
                    print(f"Error processing {file}: {e}")

    print(f"\nOptimization Complete!")
    print(f"Processed {count} images.")
    print(f"Total space saved: {saved_space / (1024*1024):.2f} MB")

if __name__ == "__main__":
    # Ensure we are in the right directory or adjust path
    if not os.path.exists(ASSETS_DIR):
        print(f"Error: {ASSETS_DIR} not found. Please run from project root.")
    else:
        optimize_images()
