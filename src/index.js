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

const div = (className, content, click) => {
  const button = document.createElement('input');
  button.type = 'button';
  button.value = content || '';
  button.onclick = click;
  button.style['background-color'] = '#F3EFFF';
  button.style.border = 'none';
  button.style.color = 'white';
  button.style.padding = '15px 32px';
  button.style['text-align'] = 'center';
  button.style['text-decoration'] = 'none';
  button.style.display = 'inline-block';
  button.style['font-size'] = '24px';

  const d = document.createElement('DIV');
  d.className = className;
  d.appendChild(button);
  return d;
};

// core UI element (container)
const numberPad = document.createElement('DIV');
numberPad.style.display = 'grid';
numberPad.style['grid-gap'] = '10px';
numberPad.style['grid-template-columns'] = 'auto auto auto';
numberPad.style['justify-content'] = 'space-evenly';
numberPad.style['aign-content'] = 'space-evenly';

// top container for the number
const input = document.createElement('INPUT');
input.type = 'text';
input.style['grid-column'] = '1 / span 3';
numberPad.appendChild(input);

const createKey = (n) => numberPad.appendChild(div('grid-item', n));

['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'].forEach(createKey);

const button = div('grid-item', 'WDTM?', () => {
  const number = input.value;
  playAudio(number);
});
button.children[0].style.color = 'blue';
button.style['grid-column'] = '2 / span 2';

numberPad.appendChild(button);

body.appendChild(numberPad);