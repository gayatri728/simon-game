# 🎮 Simon Says Game

An interactive Simon Says memory game built using HTML, CSS, and JavaScripT.
The game tests your memory by generating a sequence of colors that you must repeat correctly.

## Features

* 🎯 Random color sequence generation
* 🧠 Memory-based gameplay
* 📈 Level progression system
* ❌ Game over detection with score display
* 🎨 Visual feedback (game flash & user flash)
* 🔁 Restart by pressing any key

## Tech Stack

* HTML5 – Structure
* CSS – Styling & animations
* JavaScript – Game logic & DOM manipulation

## How to Play

1. Press any key to start the game
2. Watch the flashing color carefully
3. Click the buttons in the same order
4. Each level adds a new color to the sequence
5. If you click the wrong button → Game Over

## Project Structure

simon-game/
│
├── index.html
├── style2.css
├── app2.js


## Core Logic

* `gameSeq[]` → stores the game’s sequence
* `userSeq[]` → stores user input
* `levelUp()` → increases level and adds new color
* `checkAns()` → validates user input
* `reset()` → resets the game after failure

## UI Highlights

* Flash effect for game sequence
* Green flash for user clicks
* Red screen flash on game over

##  Future Improvements

* 🔊 Add sound effects
* 🏆 High score tracking (localStorage)
* 📱 Mobile responsiveness
* 🎨 Better UI/UX design


## Acknowledgement

Inspired by the classic **Simon Says Game**

