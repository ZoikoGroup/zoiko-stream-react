import urllib.request
import os

images = {
    "readiness-bg.png": "http://localhost:3845/assets/009b514119340d906366d301cf9bda4d1050fac8.png",
    "ios-signal.svg": "http://localhost:3845/assets/0139631d9150e1c895eafc5aecb736566bfe0c3b.svg",
    "ios-wifi-signal.svg": "http://localhost:3845/assets/07fad3f175330d2305d19f1e9cbe86e707be9feb.svg",
    "ios-battery-full.svg": "http://localhost:3845/assets/fb9b130289bfa70896046b72588a317344dda4a6.svg",
    "lock.svg": "http://localhost:3845/assets/8690d97c309b49532d80bc485d841fcef7d8e00f.svg"
}

out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\real-time-contribution-page"
os.makedirs(out_dir, exist_ok=True)

for name, url in images.items():
    path = os.path.join(out_dir, name)
    try:
        urllib.request.urlretrieve(url, path)
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Error downloading {name}: {e}")
