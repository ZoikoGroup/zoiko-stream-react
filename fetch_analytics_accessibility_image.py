import urllib.request
import os

url = "http://localhost:3845/assets/3d81f83a6e876dc82b4044752dfc579aaaef8682.png"
name = "accessibility-bg.png"
out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-analytics"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, name)

try:
    urllib.request.urlretrieve(url, path)
    print(f"Downloaded {name}")
except Exception as e:
    print(f"Error downloading {name}: {e}")
