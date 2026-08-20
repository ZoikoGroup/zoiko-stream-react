import urllib.request
import os

url = "http://localhost:3845/assets/a1d0fdea5da6bb5daa82374c4ac2d15056f8f849.png"
name = "faq-bg.png"
out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-analytics"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, name)

try:
    urllib.request.urlretrieve(url, path)
    print(f"Downloaded {name}")
except Exception as e:
    print(f"Error downloading {name}: {e}")
