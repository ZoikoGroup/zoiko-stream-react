const fs = require('fs');
const http = require('http');
const path = require('path');

const assets = [
  { url: "http://localhost:3845/assets/a3ca8435a2bf6deb4dc658d757b77a299c403f8f.png", name: "hero-bg.png" },
  { url: "http://localhost:3845/assets/4e7d5d130da36d0e0ec1d106c262513664cb3de1.png", name: "sec2-bg.png" },
  { url: "http://localhost:3845/assets/3d544f56290784e8dfa07d790d4efe93e1d84d1e.png", name: "sec3-bg.png" },
  { url: "http://localhost:3845/assets/84141096123f1c575ac00a5eba529047f44908b0.png", name: "sec4-bg.png" },
  { url: "http://localhost:3845/assets/a404ba67075af28bbb68c01fad1667c23cd52d72.png", name: "sec5-bg.png" },
  { url: "http://localhost:3845/assets/c715e2614e2f872bfe8130ba6244a1775afdd0d1.png", name: "sec6-bg.png" },
  { url: "http://localhost:3845/assets/bd408b5f9a15399047af09dabed6a9f8f2a4fd2d.png", name: "sec8-bg.png" },
  { url: "http://localhost:3845/assets/660d54eba13e0c8fe21bbac6aa4fa31effd72201.png", name: "sec9-bg.png" },
  // Cards
  { url: "http://localhost:3845/assets/0c5b51280e03191781e1f4dc7c86167bec927157.png", name: "alt-html.png" },
  { url: "http://localhost:3845/assets/839c034cefb1d4bec4cace55a39c68f44420f3ab.png", name: "alt-transcript.png" },
  { url: "http://localhost:3845/assets/caf868a0a9ceb4df171d41aed4f2de311145ac96.png", name: "alt-keyboard.png" },
  { url: "http://localhost:3845/assets/a104f953eccd20e3727d8ff0603a701914e32f3d.png", name: "alt-text.png" },
  { url: "http://localhost:3845/assets/d77c3754be17fa59a7f17ee35c213b6d504feebf.png", name: "alt-doc.png" },
  { url: "http://localhost:3845/assets/a11aa560c45f1ea52dd258bfa96ef47eddd033d9.png", name: "alt-contact.png" },
  { url: "http://localhost:3845/assets/67efe55ba20856ea42ed226c87f093d945ac4736.png", name: "pref-email.png" },
  { url: "http://localhost:3845/assets/fd5f54e167825f2ee998a6c09eb782daac395501.png", name: "pref-chat.png" },
  { url: "http://localhost:3845/assets/3292773a55d521a572e808c9cd3e0d40be4bd8bf.png", name: "pref-call.png" },
];

const downloadDir = path.join(__dirname, 'public', 'images', 'support-accessibility-help');

assets.forEach(({ url, name }) => {
  const filePath = path.join(downloadDir, name);
  http.get(url, (res) => {
    const file = fs.createWriteStream(filePath);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded', name);
    });
  }).on('error', (err) => {
    console.error('Error downloading', name, err.message);
  });
});
