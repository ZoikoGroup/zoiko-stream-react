const fs = require('fs');
const data = JSON.parse(fs.readFileSync('design_code_2211_1050.txt', 'utf8'));
if (data.content && data.content.length > 0) {
  // Find the text block that starts with "```tsx"
  for (const block of data.content) {
    if (block.text && block.text.startsWith('```tsx')) {
      const code = block.text.replace(/```tsx\n/, '').replace(/```$/, '');
      fs.writeFileSync('extracted_code.tsx', code);
      console.log('Code extracted to extracted_code.tsx');
      break;
    }
  }
}
