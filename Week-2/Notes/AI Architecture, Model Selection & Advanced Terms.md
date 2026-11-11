# AI Architecture
Topics
1. AI App Anatomy
2. Core Terminology
3. Model Controls (Knobs)
4. Model Selection
5. Prompt Engineering & Review

---
# 1. AI App Anatomy
- Unlike traditional web apps that execute static, deterministic code, AI-Powered apps operate on a probablistic mode.
- They require 
    - orchestration layer
    - memory databases and
    - structured prompt pipelines to make LLMs behave predictably


## How it all fits together
- To build AI feature, you dont just write HTML and connect it directly to an API.
- AI apps follow a standard multi-tiered architecture that separates the UI, backend orchestration, data persistence, and foundational models.

### AI Application Request Flow
- The user interacts with the frontend, 
    - the backend coordinates business logic,
        - the model generates output, and 
        - the memory layer stores and retrieves context.

Frontend
(Presentation Layer) React/Vite
|
Backend Orchestrator
(Application Layer) Node.js/Express
/
LLM API                                 
(Model Layer)Open AI/Gemini             
\ &
Memory Store
(Memory Layer) SQL/Vector DB


---
### The Brain (LLM API)
- External models like Gemini, GPT-4, or Claude provide the intelligence.

Limitation:
    - They are stateless and have "amnesia". They dont know who your user are and only respond to the exact text payload you send.

### The Orchestrator (Backend)
- Your Node.js/Express server is the brain of your application logic.

Duties:
    - It checks user authentication, pulls past chat history, builds the final prompt, handles API keys, and formats the LLM's response.

### The Memory (Database)
- Systems like MySQL or Postgre SQL store chronological chat history, while **Vector Databases** store semantic knowledge as embeddings.

Why it matters:
    - because the LLM forgets everything, the backend must query the database to assemble past messages (or retrieve relevant knowledge), and feed them into the prompt.


So now we understand how the main parts of an AI app work together:
    the front end
    backend
    db and 
    LLM
The next question is: what is happening inside the mode, and what core terminology do we need to understand?



---
# 2. Core Terminology
- we start with the basic ideas behind intelligence and AI models.
- it moves from human brain to neurons and parameters, to training and next-token prediction, and then into the core terminology used in AI systems.

## 2.1 From Human from to AI Models
- AI models are build with connected neurons, similar in spirit to how brain neurons pass signals.
- in sw, a neuron is just a small math function.
- A **neural network** is many of these neurons connected in layers.
- The model learns by adjusting its weights and biases, and the total number of those learned values is the model's **parameter count**.

**Human Brain Neurons**
- hello there how are you => neurons => doing great, How about you?

**How this Relates to AI**
- AI neurons are not real brain cells, but they copy one important idea: information moves through connected units.
- each AI neuron received inputs, gives different importance to each input, adds a small adjustment, and sends the result to the next layer
- The model uses **weights** to decide how much each input matters.
- it uses **bias** as one extra value to adjust the final result.

    - Leaned weight: decides how strongly one input affects the output.
        - a bigger weight means that input has more effect.

    - Learned biasL is one extra number added at the end.
        - it helps shift the result up or down.

    - Why "Learned"? the model starts with random values.
        - During training, it adjusts them step by step so the output becomes better.

Human brain: signals move between neurons.
AI model: numbers move between neurons

## 2.2 Neurons, Neural Networks, and Parameters
- One [neuron] is a small math unit. A [neural network] is mmany neurons connected in layers.
- The values the model learns inside those connections are called [parameters].



## 2.3 Training the Model
- Training is the long learning phase where the model reads huge amnt of text, code and other data, then adjusts its weights and biases again and again ultil its predictions improve

### What Training Means
- training is not normal app usage, it is one-time process of building the model's knowledge patterns.
- A simple analogy is:
    training = years of medical school,
    inference = the doctor's short diagnosis

During training, the model is not memorizing one answer. It is learning statistical patterns across a very large dataset.

