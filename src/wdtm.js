import { zeroToNinetyNine, zeroToNine, HUNDRED, AND, THOUSAND, MILLION, BILLION, ZERO } from './constants';

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

    const billions = Math.floor(x / 1000000000);
    const millions = Math.floor((x / 1000000) % 1000);
    const thousands = Math.floor((x / 1000) % 1000);
    const hundreds = Math.floor(x % 1000);

    // is there a neat way to split into 3s, break down, then zip up with the big units, then put back together ?




    const billion = breakDown(billions);
    const million = breakDown(millions);
    const thousand = breakDown(thousands);
    const hundred = breakDown(hundreds);

    pieces.push(...billion);
    if (billion.length > 0) {
      pieces.push(BILLION);
    }

    pieces.push(...million);
    if (million.length > 0) {
      pieces.push(MILLION);
    }

    pieces.push(...thousand);
    if (thousand.length > 0) {
      pieces.push(THOUSAND);
    }

    // need to arrange for the final AND
    if (pieces.length > 0 && hundreds > 0 && hundreds < 100) {
      pieces.push(AND);
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
