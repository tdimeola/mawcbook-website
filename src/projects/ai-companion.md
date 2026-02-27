---
layout: base.njk
title: Build Your Own AI Companion
---

# Build Your Own AI Companion

Turn a stuffed animal, action figure, Barbie, G.I. Joe, or any beloved object into a talking AI companion. This project combines hardware tinkering with AI to create something personal, private, and entirely yours.

## Why Build Your Own?

Commercial AI companion apps exist, but they come with concerns:
- **Privacy**: Your conversations go to corporate servers
- **Cost**: Subscription fees add up
- **Control**: The company decides what the AI can say and do
- **Dependency**: The service can change or disappear

Building your own means:
- **Your data stays local** (if you use a local LLM)
- **One-time cost** for hardware
- **Full control** over personality and behavior
- **It's yours forever**

Plus, there's something magical about a physical object that talks back.

---

## What You'll Need

### Hardware (Basic Setup: ~$75-150)

- **Raspberry Pi 4 or 5** (~$35-80)
  - The brain of your companion
  - Pi 5 recommended for faster local AI, but Pi 4 works fine with cloud APIs

- **USB Microphone** (~$10-20)
  - Any basic USB mic works
  - Lapel mics are small and easy to hide inside a stuffed animal

- **Small Speaker** (~$10-20)
  - USB or 3.5mm audio jack
  - Look for compact speakers that fit inside your chosen object

- **MicroSD Card** (32GB+, ~$10)
  - For the Raspberry Pi operating system and software

- **Power Supply**
  - Official Raspberry Pi power supply recommended
  - Or a USB battery pack for portability

### The "Body"

Choose something meaningful:
- A childhood stuffed animal
- An action figure (drill a small hole for the speaker)
- A decorative object (lamp, sculpture, etc.)
- A custom 3D-printed enclosure
- Even a cardboard box decorated by a child

The only requirements: room for the speaker and microphone, and a way to run wires (or hide the Pi nearby).

### Software (Free)

- **Raspberry Pi OS** (free)
- **Speech-to-text**: Whisper (local) or cloud API
- **AI brain**:
  - Local: Ollama with a small model like Phi-3 or Mistral 7B
  - Cloud: Claude, ChatGPT, or other API (requires internet, small per-use cost)
- **Text-to-speech**: Piper (local) or cloud API

---

## Basic Architecture

```
[Microphone] → [Speech-to-Text] → [AI Model] → [Text-to-Speech] → [Speaker]
```

1. You speak into the microphone
2. Speech-to-text converts your words to text
3. The text goes to an AI model, which generates a response
4. Text-to-speech converts the response to audio
5. The speaker plays the response

All of this can run locally on the Pi, or you can use cloud services for better quality (with internet required).

---

## Step-by-Step Setup

### 1. Set Up Your Raspberry Pi

1. Download [Raspberry Pi Imager](https://www.raspberrypi.com/software/)
2. Flash Raspberry Pi OS to your SD card
3. Boot up, connect to WiFi, update the system:
   ```
   sudo apt update && sudo apt upgrade -y
   ```

### 2. Install Audio Dependencies

```bash
sudo apt install -y python3-pip portaudio19-dev python3-pyaudio
pip3 install sounddevice numpy
```

Test your microphone and speaker:
```bash
arecord -d 5 test.wav  # Record 5 seconds
aplay test.wav          # Play it back
```

### 3. Choose Your AI Setup

**Option A: Fully Local (Private, No Internet Needed)**

Install Ollama:
```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull phi3  # Small, fast model
```

Install Whisper for speech-to-text:
```bash
pip3 install openai-whisper
```

Install Piper for text-to-speech:
```bash
pip3 install piper-tts
```

**Option B: Cloud APIs (Better Quality, Requires Internet)**

Sign up for API keys:
- [OpenAI](https://platform.openai.com/) (for Whisper STT and ChatGPT)
- [Anthropic](https://console.anthropic.com/) (for Claude)
- [ElevenLabs](https://elevenlabs.io/) (for high-quality voices)

### 4. Write the Glue Code

A basic Python script that ties everything together:

```python
# companion.py - Basic structure
import sounddevice as sd
import numpy as np
# ... (full code available in our GitHub repository)

def listen():
    # Record audio from microphone
    pass

def transcribe(audio):
    # Convert speech to text
    pass

def think(text):
    # Send to AI, get response
    pass

def speak(text):
    # Convert text to speech, play it
    pass

# Main loop
while True:
    audio = listen()
    user_text = transcribe(audio)
    response = think(user_text)
    speak(response)
```

*(Full working code available in our GitHub repository — link coming soon)*

### 5. Customize the Personality

The magic is in the system prompt. Tell the AI who it is:

```
You are Whiskers, a wise and gentle stuffed cat who belongs to Emma.
You've been her companion since she was three years old. You speak
in a calm, reassuring voice. You remember your adventures together
and love hearing about her day. You occasionally purr when happy.
```

Or for a different vibe:

```
You are Commander Rex, a battle-worn action figure who has seen
things. You speak in short, tactical sentences. You're protective
of your owner and always ready for the next mission. You sometimes
mutter about "the old campaigns."
```

### 6. Assemble the Physical Companion

1. Find or create a cavity for the electronics
2. Position the microphone near where the "ear" would be
3. Position the speaker near the "mouth"
4. Run power cable discretely (or use battery pack)
5. Test and adjust volume levels

---

## Tips for Success

**Start simple.** Get it working with cloud APIs first, then move to local if you want privacy.

**Use a wake word.** Instead of always listening, have it activate on "Hey Whiskers" or similar. Saves processing power and feels more natural.

**Add memory.** Store conversation history in a text file so your companion remembers previous chats.

**Consider safety.** If children will use it, review the AI's responses. Local models can be fine-tuned to be more appropriate.

**Make it robust.** Add error handling so it responds gracefully when something goes wrong ("I didn't quite catch that, could you say it again?").

---

## Going Further

- **Add LED eyes** that light up when listening or speaking
- **Use a servo motor** so it can turn toward your voice
- **Build multiple companions** that can "talk" to each other
- **Create a web interface** to adjust personality settings
- **Add long-term memory** with a local database

---

## Resources

- [Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/)
- [Ollama](https://ollama.com/) — Easy local LLM hosting
- [Piper TTS](https://github.com/rhasspy/piper) — Fast local text-to-speech
- [OpenAI Whisper](https://github.com/openai/whisper) — Speech-to-text

---

## From the Book

This project is referenced in **Chapter 7: Finding Love in a Language Model**, which discusses the appeal and risks of AI companions. Building your own is a healthier alternative to commercial companion apps — you control the data, the personality, and the relationship.

It's also just really fun.

