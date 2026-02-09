# Rick & Morty Memory Card Game

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_App-3b82f6?style=for-the-badge)](https://rick-morty-memory-card.netlify.app/)
[![Code](https://img.shields.io/badge/Code-GitHub_Repo-black?style=for-the-badge)](https://github.com/inebw/memory-card)

## How the game works

- At the start, the game displays 12 random characters.
- After each card you select, the character cards are shuffled.
- Your goal is to select all 12 characters without picking any character more than once.

## 📖 Project Overview

A dynamic memory card game built with **React** that challenges players to
remember which characters they have already clicked. The application fetches
data from the **Rick and Morty API** to generate a random set of cards for
every new game.

The core mechanic involves tracking state changes and shuffling the DOM
elements after every interaction, ensuring a dynamic and challenging
gameplay loop.

## 🛠 Technologies Used

- **Frontend:** React.js (Functional Components, Hooks)
- **Styling:** CSS3 (Animations, Flexbox, Grid)
- **Data Source:** RESTful API (Rick and Morty API)

## ✨ Features

### 🎮 Gameplay Mechanics

- **Dynamic Content:** Fetches 12 random characters from a pool of 800+ IDs,
  ensuring no two playthroughs are identical.
- **Score Tracking:** Real-time updates for Current Score and High Score
  (persisted in component state).
- **Win/Loss States:** Detects duplicate clicks to trigger a "Game Over"
  reset or a "Victory" screen upon reaching a score of 12.

## 👨‍💻 Implementation Details

### State Management (The Set Data Structure)

To efficiently track clicked cards, I utilized a JavaScript **Set**
instead of an Array. This allows for O(1) lookup time when checking if
a card has already been clicked, which is significantly faster than
iterating through an array every time the user interacts with the game.

### Randomization Algorithms

The game relies on two distinct randomization helper functions:

1. **ID Generator:** Generates 12 unique random integers to fetch
   character data from the API.
2. **Fisher-Yates Shuffle:** A custom algorithm that reorders the
   data array after every click, forcing the React component to
   re-render the grid in a new order to confuse the player.

## 🚀 Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/inebw/memory-card.git
   cd memory-card
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

