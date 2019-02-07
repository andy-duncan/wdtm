// split out millions / thousands
// add billions, trillions, quadrillions, quintillions
// highlight as it says each section
// cache the content for offline
// make a smarter input
// maybe show the whole text and emphasise the words as they are said ?

import { init } from './wdtm';

const audioElement = new Audio(require('./audio/zero.m4a'));
const { playAudio, text } = init(audioElement);

const head = document.head;
const body = document.body;


// const button = document.createElement('BUTTON');
// button.innerText = 'WDTM?';
// button.onclick = () => {
//   const number = input.value;
//   playAudio(number);
// };
// body.appendChild(button);

const div = (className, content, click) => {
  const button = document.createElement('BUTTON');
  button.innerText = content || '';
  button.onclick = click;

  const d = document.createElement('DIV');
  d.className = className;
  d.appendChild(button);
  return d;
};

const numberPad = document.createElement('DIV');
numberPad.style.display = 'grid';
numberPad.style['grid-gap'] = '50px';
numberPad.style['grid-template-columns'] = 'auto auto auto';
numberPad.style['justify-content'] = 'space-evenly';
numberPad.style['aign-content'] = 'space-evenly';

const input = document.createElement('INPUT');
input.type = 'text';
input.style['grid-column'] = '1 / span 3';
numberPad.appendChild(input);

const numberOne = div('grid-item', '1');
const numberTwo = div('grid-item', '2');
const numberThree = div('grid-item', '3');
const numberFour = div('grid-item', '4');
const numberFive = div('grid-item', '5');
const numberSix = div('grid-item', '6');
const numberSeven = div('grid-item', '7');
const numberEight = div('grid-item', '8');
const numberNine = div('grid-item', '9');
const numberZero = div('grid-item', '0');

const button = div('grid-item', 'WDTM?', () => {
  const number = input.value;
  playAudio(number);
});
button.style['grid-column'] = '2 / 3';

numberPad.appendChild(numberSeven);
numberPad.appendChild(numberEight);
numberPad.appendChild(numberNine);
numberPad.appendChild(numberFour);
numberPad.appendChild(numberFive);
numberPad.appendChild(numberSix);
numberPad.appendChild(numberOne);
numberPad.appendChild(numberTwo);
numberPad.appendChild(numberThree);
numberPad.appendChild(numberZero);
numberPad.appendChild(button);

body.appendChild(numberPad);