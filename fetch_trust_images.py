import urllib.request
import os

images = {
    "trust-lock.svg": "http://localhost:3845/assets/52719bceaf87443cc85b7c5ea23b60b882e946c4.svg",
    "trust-eye-off.svg": "http://localhost:3845/assets/632a17318eaeb18f8f1cfe5b73822cd69a65d5f8.svg",
    "trust-users.svg": "http://localhost:3845/assets/718c360bf34fc3a7c653dc5c84b5db8e39c259ad.svg",
    "trust-shield-alert.svg": "http://localhost:3845/assets/1213a03aa3037c1a1da1ef5f3440a24bb662958e.svg"
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
