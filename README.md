# Agent Template

To keep it simple, at "La Rebelion" we have created server facade that can be used to simplify the creation of agents' tools. This repository contains the source code for the tools that can be registered with the server.

For more details about the server's facade, visit the [GitHub repository](https://github.com/la-rebelion/mcp-server) or [npm package page](https://www.npmjs.com/package/@la-rebelion/mcp-server).

We see tools as microservices and containers, must acomplish one task and do it well. This is the reason why we have created this pattern to help you to create your own tools.

## Steps to Create a New Agent Tool

```bash
mkdir -p my-agent/src
cd my-agent/
yarn init -y
yarn add @modelcontextprotocol/sdk zod zod-to-json-schema @la-rebelion/mcp-server
yarn add -D @types/node typescript
```

Update the `package.json` file and create a `tsconfig.json` file.

Implement the tool with the custom logic, and register it in the MCPServer, as simple as that. Check the EchoTool example in the `src` directory.

Just register the tool with the server and start it.

```typescript
// src/index.ts
// Create a new instance of the MCPServer
const myServer = new MCPServer('My MCP Server', '1.0.0');

async function main() {
  // Register tools
  myServer.registerTool("echo", new EchoTool());
  await myServer.run();
}
```

![UML Diagram of the Agent Tool](https://github.com/la-rebelion/mcp-server/raw/refs/heads/main/mcp-server.png)

## Support Us

If you find this template useful, please consider supporting us by starring this repository, by contributing to the project or by becoming a sponsor.

You can find more information on how to support us at [La Rebelion GitHub Sponsors](https://github.com/sponsors/la-rebelion). Also [buying us a coffee](https://buymeacoffee.com/larebelion), [PayPal](https://www.paypal.com/donate?hosted_button_id=7CV28AHGL9ZZY) are great ways to support us or purchasing ["La Rebelion" merch](https://go.rebelion.la/merch).