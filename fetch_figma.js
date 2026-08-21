const { Client } = require("@modelcontextprotocol/sdk/client/index.js");
const { SSEClientTransport } = require("@modelcontextprotocol/sdk/client/sse.js");
const fs = require('fs');

async function main() {
  console.log("Connecting to MCP SSE server...");
  const transport = new SSEClientTransport(new URL("http://127.0.0.1:3845/sse"));
  const client = new Client({ name: "figma-fetcher", version: "1.0.0" }, { capabilities: {} });
  
  await client.connect(transport);
  console.log("Connected! Calling get_code...");

  const result = await client.callTool({
    name: "get_code",
    arguments: {
      nodeId: "2211:1050",
      framework: "react",
      styling: "tailwind"
    }
  });
  console.log("TOOL RESULT OK");
  fs.writeFileSync('design_code_2211_1050.txt', JSON.stringify(result, null, 2));
  process.exit(0);
}

main().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
