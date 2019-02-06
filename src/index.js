
// add audio
// split out millions / thousands
// add billions, trillions, quadrillions, quintillions
// highlight as it says each section
// cache the content for offline
// make a smarter input

// need to bootstrap the app.
// pull in the audio files

import { text, audio } from './wdtm';

const body = document.body;

const button = document.createElement('BUTTON');
button.onclick = () => {
  playAudio(audio(22222));
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

  console.log('pieces', pieces);
  console.log('piece', piece);
  console.log('remaining', remaining);

  addSelfDestructingEventListener(piece, 'ended', () => {
    console.log('ended', piece);
    playAudio(remaining);
  });

  piece.play();
};







