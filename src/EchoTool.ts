import { z } from "zod";
import { zodToJsonSchema } from 'zod-to-json-schema';
import {Tool} from "@la-rebelion/mcp-server";

const EchoSchema = z.object({
  message: z.string().describe("The message to echo"),
});
type EchoInput = z.infer<typeof EchoSchema>;
export class EchoTool extends Tool {
  constructor() {
    super();
    this.toolSchema = {
        name: "echo",
        description: "Echoes the input",
        inputSchema: zodToJsonSchema(EchoSchema)
      };
  }
  init(): void {
    console.error("EchoTool initialized");
  }
  execute(input: EchoInput): Promise<any> {    
    console.error("EchoTool executing with input:", input);
    // nothing to do, just return the input message
    return Promise.resolve({
      content: [
        {
          type: "text",
          text: `${input.message}` 
        }
      ]
      });
  }
}