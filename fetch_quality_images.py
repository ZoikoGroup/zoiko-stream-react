import urllib.request
import os

images = {
    "quality-bg.png": "http://localhost:3845/assets/8c701dd971a455cf800d50b0aebf06d2a1076c96.png",
    "quality-card-0.png": "http://localhost:3845/assets/dfa8a03b547e5c7a77f0ff7fcc3809c600ceaf07.png",
    "quality-card-1.png": "http://localhost:3845/assets/c9f1acd09f9d270edadb09007ca8ed908c3739d0.png",
    "quality-card-2.png": "http://localhost:3845/assets/d38b1a9bf82068075d78bfd53125b48339f5031e.png",
    "quality-card-3.png": "http://localhost:3845/assets/70f933ec3d6915fb5b347fbd7d83c1c317ca654e.png",
    "quality-card-4.png": "http://localhost:3845/assets/1497c88c9a44d383ba56a71f2cddced3a5a739b2.png",
    "quality-card-5.png": "http://localhost:3845/assets/982e5c214c240955f0293bc5eecadb9d303335b7.png",
}

out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-captions-and-translation"
os.makedirs(out_dir, exist_ok=True)

for name, url in images.items():
    path = os.path.join(out_dir, name)
    try:
        urllib.request.urlretrieve(url, path)
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Error downloading {name}: {e}")
