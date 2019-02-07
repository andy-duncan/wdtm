import { zeroToNinetyNine, zeroToNine, HUNDRED, AND, THOUSAND, ZERO } from './audio';

// need to improve the basic loops and increase to quintillions

const breakDown = x => {
  const pieces = [];

  const hundreds = Math.floor(x / 100);
  const tens = Math.floor((x % 100) / 10);
  const units = x % 10;

  const tensAndUnits = zeroToNinetyNine[tens][units];

  const hundred = zeroToNine[hundreds];

  pieces.push(...hundred);
  if (hundred.length > 0) {
    pieces.push(HUNDRED);
    if (tensAndUnits.length > 0) {
      pieces.push(AND);
    }
  }

  pieces.push(...tensAndUnits);
  return pieces;
};

const pieces = x => {
  const pieces = [];

  const thousands = Math.floor(x / 1000);
  const hundreds = Math.floor(x % 1000);

  const thousand = breakDown(thousands);
  const hundred = breakDown(hundreds);

  pieces.push(...thousand);
  if (thousand.length > 0) {
    pieces.push(THOUSAND);
    if (hundreds > 0 && hundreds < 100) {
      pieces.push(AND);
    }
  }
  pieces.push(...hundred);

  if (pieces.length === 0) {
    pieces.push(ZERO);
  }

  return pieces;
};

const audio = x => pieces(x).map((p) => p.audio);
const text = x => pieces(x).map((p) => p.text).join(' ');

const addSelfDestructingEventListener = (element, eventType, callback) => {
  const handler = () => {
    element.removeEventListener(eventType, handler);
    callback();
  };
  element.addEventListener(eventType, handler);
};

export const init = audioElement => {
  const play = pieces => {
    if (!pieces || !pieces.length) return;

    const [piece, ...remaining] = pieces;

    addSelfDestructingEventListener(audioElement, 'ended', () => {
      play(remaining);
    });

    audioElement.src = piece;
    audioElement.play();
  };

  const playAudio = number => play(audio(number));

  return { playAudio, text };
};
