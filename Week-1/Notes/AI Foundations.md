# AI Foundations, History & Terminologies
1. Understanding intelligence
2. Artificial Intelligence
3. Computation vs intelligence
4. How LLMs Work


# 1. Understanding Intelligence
- Intelligence is problem-solving power.
- A system is intelligent when it can recieve info, understand what matter,s learn from past patterns, and choose actions that help it reach a goal. It is not just memorizing facts - it is using info in a useful way.
15:00

## How intelligence works
1. Observe
- take in info from the envt: text, sound, images or events

2. Understand
- find meaning and patterns inside messy real-world info.

3. Learn
- Improve future decisions by using past experiences or data.

4. Decide
- Select that best action based on the goal and available info.

5. Act
- Produce an answer, recommendation, mov't, classification, or plan.


## Intelligence
### 1. Natural Intelligence
- is the intelligence found in humans and animals.
- developed through biology and survival
- it combines logic, memory, emotion, senses, creativity and social understanding - so people can feel, notice tone, learn from mistakes and make judgements with incomplete info

### 2. Artificial Intelligence
- is the simulation of intelligent behavior by machines. 
- Instead of biological neurons, it uses data, algorithms, statistical patterns, and mathematical models.
- It doesnt think exactly like a human brain, but it can understand language, recognize faces, generate code, summarize documents, recommend content and answer questions
EG: GitHub Copilot or Cursor reads your comments and code context to suggest the next lines. They learn patterns from huge datasets - not from one developer's memory alone.


### 3. Computation vs intelligence
- A calculator can multiply huge numbers faster than any human, but it cannot understand a joke.
- Computation is speed and rules;
- intelligence uses context, patterns, language, perception, or judgement.
AI is the bridge that lets computers do more human-like tasks.

EG: fast calculation is not the same as understandiing meaning. AI tries to bridge that gap


---
 
### Natural vs artificial intelligence

**Physical basis**: 
    - NI
        - brain, nerves, senses, hormones and body
    - AI
        - sw, hw, data, algorithm and mathematical weights

**Learning source**:
    - NI
        - experiences, teaching, imitation, feedback, survival
    - AI
        - Training data, examples, optimization, feedback and prompts

**Strength**:
    - NI
        - Common sense, flexibility, emotion, social reasoning
    - AI
        - Speed, scale, pattern recognition, memory over huge datasets

**Weakness**:
    - NI - slow calculation, bias, fatigue, limited memory
    - AI - can hallucinate, lacks lived experince, depends on data and context

**Example**
    - NI - a chief adjusting a reciipe by taste
    - AI - a recommendation engine predicting what movie you may like.


### Intelligence is more than knowledge
- a person can memorize many facts but still struggle to solve new problems.
- Real intelligence involves adapting.
    - if ur locked out of ur house, u dont solve the problem by reciting facts about doors. u look around, notice an open window, find a ladder, judge whether its safe and choose a plan
    - That process of connecting clues is intelligence

#### Everyday examples of AI
- Recommendation engines
- Spam filters
- Navigation apps
- Code assistants
- Customer support bots
- Search and discovery


## Computation to intelligence spectrum
Calculator => Spam filter => LLM => AGI
Exact arithmetic => Pattern detection => Language generation => General Intelligence (human =-level flexibility )

---

# 2. Brief History of AI
- AI didnot appeaar suddenly. The field moved through early experiments, expert systems, winters, deep learning breakthroughs, transformers, and today's generative AI wave.

**Rules and Symbols**
1950s
- Alan Turing asked if machines can think. The 1956 Dartmouth Conference named the field Artificial Intelligence.
- Early AI used hand-written rules and logic.

Turing test
- to evaluate whether a computer can exhibit human-like reasoning and conversation

**Setbacks and narrow wins**
1970s-90s
- Progress was slower than promised, so funding dropped __ AI winters.
- some rule-based expert systems still worked in narrow jobs like medicine and configuration.

**Computer beats world chess champion**
1997
- IBM's Deep Blue defeated Garry Kasparov, the reigning world chess champion -- the first time a computer beat a human at that level in chess.

**Learn from data**
200s-2010s
- Neural networks learned patterns from examples. More internet data and GPUs made training faster.
- Wins like AlexNet (2012) and AlphaGo(2016) showed deep learning could work.

**Transformers and LLMs**
2017+
- The Transformer architecture (2017) helped models handle language at scale. GPT and other LLMs followed- the "T" in GPT means Transformer.


**Apps and APIs for everyone**
2022+
- ChatGPT made AI easy for everyday users. Developers now add AI through API, copilots and apps-what this course is about.


### Same path at a glance
Rules and symbols => Learn from data => More data (+GPUs) => Transformers (+LLMs) => Apps and APIs (for everyone)


### Key takeaway:
Modern AI works best when data, fast hardware (GPUs) and strong model designs (like Transformers) come together.

#### Why GPUs matter
- A CPU is strong for general- purpose tasks that often run step by step.
- A GPU is designed for parallel processing, meaning it can perform many calculations at the same time.
    - Neural networks need huge numbers of repeated matrix and tensor calculations, so GPUs are much faster for training and inference.

#### Why data matters
- ML needs examples. More examples help the system learn richer patterns.
- The internet, mobile apps, cloud storage, and digital services create the large datasets that modern AI systems use to learn language, images, code, speed and behavior.




---

# 3. AI Types & Key Concepts
- AI contains ML, ML contains Deep Learning, and Deep Learning powers much of Generative AI.

