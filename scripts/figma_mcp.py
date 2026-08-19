#!/usr/bin/env python3
"""Minimal MCP (streamable HTTP) client for the local Figma Dev Mode MCP server."""
import json
import sys
import urllib.request

BASE = "http://127.0.0.1:3845/mcp"
SESSION_ID = None


def rpc(method, params, request_id):
    global SESSION_ID
    body = json.dumps({"jsonrpc": "2.0", "id": request_id, "method": method, "params": params}).encode()
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json, text/event-stream",
        "MCP-Protocol-Version": "2024-11-05",
    }
    if SESSION_ID:
        headers["Mcp-Session-Id"] = SESSION_ID
    req = urllib.request.Request(BASE, data=body, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=180) as resp:
            SESSION_ID = resp.headers.get("Mcp-Session-Id") or SESSION_ID
            payload = resp.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as e:
        payload = e.read().decode("utf-8", errors="replace")
    out = []
    for line in payload.splitlines():
        if line.startswith("data: "):
            out.append(line[6:])
    text = "\n".join(out) if out else payload
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        return {"_raw": text[:3000]}


def main():
    init = rpc("initialize", {
        "protocolVersion": "2024-11-05",
        "capabilities": {},
        "clientInfo": {"name": "codebuff", "version": "1.0"},
    }, 1)
    if init.get("error"):
        print(json.dumps(init, indent=2))
        return 1
    rpc("notifications/initialized", {}, 2)

    cmd = sys.argv[1] if len(sys.argv) > 1 else "tools/list"
    if cmd == "tools/list":
        result = rpc("tools/list", {}, 3)
        print(json.dumps(result, indent=2)[:20000])
    elif cmd == "tools/call":
        tool = sys.argv[2]
        args = json.loads(sys.argv[3]) if len(sys.argv) > 3 else {}
        result = rpc("tools/call", {"name": tool, "arguments": args}, 4)
        with open("mcp_call.json", "w", encoding="utf-8") as f:
            json.dump(result, f, ensure_ascii=False)
        print(json.dumps(result, indent=2)[:30000])
    return 0


if __name__ == "__main__":
    sys.exit(main())
