import urllib.request
import os

images = {
    "developer-bg.png": "http://localhost:3845/assets/bd408b5f9a15399047af09dabed6a9f8f2a4fd2d.png",
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
