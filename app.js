'use strict';

// button
const p1Btn = document.querySelector('#p1Button');
const p2Btn = document.querySelector('#p2Button');
// display
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
// reset button
const resetBtn = document.querySelector('#reset');
// select
const winningScoreSelect = document.querySelector('#winningScore');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!isGameOver) {
    p1Score++;
    p1Display.innerHTML = p1Score;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add('has-text-success');
      p2Display.classList.add('has-text-danger');
      p1Btn.disabled = true;
      p2Btn.disabled = true;
    }
  }
});

p2Btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!isGameOver) {
    p2Score++;
    p2Display.innerHTML = p2Score;
    if (p2Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add('has-text-danger');
      p2Display.classList.add('has-text-success');
      p1Btn.disabled = true;
      p2Btn.disabled = true;
    }
  }
});

winningScoreSelect.addEventListener('change', function () {
  // thisを使用する為,無名関数で記述
  winningScore = parseInt(this.value);
  reset();
});

resetBtn.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.innerHTML = p1Score;
  p2Display.innerHTML = p2Score;
  p1Display.classList.remove('has-text-success', 'has-text-danger');
  p2Display.classList.remove('has-text-success', 'has-text-danger');
  p1Btn.disabled = false;
  p2Btn.disabled = false;
}