import urllib.request
import os

url = "http://localhost:3845/assets/e237d29143ca17206b90c8a19305a8b419c00bae.png"
name = "result-experience-bg.png"
out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-analytics"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, name)

try:
    urllib.request.urlretrieve(url, path)
    print(f"Downloaded {name}")
except Exception as e:
    print(f"Error downloading {name}: {e}")
