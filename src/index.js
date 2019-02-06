// split out millions / thousands
// add billions, trillions, quadrillions, quintillions
// highlight as it says each section
// cache the content for offline
// make a smarter input
// make it awesome on mobile / ipad


import { play } from './wdtm';

const body = document.body;

// look at css grid for the buttons


const input = document.createElement('INPUT');
input.type = 'text';
body.appendChild(input);

const button = document.createElement('BUTTON');
button.type = 'button';
button.value = 'What does that make?'

button.onclick = () => {
  const number = input.value;
  play(number);
};
body.appendChild(button);







