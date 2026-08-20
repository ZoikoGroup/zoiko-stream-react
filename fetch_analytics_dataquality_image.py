import urllib.request
import os

url = "http://localhost:3845/assets/03823ae1c3af3176448e6b2cbdbefb5786ca28e3.png"
name = "data-quality-bg.png"
out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-analytics"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, name)

try:
    urllib.request.urlretrieve(url, path)
    print(f"Downloaded {name}")
except Exception as e:
    print(f"Error downloading {name}: {e}")
