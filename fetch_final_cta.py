import urllib.request
import os

images = {
    "final-cta-bg.png": "http://localhost:3845/assets/72d1246781a71c121e2fd759ab65ffba3c8bdf1b.png",
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
