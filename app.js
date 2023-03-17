'use strict';

// button
const p1Btn = document.querySelector('#p1Button');
const p2Btn = document.querySelector('#p2Button');
// display
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
// reset button
const resetBtn = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Btn.addEventListener('click', () => {
  if (!isGameOver) {
    p1Score++;
    p1Display.innerHTML = p1Score;
    if (p1Score === winningScore) {
      isGameOver = true;
    }
  }
});

p2Btn.addEventListener('click', () => {
  if (!isGameOver) {
    p2Score++;
    p2Display.innerHTML = p2Score;
    if (p2Score === winningScore) {
      isGameOver = true;
    }
  }
});