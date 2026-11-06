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



# 4. Model Selection



# 5. Prompt Engineering & Review


