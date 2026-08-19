import urllib.request
import os

url = "http://localhost:3845/assets/0601c315e6e06bdeec0576819b701a7622b2f9af.png"
name = "final-cta-bg.png"
out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-analytics"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, name)

try:
    urllib.request.urlretrieve(url, path)
    print(f"Downloaded {name}")
except Exception as e:
    print(f"Error downloading {name}: {e}")
