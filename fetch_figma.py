import sys
import subprocess
import json

args = json.dumps({"nodeId": "1655-892"})
subprocess.run(['python', 'scripts/figma_mcp.py', 'tools/call', 'get_design_context', args])
