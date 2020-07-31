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
document.getElementById('letters')
  .addEventListener('click', handleLetterClick);

/*----- functions -----*/
init();

// Key Concept: In response to user interaction, update state, then call render()
function handleLetterClick(evt) {
  const letter = evt.target.textContent;
  if (
    letter.length > 1
  ) return;
  console.log('letter', letter.length);
  // What do we need to do?


  render();
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

function render() {

}
