require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run(params) {
  const response = await ai.models.generateContent({
    model: "gemini-3.8-flash",
    contents: "Hello, my name is Abe.",
  });

  console.log("User ", "Hello my name is Abe.");
  console.log("AI", response.text);

  const response2 = await ai.models.generateContent({
    model: "gemini-3.8-flash",
    contents: "What is my name?",
  });

  console.log("User", "What is my name?");
  console.log("AI", response2.text);
}

// run();

async function testChatHistory() {
  const chat = ai.chats.create({
    model: "gemini-3.8-flash",
  });

  const response = await chat.sendMessage({
    message: "Hello, my name is Abe.",
  });

  console.log("User", "Hello, my name is Abe.");
  console.log("AI", response.text);

  // const response2 = await chat.sendMessage({
  //     message: 'What is my name?'
  // })
  // console.log('User', 'What is my name?')
  // console.log('AI', response2.text);

  // const history = chat.getHistory()
  // console.log(history[1].parts);
}

async function testChatHistory2() {
  const chat = ai.chats.create({
    model: "gemini-3.8-flash",
    history: [
      { role: "user", parts: [{ text: "Hello, my name is Abe." }] },
      {
        role: "model",
        parts: [
          {
            text: "AO Hello Abe! It's nice to meet you. How can I help you today?",
          },
        ],
      },
    ],
  });

  const response2 = await chat.sendMessage({
    message: "What is my name?"
  });
  console.log("User", "What is my name?");
  console.log("AI", response2.text);

  const history = chat.getHistory();
  console.log(history[1].parts);
}

testChatHistory();
testChatHistory2();
