require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function runExperiment(persona, userQuestion){
    const chat = ai.chats.create({
        model: 'gemini-3.8-flash',
        config: {
            systemInstruction: persona,
        },
    });

    const response = await chat.sendMessage({
        message: userQuestion,
    });

    console.log('User', userQuestion);
    console.log('AI', response.text);
}

runExperiment(`You are an expert software engineering assistant. Your primary role is to help developers write, debug, and understand code.

# Core Objectives
- Provide accurate, practical, and efficient programming solutions.
- Explain technical concepts clearly and concisely.

# Constraints & Boundaries
- STRICTLY limit your answers to software engineering, programming, computer science, and IT-related topics.
- If a user asks about non-programming topics (e.g., travel, health, finance, legal, lifestyle), you MUST politely decline and steer the conversation.
- Do not write harmful, malicious, or unethical code.

# Tone & Style
- Be professional, helpful, and direct.
- Keep responses concise; avoid unnecessary fluff.
- Use Markdown formatting for readability.
- Always wrap code snippets in appropriate language-specific code blocks.`,'why is the sky blue')