### Time, Data and Cost
- Frontier models are trained on massive datasets, often using large collections of web pages, books, articles and code.
- Training can take weeks or months on many GPUs running in parallel
Example fact: training a frontier model can cost [tens or even hundreds of millions of dollars]

**As a full-stakc dev, we usually dont train the mode. We use a model thats already trained and pay for [inference] when we send requests.


## 2.4 How a Trained Model Works
- After trianing is finished, the model generates text by predicting ht enxt token.
- it adds one token, then uses the new text to predict the next one, and repeats this process until it stops.

### Next-Token Prediction
- the model reads the prompt and estimates which token is most likely to come next.
- that new token is added to the text. Then the model predicts the next token again.
- this happens iteratively, one token at a time, until the answer is complete.

### Token Vocabulary
- a model doesnt think in full sentences. It works with tokens from its vocabulary.
- a token can be a whole word, part of a word, punctuation or a number, even a symbol.
Example fact: many modern models use vocabularies with tens of thousands to hundreds of thousands of tokens.


## 2.5 Core Terminology
- with that foundation in place, the main AI terms become easier to read: parameters, tokens, inference, latency, throughput, and context window.

**Parameters (Brain Size)**
- Parameters are the learned numbers inside the network.
- A model with more parameters usually has more capacity, but it also needs more compute and more money to run.

**Tokens (the cost of words)**
- AI pricing is often based on tokens, not on the request itself.
- A token can be a whole word, part of a word, or a symbol.

    Input tokens: what the user sends
    Output tokens: what the model sends back


**Inference (The thinking Time)**
Training: the long learning phase.
Inference: the moment the model uses what it learned to generate an answer for the current request.

- In real application, this is the part developers pay for every time users send prompts.

**Latency vs Throughtput**
Latency: how long one user waits before the answer starts.
Throughput: how much total work the system can handle in a given time.


**Context Window (Memory Limit)**
- is the maximum amnt of text the model can handle in one request.
- if the ocnversation gets too long, older content must be removed so new content can fit.

Analogy: its like writing on a small whiteboard. When the board is full, the olderst lines must be erased first.



---

# 3. Model Controls (Knobs)

## Randomness Control
- after the model scores possible next tokens, these settings change how it chooses from that list.
- They help you make the answer more predictable, more balanced, or more creative.

**Important**: these settings dont retiain the model and do not change its parameters. 
- They only affect how the model picks the next token during generation.

randomness control
    - temperature
    - Top P
    - Top K


### Temperature
- changed how spread out the probablities become. a low value keeps th emodel close to the safest answer. A high value flattens the probablities, so lower-probablity words get a letter change.

Eg: "I went for fishing to the..."
    low temp: lakem river
     high temp: bucket, volcano

### Top P
- keeps the smallest set of words whose total probablity reaches the chosen value (p)

Eg; the Top-P = 0.7, the model keeps adding the highest words until the running total reaches about 0.7. 

### Top K
- keps only the top k most likely words. it doesnt care abt the total probablity.
- it only cares about how many words stay in the candidate list.

Eg; if Top-k=5, only the first five words stay. Everything below rank five is removed, even if its probablity is still reasonable.

# 4. Model Selection

## i. Parameter size

## ii. Context Window

## iii. Modality
    text only
    multi modal
## iv. Capability
    coding
    creativity writing
    speed
## v. Pricing


- we have 2 options for models
    - Option A: Proprietary Models
    - Option B: Open-Source Models (Advanced)


# 5. Prompt Engineering & Review

1. Zero-Shot Prompting
    - you ask the model to do a taks directly without giving examples.
    - its simple, but its not always the most reliable choice.

2. Few-Shot Prompting
    - instead of only explaining the rule, you show a few examples and let the model continue the pattern.

3. Chain of Thought
    - You ask the model to solve the problem in steps before giving the final answer.
    - this often helps for math and logic tasks.

