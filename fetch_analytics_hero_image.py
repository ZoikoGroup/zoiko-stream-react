import urllib.request
import os

url = "http://localhost:3845/assets/2d5c1a594055e697b83a39ebc5753a8d5e5bb5e3.png"
name = "hero-bg.png"
out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-analytics"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, name)

try:
    urllib.request.urlretrieve(url, path)
    print(f"Downloaded {name}")
except Exception as e:
    print(f"Error downloading {name}: {e}")
