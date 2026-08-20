import urllib.request
import os

images = {
    "recording-bg.png": "http://localhost:3845/assets/2a2cacc16df46838f934226e70cff42053805e0c.png",
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
