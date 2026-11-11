require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
    console.log('Key loaded:', !!process.env.GEMINI_API_KEY);
    console.log('Sending request...');
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3.8-flash',
            contents: 'why is the sky blue',
        });
        console.log(response.text);
    } catch (err) {
        console.error('Request failed:', err.message);
    }
}

async function createChat() {
    const chat = ai.chats.create({
        model: 'gemini-3.8-flash',
    });

    const response = await chat.sendMessage({
        message: 'Hello, my name is Abe.',
    });
    console.log(response.text);
    console.log(response.usageMetadata);
}

createChat();

// run();