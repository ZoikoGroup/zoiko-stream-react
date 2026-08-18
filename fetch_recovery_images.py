import urllib.request
import os

images = {
    "recovery-bg.png": "http://localhost:3845/assets/76fd7a798ea8b3ce2d7df532bfaebd025a05eadf.png",
    "recovery-card-1.png": "http://localhost:3845/assets/f33dbd4256cb96c0cad5f501a1caf36ee14ff33d.png",
    "recovery-card-2.png": "http://localhost:3845/assets/bfa45c39006437d12b148fbe00d0a78268693123.png",
    "recovery-card-3.png": "http://localhost:3845/assets/88d7e8aa64caa870a1ed86fa80c933bd27758899.png",
    "ellipse-dark.svg": "http://localhost:3845/assets/7e80fe28c9d1d30ae2f3ab2b89f30a775e55e944.svg"
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
