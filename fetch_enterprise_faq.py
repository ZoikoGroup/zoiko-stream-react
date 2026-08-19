import urllib.request
import os

images = {
    "faq-bg.png": "http://localhost:3845/assets/87e10d024763a33128f98b6d5ce1f10a89d3cd66.png",
}

out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-enterprise-broadcasting"
os.makedirs(out_dir, exist_ok=True)

for name, url in images.items():
    path = os.path.join(out_dir, name)
    try:
        urllib.request.urlretrieve(url, path)
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Error downloading {name}: {e}")
