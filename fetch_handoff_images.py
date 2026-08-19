import urllib.request
import os

images = {
    "chevron-right.svg": "http://localhost:3845/assets/b493a17bdfd2b85912718c7d9fc0a95d49d75143.svg"
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
