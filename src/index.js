// add audio
// split out millions / thousands
// add billions, trillions, quadrillions, quintillions
// highlight as it says each section
// cache the content for offline
// make a smarter input
// make it awesome on mobile / ipad
import { audio } from './wdtm';


const body = document.body;

const input = document.createElement('INPUT');
input.type = 'text';
input.id = 'the_number';
body.appendChild(input);


const audioElement = new Audio(require('./audio/zero.m4a'));

const button = document.createElement('BUTTON');
button.innerText = 'WDTM?';
button.onclick = () => {
  const number = input.value;
  audioElement.play();
  playAudio(audio(number));

};
body.appendChild(button);

const addSelfDestructingEventListener = (element, eventType, callback) => {
  const handler = () => {
    element.removeEventListener(eventType, handler);
    callback();
  };
  element.addEventListener(eventType, handler);
};

const playAudio = pieces => {
  if (!pieces || !pieces.length) return;

  const [piece, ...remaining] = pieces;

  addSelfDestructingEventListener(audioElement, 'ended', () => {
    playAudio(remaining);
  });

  console.log('piece', piece);
  audioElement.src = piece;
  audioElement.play();
  console.log('audioEle', audioElement);
  console.log('audioElement.paused', audioElement.paused);


};



