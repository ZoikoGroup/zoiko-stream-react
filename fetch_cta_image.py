import urllib.request
import os

images = {
    "cta-bg.png": "http://localhost:3845/assets/e3871c2fc2787f9b6f3d1b84771c66642264189c.png"
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