1. AI - field of study that encompasses any syste, that can [perform tasks] that require **human intelligence**
    1.1 ML - branch of AI that focuses on building systems that can [learn from] and make decisions based on **data**
        1.1.1 DL (Deep Learning) - subset of ML that focuses on using neural networks with many layers to **automatically learn complex pattern** in large datasets.
            1.1.1.1 Gen AI (Generative AI) - branch of DL, focuses on building systems that can **create new data**, enabling the generation of text, images, audio or video.

## Keyewords
- AI
    - The broad umbrella: any technique that makes computers behave in a way that seems intelligent, including rule-based systems and learning systems.
    - A simple chess program with fixed rules can be AI, and a modern chatbot can also be AI.

- ML
    - A way of building Ai where the system learns rules from examples instead of having every rule written manually by a programmer.
    - The developer provides data; the model discovers patterns inside that data.

- DL
    - ML using neural networks with many layers.
    - its especially strong for images, speech, text, video and other complex data because it can learn features that are hard for humans to define by hand.

- Generative AI
    - AI that creates new contents such as text, code, images, audio or video based on patterns learned during training.
    - Instead of only answering "Is this a cat?", it can generate a new cat image or write a new paragraph.

- Model
    - The trained result. In practical developer terms, it is the learned weights and behavior produced after training.
    - You can use a model locally or access it through a hosted service.

- Interface
    - Using a trained model on new input.
    - When a student answers a new math question after studying, that is the analogy for inference: the learning already happened, and now the knowledge is being used.



## Levels of Intelligence
**ANI** (Artificial Narrow Intelligence)
- A specialist system. It can be excellent at a specific task, such ass recommendation, translation, routing or coding assistance, but it does not possess general human understanding.


**AGI** (Artificial General Intelligence)
- A theoretical system that could perform broadly across intellectual tasks like a human: reasoning, planning, learning new skills, and adpting to unfamiliar situation.


**Foundation models** (Foundation Models)
- Large, general purpose models trained on broad datasets. LLMs process language and code; vision models process image and video; multimodal models handle multiple input types.


## Neural Networks: the deep learning idea
- A human brain contains billions of connected neurons. When we hear a sound, see an image, or touch something, groups of neurons activate and pass signals forward. Deep Learning borrows this idea in a simplified mathematical way.

- An artificial neural network contains connected layers of small calculation units. Each layer transforms the input slightly.
- With enough data and training, the network learn useful patterns for tasks such as image recognition, speech recognition, and language generation.

MCP - model context protocol
    - open standard created by Anthropic (and hosted under the Linux Foundation's Agentic AI Foundation) that standardizes how AI applications and agents connect to external data sources, tools, and development environments.

    - "USB-C port for AI applications"—instead of developers writing custom integrations for every single AI model and data source combination (the N * M$ integration problem), MCP provides a universal framework. 



---

# 4. How LLMs Work
- LLMs are very large neural networks trained on text and code. Their core behavior is **NEXT-TOKEN PREDICTION**:
    - given some text, predict the most likely piece of text.


## The next-token idea
- A token is A SMALL PIECE OF TEXT:
    - a word
    - part of a word
    - punctuation
    - spacing
- The model predicts one token, appends it to the text, then predicts the next token. Repeating this process creates a full response.

1. Prompt
    - user provides text, code or question
2. Tokenize
    - The text is split into smaller pieces called tokens
3. Predict
    - The model calculates likely next tokens.
4. Append
    - One token is chosen and added to the response
5. Repeat
    - the process repeats until the answer is complete.

Eg.: The capital of France is....
        Paris --- 99%
    function add (a, b) {return
        a + b --- 60%
        a * b --- 20%...

    the model chooses likely text based on the context already provided

---
## Token visualizer
This demo splits text roughly for practice.
- Real models use SUB WORD TOKENIZERS- So words like [unbelievable] may become pieces such as 
    - un
    - believ
    - able, not always one token per word

```ChatGPT tokenizes text into subword pieces-- You can use the tool below to understand how pieces of text might be tokenized by a language mode, and the total count of tokens in that piece of text.```

Use this to check the no of tokens  
    `platform.openai.com/tokenizer`

the above text has:
    - 196 characters
    - 43 tokens

## Temperature
- Temperature controls RANDOMNESS.
- Low values are better for code, facts, and structured output.
- Higher values are better for brainstorming and creative writing.

- Try the same prompt at different temperatures in 
    - GoogleAI Studio (Gemini playground) - open Playground, adjust temperature in the settings, and compare outputs.
        `https://aistudio.google.com/prompts/new_chat`

0.7 is the ballance


# Developer Vocabulary
**Tokenization**
- is the process of breaking text into smaller units before the model reads it.
- A token can be a word, part of a word, punctuation, or spacing.


**Language Model**
- A language model is a probablistic model that predicts language.
- Modern LLM use this idea at a massive scale to generate paragraphs, code, and explanations.


**Transformer**
- A Transformer is a neural network architecture that uses ATTENTION to understand RELATIONSHIPS between words or tokens, even when they are far apart in the input.


**Attention mechanism**
- Attention lets the model focus on the most relevant parts of the input when producing the next token.
- It is one reason modern LLMs handle context better than older approaches.


**Context Window**
- The maximum amount of text the model can see at one time, including the prompt and response.
- Think of it as a limited whiteboard. If the conversation or document is too long, the model cannot use everything.


**Hallucination**
- A confident-sounding answer that is wrong or invented. 
- This happens because the model generates likely text, not guaranteed truth.
- A model can sound fluent even when it is mistaken. 


**Verification**
- Always test AI-generated code, verify package names, and check important claims. 
- AI should accelerate thinking, not replace judgement.

**Important** - LLMs dont automatically know whether every sentence they generate is true.
    - For code, facts, legal, medical or high-impact decisions, the output must be checked by tests, documentation, or a knowledgeable person.

