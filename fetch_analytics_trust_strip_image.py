import urllib.request
import os

url = "http://localhost:3845/assets/4e7d5d130da36d0e0ec1d106c262513664cb3de1.png"
name = "trust-strip-bg.png"
out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-analytics"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, name)

try:
    urllib.request.urlretrieve(url, path)
    print(f"Downloaded {name}")
except Exception as e:
    print(f"Error downloading {name}: {e}")
