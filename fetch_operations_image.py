import urllib.request
import os

url = "http://localhost:3845/assets/9e6a0a77403c01f147780d3c9ed16c962481633e.png"
name = "operations-bg.png"
out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-captions-and-translation"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, name)

try:
    urllib.request.urlretrieve(url, path)
    print(f"Downloaded {name}")
except Exception as e:
    print(f"Error downloading {name}: {e}")
