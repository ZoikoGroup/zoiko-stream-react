import urllib.request
import os

url = "http://localhost:3845/assets/46e5c1d9de51f48817b23cdb71b2930746a71fae.png"
name = "readiness-bg.png"
out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-captions-and-translation"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, name)

try:
    urllib.request.urlretrieve(url, path)
    print(f"Downloaded {name}")
except Exception as e:
    print(f"Error downloading {name}: {e}")
