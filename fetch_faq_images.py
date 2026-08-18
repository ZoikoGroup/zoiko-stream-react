import urllib.request
import os

images = {
    "faq-bg.png": "http://localhost:3845/assets/bd408b5f9a15399047af09dabed6a9f8f2a4fd2d.png",
    "chevron-down.svg": "http://localhost:3845/assets/a68d764ba493acef53cdacbd6b62a91d5fd1a950.svg"
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
