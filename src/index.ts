#!/usr/bin/env node

import {MCPServer} from "@la-rebelion/mcp-server";
import { EchoTool } from "./EchoTool.js";

const myServer = new MCPServer('My MCP Server', '1.0.0');

async function main() {
  // Register tools
  myServer.registerTool("echo", new EchoTool());
  await myServer.run();
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});