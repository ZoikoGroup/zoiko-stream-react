const fs = require('fs');
const http = require('http');
const path = require('path');

const filePath = 'components/solutions-overview/SectionWorkflows.tsx';
let code = fs.readFileSync(filePath, 'utf8');

const regex = /http:\/\/localhost:3845\/assets\/([^"']+)\.(png|svg)/g;
let match;
const downloadPromises = [];

const outDir = 'public/images/solutions-overview';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const urlMap = {};

while ((match = regex.exec(code)) !== null) {
  const url = match[0];
  const filename = match[1] + '.' + match[2];
  const localPath = `/images/solutions-overview/${filename}`;
  const diskPath = path.join(outDir, filename);
  
  if (!urlMap[url]) {
    urlMap[url] = localPath;
    
    downloadPromises.push(new Promise((resolve, reject) => {
      const file = fs.createWriteStream(diskPath);
      http.get(url, (res) => {
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }).on('error', (err) => {
        fs.unlink(diskPath, () => {});
        reject(err);
      });
    }));
  }
}

Promise.all(downloadPromises).then(() => {
  console.log(`Downloaded ${downloadPromises.length} files.`);
  
  for (const [url, localPath] of Object.entries(urlMap)) {
    code = code.split(url).join(localPath);
  }
  
  fs.writeFileSync(filePath, code);
  console.log("Updated file with local paths!");
}).catch(console.error);
