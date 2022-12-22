import './style.css';
import { postScore, getScore } from './modules/methods.js';

const addScore = document.querySelector('#add-score');
const playerName = document.querySelector('#player-name');
const playerScore = document.querySelector('#player-score');
const refreshBtn = document.querySelector('#refresh-btn');
const scoreBoard = document.querySelector('#score-table');

addScore.addEventListener('submit', (e) => {
  e.preventDefault();
  postScore(playerName.value, playerScore.value);
  playerName.value = '';
  playerScore.value = '';
});

refreshBtn.addEventListener('click', async () => {
  const scores = await getScore();
  let counter = 0;
  scoreBoard.innerHTML = '';
  scores.forEach((score) => {
    scoreBoard.innerHTML += `
    <div class="table-elements">
    <p>${counter += 1}.</p>
    <p>${score.user}</p>
    <p>${score.score}</p>
    </div>
  `;
  });
});