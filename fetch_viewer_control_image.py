import urllib.request
import os

url = "http://localhost:3845/assets/2773e8357b6c76e139a364b5746c176dd969ba70.png"
name = "viewer-control-bg.png"
out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-captions-and-translation"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, name)

try:
    urllib.request.urlretrieve(url, path)
    print(f"Downloaded {name}")
except Exception as e:
    print(f"Error downloading {name}: {e}")
