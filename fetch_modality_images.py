import urllib.request
import os

images = {
    "modality-bg.png": "http://localhost:3845/assets/c715e2614e2f872bfe8130ba6244a1775afdd0d1.png",
    "modality-card-0.png": "http://localhost:3845/assets/66fc732a37d1dd7e5775fbf9b90e8bbc13b9b700.png",
    "modality-card-1.png": "http://localhost:3845/assets/d0baddb01e8b58b297b21ddc6d17bf96e243f127.png",
    "modality-card-2.png": "http://localhost:3845/assets/327fc76cbb50207cfce78e640f7fa45e0849c985.png",
    "modality-card-3.png": "http://localhost:3845/assets/8581a8e7b75fa74802d008a0d6b26a510b4faec4.png",
    "modality-card-4.png": "http://localhost:3845/assets/8659812cd134b61e916f324ba1cb68d056050356.png",
    "modality-card-5.png": "http://localhost:3845/assets/a8d37d3632701b9c120743860c03d6555f88ed3a.png"
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
