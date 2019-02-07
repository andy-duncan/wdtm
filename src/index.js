// split out millions / thousands
// add billions, trillions, quadrillions, quintillions
// highlight as it says each section
// cache the content for offline
// make a smarter input
// maybe show the whole text and emphasise the words as they are said ?

import { init } from './wdtm';

const audioElement = new Audio(require('./audio/zero.m4a'));
const { playAudio, text } = init(audioElement);

const body = document.body;

const input = document.createElement('INPUT');
input.type = 'text';
input.id = 'the_number';
body.appendChild(input);


const button = document.createElement('BUTTON');
button.innerText = 'WDTM?';
button.onclick = () => {
  const number = input.value;
  playAudio(number);
};
body.appendChild(button);



