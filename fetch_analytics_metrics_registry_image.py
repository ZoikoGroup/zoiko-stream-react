import urllib.request
import os

url = "http://localhost:3845/assets/76fd7a798ea8b3ce2d7df532bfaebd025a05eadf.png"
name = "metrics-registry-bg.png"
out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-analytics"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, name)

try:
    urllib.request.urlretrieve(url, path)
    print(f"Downloaded {name}")
except Exception as e:
    print(f"Error downloading {name}: {e}")
