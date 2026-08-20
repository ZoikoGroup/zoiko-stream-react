import urllib.request
import os

images = {
    "trust-strip-bg.png": "http://localhost:3845/assets/bd408b5f9a15399047af09dabed6a9f8f2a4fd2d.png",
    "icon-shield.svg": "http://localhost:3845/assets/722ce109bdf57f6b5c1da0210eec6ef2db81c520.svg",
    "icon-globe.svg": "http://localhost:3845/assets/1baeddb7384110a97a115e25cdccda60648c4ab6.svg",
    "icon-cpu.svg": "http://localhost:3845/assets/c605f9e5ac1805868051a162e39facedcc1d4082.svg",
    "icon-user-check.svg": "http://localhost:3845/assets/7de859c53654a61f00644a82b3d990ca9759547a.svg",
    "icon-alert-triangle.svg": "http://localhost:3845/assets/7b9177a59f1e117b1b275eab9ee8ac37ea0e9dfa.svg",
    "icon-lock.svg": "http://localhost:3845/assets/58ff67e0a93ed22a5bbdae31552dfaefce809a49.svg"
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
