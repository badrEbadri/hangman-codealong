/*----- constants -----*/
const WORDS = [
  'DEVELOPER', 'ENGINEER', 'NODE', 'JAVASCRIPT',
  'CODING', 'HTML', 'GUI', 'BOOLEAN',
  'REACT', 'FUNCTION', 'COMPUTER SCIENCE',
  'SEPARATION OF CONCERNS'
];
const MAX_WRONG = 6;
const SPRITE_WIDTH = -11.25;

/*----- app's state (variables) -----*/
let secretWord;   // holds the randomly selected word
let wrongLetters;   // array of strings
let guess;   // string - that is initialized to same length as the secret

/*----- cached element references -----*/
const guessEl = document.getElementById('guess');
const gallowsEl = document.getElementById('gallows');
const msgEl = document.getElementById('msg');
const replayEl = document.getElementById('replay');
const btnEls = document.querySelectorAll('#letters > button');

/*----- event listeners -----*/
document.getElementById('letters')
  .addEventListener('click', handleLetterClick);

replayEl.addEventListener('click', init);

/*----- functions -----*/
init();

// Key Concept: In response to user interaction, update state, then call render()
function handleLetterClick(evt) {
  const letter = evt.target.textContent;
  if (
    letter.length > 1 ||
    isGameOver() ||
    wrongLetters.includes(letter) ||
    guess.includes(letter)
  ) return;
  if (secretWord.includes(letter)) {
    // Letter is correct, replace all _ at occurances in secretWord
    let newGuess = '';
    for (let i = 0; i < secretWord.length; i++) {
      newGuess += secretWord.charAt(i) === letter ?
        letter : guess.charAt(i);
    }
    guess = newGuess;
  } else {
    // Bad guess
    wrongLetters.push(letter);
  }
  render();
}

function isGameOver() {
  return secretWord === guess || wrongLetters.length === MAX_WRONG;
}

function init() {
  // Initialize all state and lastly call render()
  wrongLetters = [];
  // Get random index for secret word
  const rndIdx = Math.floor(Math.random() * WORDS.length);
  secretWord = WORDS[rndIdx];
  guess = '';
  for (let char of secretWord) {
    guess += (char === ' ') ? ' ' : '_';
  }
  // Init guess using a regex
  // guess = secretWord.replace(/[A-Z]/g, '_');
  render();
}

// Key Concept:  Transfer all state to the DOM
function render() {
  guessEl.innerHTML = `<strong>${guess}</strong>`;
  btnEls.forEach(function(btnEl) {
    const letter = btnEl.textContent;
    if (wrongLetters.includes(letter)) {
      btnEl.className = 'wrong';
    } else if (guess.includes(letter)) {
      btnEl.className = 'correct';
    } else {
      btnEl.className = '';
    }
  });
  gallowsEl.style.backgroundPositionX = `${wrongLetters.length * SPRITE_WIDTH}vmin`;
  replayEl.style.visibility = isGameOver() ? 'visible' : 'hidden';
  renderMessage();
}

function renderMessage() {
  if (guess === secretWord) {
    msgEl.textContent = 'Congrats you won!';
  } else if (wrongLetters.length === MAX_WRONG) {
    msgEl.textContent = 'Bummer, you lost :(';
  } else {
    // Game is in play
    // TODO: Render how many wrong guesses left (x of y)
    msgEl.textContent = "Good Luck!";
  }
}