4. System Prompts
    - A hidden instruction that sets the role, rules, and output before the real conversation starts.

5. Other Techniques
    - developers also use structured output, retrieval grounding, self-checking, and delimiters for more reliable AI apps.

---
## 1. Zero-Shot Prompting
- whats OOP

vs

- explain OOP (object oriented programming) in js to a begineer in 3 short bullet points.
- include what an object is and the difference between properties and methods.
 


## 2. Few-Shot Prompting
- classify push and pop

vs

- classify each Array method by its action: Add, Remove, or Iterate
Method: push() -> Add
Method: pop() -> Remove
Method: forEach() -> Iterate
Method: unshift() ->



## 3. Chain of Thought
how do functions work?

vs

- think step-by-stepp to explain how js function works?
first, explain how to declare it.
Second, explain the d/ce between parameters and arguments.
Third, explain how to invoke it.
Finally, explain what the return keyword does.



## 4. System Prompts
Teach me about functions.

vs

[system]
You are a strict JavaScript tutor.
When asked a question about functions or conditional statements, do not give the direct answer.
Instead, ask a guiding question to help the student figure out the concepts on their own.

[User]
I dont understand how the return keyword works in a function. Can you explain it?


## 5. Other Techniques
List the DOM selection methods from the text as JSON:
"Use getElementById for one element, or querySelectorAll for multiple."

vs

You are a data extractor. Extract the DOM selection methods and output ONLY valid JSON.
Use this format: {"methods": [{'name': 'methodName', 'type':'single|multiple"}]}

Text:
"Use getElementById for one element, or querySelectorAll for multiple"

---
what are the 3 states of a Promise

vs

Answer the question using ONLY the provided course notes.
If the answer is not in the notes, reply "I cant find the answer"

Course Notes:
1. Pending: initial state
2. Fulfilled: operation successful
3. Rejected: Operation failed
Question: what are the 3 states of a Promise


In General:
- a good prompt usually answers these questions:
    - whats the task?
    - what rules should the model follow?
    - what output format do you want?
    - what examples or steps will help?




---
Giving AI a Memory - Building Your First Chatbot Demo
Goal
- Focus on Node.js talking to Gemini (no React) no MySQL yet
- see why chat needs history, system prompts, streaming and temperature/topP.


1. The "Hello World" of AI (Stateless Request)
2. Solving Amnesia (Context Management)
3. The System Prompt
4. Streaming (the typewriter effect)
5. Controlling the Model (Temperature & Top-P)
6. The Group Task: Building the Full-Stack Chat Bot


---
- create api on google
- npm.js -> @google/genai package
    npm i @google/genai

`npm i dotenv` - to keep our api safe
add `.env` to ur .gitignore

add ur GEMINI_API_KEY with this variable to .env file.

# 1. The "Hello World" of AI (Stateless Request)
- Purpose: Call Gemini with 'generateContent' - one message in, one reply out.
- What happens: Two separate calls: "My name is Abe" thne "Whats my name?" The second call forgets Abe.
- Lesson: Each API call is stateless. The AI doesnt remember unless you send history. 



# 2. Solving Amnesia (Context Management)
- Demo: '2-context memory.js'

- Purpose: Show how a chatbot remembers.
- What happens: Use 'chats.create' + 'sendMessage' for two turns. On turn 2, the AI knows the name.
- Lesson: The SDK keeps a history array and sends the full conversation every time. We are the AI's memory.


# 3. The System Prompt
Demo: '3-system-prompt.js'

- Purpose: Change how the AI behaves without changing the user's question.
- What happens: ask the same question twice ("How do i center a div?").
    First run: helpful assistant -> explanation + code.
    Second run: "code CSS. Only 'System Instruction' changes.
- Lesson: Hidden instructions shape the product (lawyer AI, tutor AI, etc...)



# 4. Streaming (the typewriter effect)




# 5. Controlling the Model (Temperature & Top-P)




# 6. The Group Task: Building the Full-Stack Chat Bot




