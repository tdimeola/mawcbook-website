---
layout: base.njk
title: Make Your Own Online Game
---

# Make Your Own Online Game

Use AI to help you design and build a simple web game, even if you've never written code. From concept to playable prototype.

## Yes, You Can Do This

Making a game used to require years of programming experience. Now, AI can write code for you, explain what it's doing, and help you fix problems. You provide the creativity; AI handles the technical details.

You won't build the next Minecraft, but you can absolutely create a playable game that runs in a web browser, and share it with friends.

## What You'll Need

- A text-based AI (Claude, ChatGPT, or similar)
- A code editor (we'll recommend free options)
- A web browser
- Patience and willingness to experiment

## Types of Games You Can Make

Start simple. These are achievable for beginners:

### Quiz or Trivia Game
Players answer questions, earn points, see their score. Good first project.

### Number Guessing Game
Computer picks a number, player guesses, gets hints (higher/lower).

### Simple Card Game
War, Memory/Concentration, or basic Blackjack.

### Text Adventure
Similar to the AI Dungeon Master project, but with predetermined paths.

### Clicker/Incremental Game
Click to earn points, spend points on upgrades. Surprisingly addictive.

### Simple Arcade Game
Snake, Pong, or a basic space shooter.

## Step 1: Choose Your First Game

For your first project, start with either:
- **Quiz game** (easiest, focuses on content)
- **Number guessing game** (simplest code, good for learning)

We'll use a quiz game as our example.

## Step 2: Design the Game

Before asking AI to write code, think through:
- What's the theme? (movie trivia, science facts, your favorite hobby)
- How many questions?
- How is scoring handled?
- What happens when the game ends?

Write this down. The clearer your vision, the better AI can help.

## Step 3: Set Up Your Environment

You'll need somewhere to write and run code. Free options:

**CodePen** ([codepen.io](https://codepen.io))
- Works in browser, no installation
- Perfect for beginners
- Can share your games easily

**Replit** ([replit.com](https://replit.com))
- More full-featured
- Can host your game for free
- Good for larger projects

**VS Code** ([code.visualstudio.com](https://code.visualstudio.com))
- Professional editor, free
- Runs on your computer
- More setup, but more powerful

For your first game, use **CodePen**. Just go to codepen.io, create a free account, and click "New Pen."

## Step 4: Ask AI to Write the Code

Go to your AI assistant and try this prompt:

> "I want to create a simple quiz game that runs in a web browser. It should:
> - Show one question at a time
> - Have 4 multiple choice answers
> - Track the score
> - Show the final score at the end
> - Have 5 questions about [your topic]
>
> Please write the HTML, CSS, and JavaScript code for this. Make it look clean and modern. Add comments explaining what each section does so I can learn."

The AI will generate three blocks of code:
- **HTML** - The structure
- **CSS** - The styling
- **JavaScript** - The behavior

## Step 5: Put It Together

In CodePen:
1. Copy the HTML code into the HTML panel
2. Copy the CSS code into the CSS panel
3. Copy the JavaScript code into the JS panel

You should see your game appear in the preview panel.

## Step 6: Test and Fix

Your game probably won't work perfectly the first time. That's normal.

If something's broken, copy the error message (look in the browser console) and ask AI:

> "I'm getting this error in my quiz game: [paste error]. Here's my code: [paste code]. What's wrong and how do I fix it?"

AI is excellent at debugging. It can spot mistakes you'd never find on your own.

## Step 7: Customize and Expand

Once the basic game works:

**Change the questions:**
> "Replace the quiz questions with 10 questions about [new topic]"

**Improve the design:**
> "Make the quiz look more colorful and add animations when the user selects an answer"

**Add features:**
> "Add a timer so players have 15 seconds per question"
> "Add a high score system that saves to local storage"
> "Add different difficulty levels"

## Example: Building a Memory Card Game

Here's how a conversation might go:

**You:** I want to make a memory card matching game. Start with 8 pairs of cards (16 total). Cards should flip when clicked, and matched pairs stay face up. Include a move counter.

**AI:** [Provides HTML, CSS, and JavaScript code]

**You:** It works, but the cards flip too fast. Can you slow down the animation?

**AI:** [Provides updated code]

**You:** Can you add emoji icons to the cards instead of numbers?

**AI:** [Updates code with emojis]

**You:** Add a win screen that shows when all pairs are matched, displaying the total moves.

**AI:** [Adds win condition and screen]

This back-and-forth is how game development works, even for professionals.

## Sharing Your Game

Once your game works:

**CodePen:** Click "Save" and share the URL
**Replit:** Click "Share" and get a link anyone can play
**Your own website:** Download the files and upload them

Send the link to friends. You made a game.

## Going Further

As you get comfortable:

**Learn some basics:** Understanding a little code helps you communicate with AI better
**Try game frameworks:** Phaser.js, Kaboom.js, or p5.js make certain games easier
**Add multiplayer:** AI can help you add simple two-player modes
**Make mobile games:** Your web games can work on phones too

## Common Problems and Solutions

**"The code doesn't work at all"**
- Make sure you put HTML, CSS, and JS in the right panels
- Check for typos when copying code
- Ask AI to simplify the code

**"It works but looks ugly"**
- Ask AI to improve the CSS specifically
- Show AI a screenshot of a design you like

**"I want to change something but don't know how"**
- Just describe what you want in plain English
- AI can modify the code for you

**"I'm getting errors I don't understand"**
- Copy the exact error message
- Share it with AI along with your code
- Ask for an explanation, not just a fix

## What You'll Learn

Even if you never become a programmer, this project teaches you:
- How software is structured
- How to break problems into steps
- How to communicate technical ideas
- How to debug and iterate
- That you're more capable than you thought

## Next Steps

Want to create something for the real world? Try [Build a Murder Mystery Party](/projects/murder-mystery/) for an in-person interactive experience.

Or explore [Run LLMs Locally](/projects/local-llms/) to understand the AI tools themselves.

Or browse all [Projects](/projects/).
