# 🎮 Tic Tac Toe – DOM Manipulation Practice Project

A simple, responsive, and interactive **Tic Tac Toe** web game built using **HTML, CSS, and JavaScript**.  
This project was created to strengthen the understanding of **DOM (Document Object Model) manipulation**, **event handling**, and **game logic implementation** in JavaScript.

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Demo](#demo)
- [Features](#features)
- [Learning Objectives](#learning-objectives)
- [How It Works](#how-it-works)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Code Overview](#code-overview)
- [How to Run Locally](#how-to-run-locally)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## 🧠 About the Project

This **Tic Tac Toe** game allows two players to take turns marking X’s and O’s on a 3×3 grid.  
The main goal behind creating this project was to **learn DOM manipulation** — dynamically updating webpage elements, responding to user input, and reflecting game logic visually.

It’s built completely using **vanilla JavaScript**, without any frameworks or external libraries.

---

## 🌐 Demo

🔗 **Live Demo:** *(Add your GitHub Pages link once deployed)*  
Example: `https://your-username.github.io/tic-tac-toe/`

---

## ✨ Features

- 🕹️ Two-player interactive gameplay  
- 🧩 Dynamic UI updates using JavaScript DOM manipulation  
- 🎉 Highlights the winning combination  
- 🆕 “New Game” button for restarting anytime  
- 🕓 Real-time display of current player turn  
- 📱 Responsive layout for different screen sizes  

---

## 🎯 Learning Objectives

The primary focus of this project was to **practice and understand JavaScript DOM manipulation**:

- Accessing elements with `document.querySelector()` & `querySelectorAll()`
- Listening to user events using `addEventListener()`
- Updating content dynamically using `innerText` and `classList`
- Managing state (game grid, player turns, and results)
- Building modular functions like `initGame()`, `swapTurn()`, and `checkGameOver()`

---

## ⚙️ How It Works

1. **Game Initialization (`initGame`)**
   - Sets current player as “X”
   - Clears the grid and enables all boxes
   - Updates game info text to show the current player

2. **Player Move (`handleClick`)**
   - When a box is clicked, it displays the player’s symbol (X or O)
   - The box becomes unclickable for the rest of the round
   - Game checks for win or draw conditions

3. **Game Logic (`checkGameOver`)**
   - All winning positions are stored in an array  
   - Compares each position’s values to detect a winner  
   - Highlights winning boxes using a `.win` CSS class

4. **Restart Button**
   - When the “New Game” button is clicked, the board resets  
   - A new round begins without page refresh

---

## 🧰 Technologies Used

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Game structure and UI layout |
| **CSS3** | Styling, grid design, and responsiveness |
| **JavaScript (ES6)** | Game logic and DOM manipulation |

---

## 🗂️ Project Structure

tic-tac-toe/
│
├── index.html # Main HTML structure of the game
├── style.css # CSS for design, responsiveness, and animations
└── script.js # JavaScript logic handling gameplay and DOM updates


## 🧱 Code Overview

### 📄 `index.html`
Defines the 3×3 grid, player info, and new game button.
```html
<div class="wrapper">
  <p class="game-info"></p>
  <div class="tic-tac-toe">
    <div class="box box1"></div>
    ...
    <div class="box box9"></div>
  </div>
  <button class="btn">New Game</button>
</div>


Creates a clean grid layout using CSS Grid, centers elements, and styles the winning boxes.

.tic-tac-toe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 2px solid green;
  background-color: white;
}
.win {
  background-color: lightgreen;
}

script.js

Implements game logic, player turns, and win detection.

const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer, gameGrid;

const winningPositions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function initGame() {
  currentPlayer = "X";
  gameGrid = Array(9).fill("");
  boxes.forEach((box, index) => {
    box.innerText = "";
    box.style.pointerEvents = "all";
    box.classList = `box box${index + 1}`;
  });
  newGameBtn.classList.remove("active");
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

▶️ How to Run Locally

Clone this repository

git clone https://github.com/<your-username>/tic-tac-toe.git


Navigate to the project folder

cd tic-tac-toe


Open the game
Just open index.html in your browser:

start index.html   # Windows
open index.html    # macOS



🚀 Future Improvements

🤖 Add single-player mode with AI (Minimax algorithm)

🔢 Maintain score history between rounds

📱 Improve responsive layout for mobile devices

🎨 Add animations and hover effects

🔊 Add sound effects for clicks and wins

👤 Author

Sanjeet Sinhg
📧 Email: mrsanjeetsingh9565@gmail.com

🌐 GitHub: https://github.com/Sanjeet8303

🏁 Conclusion

This project served as a great practice for understanding DOM manipulation and building dynamic, interactive web experiences with pure JavaScript.
Simple, effective, and a fun way to solidify JavaScript fundamentals.


