import { zeroToNinetyNine, zeroToNine, HUNDRED, AND, THOUSAND, ZERO } from './constants';

export const init = (audioElement, voice) => {
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

  const audio = x => pieces(x).map((p) => p);
  const text = x => pieces(x).map((p) => p).join(' ');

  const addSelfDestructingEventListener = (element, eventType, callback) => {
    const handler = () => {
      element.removeEventListener(eventType, handler);
      callback();
    };
    element.addEventListener(eventType, handler);
  };

  const play = pieces => {
    if (!pieces || !pieces.length) return;

    const [piece, ...remaining] = pieces;

    addSelfDestructingEventListener(audioElement, 'ended', () => {
      play(remaining);
    });

    audioElement.src = `${piece}.m4a`;
    audioElement.play();
  };

  const playAudio = number => play(audio(number));

  return { playAudio, text };
};
