import urllib.request
import os

images = {
    "job-selector-bg.png": "http://localhost:3845/assets/d87e80c341640bd7ae4b52268a4231ee2a508fad.png",
    "card-img-0.png": "http://localhost:3845/assets/c1642b59138e1274b1086978da25feabb9985636.png",
    "card-img-1.png": "http://localhost:3845/assets/03742626e028d0a8ecf360ed2ba739b4aadb079c.png",
    "card-img-2.png": "http://localhost:3845/assets/f41ac4b115a7f20dbf48f76931b2254279703eb6.png",
    "card-img-3.png": "http://localhost:3845/assets/36a3cfd43908a3c05d12cacb942ed0d4039f2c4b.png",
    "card-img-4.png": "http://localhost:3845/assets/8a3d9ed8e0847689b66496a104067d95aafac478.png",
    "card-img-5.png": "http://localhost:3845/assets/6a2626d97defd8c015833ed80c7ddccae12ce9bc.png",
    "card-img-6.png": "http://localhost:3845/assets/5c94f2cde8fb31347bfafcc65fc67caccd30001b.png",
    "card-img-7.png": "http://localhost:3845/assets/74bfa95f77a625beb9342a6cba4a51489fa705c0.png"
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
