import urllib.request
import os

images = {
    "spa-bg.png": "http://localhost:3845/assets/c754601bcc8fb469d8ba5e228e21fda90a7a8467.png",
    "spa-card-0.png": "http://localhost:3845/assets/9b272f388ca31b3e5cae602e4ae72dddaa786191.png",
    "spa-card-1.png": "http://localhost:3845/assets/1d209312b2208ceb560d8f6be4a2496b0921cdfb.png",
    "spa-card-2.png": "http://localhost:3845/assets/f7a3d1b9eda488bb3d2ebac271719d6b832f6daf.png",
}

out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-captions-and-translation"
os.makedirs(out_dir, exist_ok=True)

for name, url in images.items():
    path = os.path.join(out_dir, name)
    try:
        urllib.request.urlretrieve(url, path)
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Error downloading {name}: {e}")
