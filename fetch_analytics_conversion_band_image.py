import urllib.request
import os

url = "http://localhost:3845/assets/bd408b5f9a15399047af09dabed6a9f8f2a4fd2d.png"
name = "conversion-band-bg.png"
out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-analytics"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, name)

try:
    urllib.request.urlretrieve(url, path)
    print(f"Downloaded {name}")
except Exception as e:
    print(f"Error downloading {name}: {e}")
