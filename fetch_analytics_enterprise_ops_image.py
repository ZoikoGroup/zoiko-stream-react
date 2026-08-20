import urllib.request
import os

url = "http://localhost:3845/assets/58d9df578a2e661030e17bc6edd83f7a2adb70ca.png"
name = "enterprise-ops-bg.png"
out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-analytics"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, name)

try:
    urllib.request.urlretrieve(url, path)
    print(f"Downloaded {name}")
except Exception as e:
    print(f"Error downloading {name}: {e}")
