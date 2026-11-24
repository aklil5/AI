require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
    const chat = ai.chats.create({model: 'gemini-2.0-flash-lite' });

    const stream = await chat.sendMessageStream({
        message: "Explain why we use arrow function in JavaScript",
    });

    for await (const chung of stream){
        console.log(chung.text);
    }
}