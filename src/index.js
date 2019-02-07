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
  button.style.width = '140px';
  button.style.height = '80px';
  button.style['background-color'] = '#F3EFFF';
  button.style.border = 'none';
  button.style.color = 'black';
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
numberPad.style.width = '440px';
numberPad.style.border = '1px solid #19BEFF';
numberPad.style['grid-gap'] = '10px';
numberPad.style['grid-column-gap'] = '10px';
numberPad.style['grid-template-columns'] = 'auto auto auto';
numberPad.style['justify-content'] = 'space-evenly';
numberPad.style['align-content'] = 'space-evenly';

// top container for the number
const inputContainer = document.createElement('div');
const input = document.createElement('div');
input.innerText = '123,432,123,123,123,123';
input.style.height = '100px';
input.style.backgroundColor = 'white';
input.style.color = 'black';
input.style['font-family'] = 'system-ui';
input.style['font-size'] = '34px';
input.style['font-weight'] = 'bold';
input.style['line-height'] = '100px';
input.style['text-align'] = 'right';
input.style['padding-right'] = '10px';

inputContainer.style['grid-column'] = '1 / span 3';
inputContainer.style.width = '100%';
inputContainer.appendChild(input);
numberPad.appendChild(inputContainer);

const createKey = (n) => numberPad.appendChild(div('grid-item', n));

['7', '8', '9', '4', '5', '6', '1', '2', '3'].forEach(createKey);

const zero = div('grid-item', '0');
zero.style['grid-column'] = '1 / span 2';
zero.children[0].style.width = '100%';
numberPad.appendChild(zero);

const clear = div('grid-item', 'C');
numberPad.appendChild(clear);

const button = div('grid-item', 'WDTM?', () => {
  const number = input.value;
  playAudio(number);
});
button.children[0].style.width = '100%';
button.children[0].style.backgroundColor = '#19BEFF';
button.children[0].style.color = 'white';
button.style['grid-column'] = '1 / span 3';

numberPad.appendChild(button);

body.appendChild(numberPad);