---
layout: base.njk
title: Run LLMs Locally
---

# Run LLMs Locally

For those who want privacy, offline access, or just the satisfaction of running your own AI. We'll walk you through setting up Ollama, llama.cpp, or similar tools.

## Why Run AI Locally?

When you use Claude, ChatGPT, or other cloud AI:
- Your conversations go to a server
- You need an internet connection
- There are usage limits
- The service could change or disappear

Running AI locally means:
- Complete privacy: nothing leaves your computer
- Offline access: use AI without internet
- No limits: run as many queries as you want
- Learning: understand how these systems actually work

## What You'll Need

### Hardware Requirements

**Minimum (for small models):**
- 8GB RAM
- Any modern CPU
- Works on most laptops from the last 5 years

**Recommended (for better models):**
- 16GB+ RAM
- Modern CPU with good single-thread performance
- SSD for storage

**For best results:**
- 32GB+ RAM, or
- A gaming GPU with 8GB+ VRAM (NVIDIA works best)

Don't have powerful hardware? Start with smaller models. They're surprisingly capable.

## The Easiest Path: Ollama

Ollama is the simplest way to run AI locally. It handles all the technical details.

### Installing Ollama

**Mac:**
1. Go to [ollama.ai](https://ollama.ai)
2. Download the Mac app
3. Install and run it

**Windows:**
1. Go to [ollama.ai](https://ollama.ai)
2. Download the Windows installer
3. Run the installer

**Linux:**
```
curl -fsSL https://ollama.ai/install.sh | sh
```

### Your First Local Model

Open a terminal (Command Prompt on Windows, Terminal on Mac) and type:

```
ollama run llama3.2
```

Ollama will download the model (a few GB) and start it. Then you can chat:

```
>>> Hello! What can you help me with?
```

That's it. You're running AI on your own computer.

### Popular Models to Try

| Model | Size | Good For |
|-------|------|----------|
| llama3.2 | 2GB | General chat, fast responses |
| llama3.1:8b | 4.5GB | Better quality, still fast |
| mistral | 4GB | Concise, efficient responses |
| codellama | 4GB | Programming help |
| phi3 | 2GB | Lightweight, good for testing |

Try different models:
```
ollama run mistral
ollama run codellama
```

### Managing Models

**List installed models:**
```
ollama list
```

**Remove a model:**
```
ollama rm modelname
```

**Pull a model without running:**
```
ollama pull modelname
```

## Using a Chat Interface

The command line works, but you might want a nicer interface.

### Open WebUI

A beautiful web interface for Ollama:

1. Make sure Ollama is running
2. Install Docker Desktop ([docker.com](https://docker.com))
3. Run:
```
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui ghcr.io/open-webui/open-webui:main
```
4. Open your browser to `http://localhost:3000`

Now you have a ChatGPT-like interface for your local models.

### Other Options

- **LM Studio** ([lmstudio.ai](https://lmstudio.ai)) - Standalone app with nice UI
- **GPT4All** ([gpt4all.io](https://gpt4all.io)) - Simple desktop app
- **Jan** ([jan.ai](https://jan.ai)) - Clean, modern interface

## Understanding Model Sizes

Models come in different sizes, measured in parameters (billions):

- **1-3B parameters:** Fast, runs on anything, limited capability
- **7-8B parameters:** Good balance, needs decent RAM
- **13B parameters:** Better quality, needs 16GB+ RAM
- **70B parameters:** Near cloud-quality, needs 64GB+ RAM or good GPU

For most people, 7-8B models are the sweet spot.

## What Local AI Can Do

**Works well:**
- General conversation
- Writing help
- Code assistance
- Brainstorming
- Summarization
- Simple analysis

**Limitations:**
- No internet access
- No image generation (usually)
- Smaller knowledge base than cloud models
- Slower than cloud (usually)
- Can't match GPT-4 quality (yet)

## Privacy Considerations

Local AI is truly private:
- Conversations never leave your computer
- No logging by companies
- No training on your data
- No one knows what you're asking

This matters for:
- Sensitive business information
- Personal matters
- Journaling or therapy-like conversations
- Anything you wouldn't want stored

## Troubleshooting

**"Not enough memory"**
Try a smaller model, or close other applications.

**"Model downloads slowly"**
Models are large. Be patient, or download during off-hours.

**"Responses are slow"**
Normal for larger models. Try a smaller model, or consider a GPU upgrade.

**"Ollama won't start"**
Make sure you don't have another instance running. Restart your computer.

## Going Deeper

### Custom System Prompts
Create specialized versions of models:

```
ollama create myassistant -f ./Modelfile
```

Where `Modelfile` contains your customization.

### API Access
Ollama provides an API at `localhost:11434`:

```
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Hello!"
}'
```

Use this to integrate local AI into scripts or applications.

### Fine-tuning
For the truly ambitious: train models on your own data. This requires significant technical knowledge and hardware.

## Comparison to Cloud AI

| Aspect | Local | Cloud |
|--------|-------|-------|
| Privacy | Complete | Limited |
| Cost | Free after setup | Subscription/usage |
| Quality | Good, not best | State-of-the-art |
| Speed | Depends on hardware | Fast |
| Offline | Yes | No |
| Updates | Manual | Automatic |

Many people use both: cloud AI for best quality, local AI for privacy-sensitive tasks.

## Next Steps

Want to use AI for a major creative project? Try [Write a Book with AI](/projects/write-a-book/) for an ambitious undertaking.

Or explore [Build a Course Curriculum](/projects/curriculum-builder/) to design your own learning path.

Or browse all [Projects](/projects/).
