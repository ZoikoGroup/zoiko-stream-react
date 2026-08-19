import urllib.request
import os

images = {
    "dev-card-1.png": "http://localhost:3845/assets/14296070a1847af92375a43921fa4923aa221dcf.png",
    "dev-card-2.png": "http://localhost:3845/assets/657e14622c2655e0a7961188b6dbb741b2d4d4f8.png",
    "dev-card-3.png": "http://localhost:3845/assets/34fa85c29fd242fb5a986ac2f2bb410cf7dc408c.png",
    "dev-card-4.png": "http://localhost:3845/assets/0c57f28387ac95e65cd05f9a4389219ae14f88cf.png"
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
