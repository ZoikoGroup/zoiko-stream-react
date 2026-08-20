import urllib.request
import os

images = {
    "cta-band-bg.png": "http://localhost:3845/assets/a7f93af23b9392cd0a0c6ac84c6ac5690e9f1578.png",
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
