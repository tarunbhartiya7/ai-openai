import { config } from "dotenv";
import readline from "readline";
import OpenAI from "openai";

config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();
userInterface.on("line", async (input) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: input }],
    model: "gpt-4o-mini",
  });

  console.log(completion.choices[0].message.content);
  userInterface.prompt();
});
