const fs = require('fs');

async function main() {
  const res = await fetch('http://localhost:3000/resources-api-reference');
  const html = await res.text();
  const matches = [...html.matchAll(/href="([^"]+\.css)"/g)];
  for (const m of matches) {
    const cssRes = await fetch('http://localhost:3000' + m[1]);
    const css = await cssRes.text();
    console.log('File:', m[1]);
    console.log('Has col-span-9:', css.includes('col-span-9'));
    console.log('Has col-span-3:', css.includes('col-span-3'));
    console.log('Has grid-cols-12:', css.includes('grid-cols-12'));
  }
}

main().catch(console.error);
