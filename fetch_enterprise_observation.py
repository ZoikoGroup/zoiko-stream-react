import urllib.request
import os

images = {
    "observation-bg.png": "http://localhost:3845/assets/fbbad1a00f5be2750af9710b9db2aea77409315d.png",
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
