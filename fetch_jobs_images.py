import urllib.request
import os

images = {
    "jobs-bg.png": "http://localhost:3845/assets/bd408b5f9a15399047af09dabed6a9f8f2a4fd2d.png",
    "job-0.png": "http://localhost:3845/assets/e3573cf1db106a70907a736bc0d8e8fd5790a5e4.png",
    "job-1.png": "http://localhost:3845/assets/be7e8fbf2b0bf411ccd049197e76077e7979f6c6.png",
    "job-2.png": "http://localhost:3845/assets/f707c0cc8a9c49f7be3c756cf6bdee0b716f0ef1.png",
    "job-3.png": "http://localhost:3845/assets/7831e1ebcb798f0a2e79b35410e6403dd7703fca.png",
    "job-4.png": "http://localhost:3845/assets/c7030065e73adf1bb2cd2a239632d3f9c55b40f6.png",
    "job-5.png": "http://localhost:3845/assets/49f5fb2e7872514283da69d8932d2cdad06828f0.png"
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
