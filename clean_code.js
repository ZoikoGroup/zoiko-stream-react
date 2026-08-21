const fs = require('fs');
let code = fs.readFileSync('extracted_code.tsx', 'utf8');
code = code.replace(/ data-node-id="[^"]+"/g, '').replace(/ data-name="[^"]+"/g, '');
// Replace space grotesk and inter with project fonts
code = code.replace(/font-\['Space_Grotesk:Bold'\]/g, 'font-sora');
code = code.replace(/font-\['Inter:Regular'\]/g, 'font-inter');

// Add React import if missing
if (!code.includes("import React")) {
  code = "import React from 'react';\n" + code;
}

fs.writeFileSync('components/solutions-overview/SectionWorkflows.tsx', code);
console.log('Done!');
