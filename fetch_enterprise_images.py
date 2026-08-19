import urllib.request
import os

images = {
    "enterprise-bg.png": "http://localhost:3845/assets/3d81f83a6e876dc82b4044752dfc579aaaef8682.png",
    "enterprise-card-1.png": "http://localhost:3845/assets/910099aa578a67e0a18332f80158166d7aa6c99d.png",
    "enterprise-card-2.png": "http://localhost:3845/assets/c9b55b04a37d35d36052e75bf5deeaee20089876.png"
}

out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\real-time-contribution-page"
os.makedirs(out_dir, exist_ok=True)

for name, url in images.items():
    path = os.path.join(out_dir, name)
    try:
        urllib.request.urlretrieve(url, path)
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Error downloading {name}: {e}")
