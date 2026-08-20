import urllib.request
import os

url = "http://localhost:3845/assets/5e1feefe60d08aed8bad0c77a59f98e47d09d82d.png"
name = "analysis-patterns-bg.png"
out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-analytics"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, name)

try:
    urllib.request.urlretrieve(url, path)
    print(f"Downloaded {name}")
except Exception as e:
    print(f"Error downloading {name}: {e}")
