/*----- constants -----*/
const WORDS = [
  'DEVELOPER', 'ENGINEER', 'NODE', 'JAVASCRIPT',
  'CODING', 'HTML', 'GUI', 'BOOLEAN',
  'REACT', 'FUNCTION', 'COMPUTER SCIENCE',
  'SEPARATION OF CONCERNS'
];
const MAX_WRONG = 6;

/*----- app's state (variables) -----*/
let secretWord;   // holds the randomly selected word
let wrongLetters;   // array of strings
let guess;   // string - that is initialized to same length as the secret

/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init();

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
}
