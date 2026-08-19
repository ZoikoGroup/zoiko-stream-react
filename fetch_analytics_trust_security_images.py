import urllib.request
import os

assets = [
    ("a7f93af23b9392cd0a0c6ac84c6ac5690e9f1578", "trust-security-bg.png"),
    ("2400417aba1a4cef1ec2cb81c2a0cb15fed0359c", "trust-center-illustration.png"),
    ("8d8cfc612ba96d25d73b8cf56a2de923daa5854f", "security-illustration.png"),
    ("d8fda96661264cf72797ba1ba5526c20cb376eaf", "privacy-illustration.png"),
]

out_dir = r"d:\Nextjs-app\zoiko-stream\public\images\platform-analytics"
os.makedirs(out_dir, exist_ok=True)

for hash_, name in assets:
    url = f"http://localhost:3845/assets/{hash_}.png"
    path = os.path.join(out_dir, name)
    try:
        urllib.request.urlretrieve(url, path)
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Error downloading {name}: {e}")
