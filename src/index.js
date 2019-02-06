// split out millions / thousands
// add billions, trillions, quadrillions, quintillions
// highlight as it says each section
// cache the content for offline
// make a smarter input
// make it awesome on mobile / ipad

import { text } from './wdtm';

const head = document.head;
const body = document.body;

// look at css grid for the buttons

const responsivevoice = document.createElement('SCRIPT');
responsivevoice.src = 'http://code.responsivevoice.org/responsivevoice.js';
head.appendChild(responsivevoice);

const input = document.createElement('INPUT');
input.type = 'text';
body.appendChild(input);

const button = document.createElement('BUTTON');
button.type = 'button';
button.value = 'What does that make?';

button.onclick = () => {
  const number = input.value;
  responsiveVoice.speak(text(number), 'UK English Male');
};
body.appendChild(button);
