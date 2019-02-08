import {
  zeroToNinetyNine,
  zeroToNine,
  HUNDRED,
  AND,
  THOUSAND,
  MILLION,
  BILLION,
  TRILLION,
  QUADRILLION,
  ZERO
} from './constants';

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

  const reverseString = s => s.split("").reverse().join("");
  const allUnits = [[], [THOUSAND], [MILLION], [BILLION], [TRILLION], [QUADRILLION]];

  const pieces = n => {
    const threeDigitChunks = reverseString(n.toString()).match(/.{1,3}/g).map(reverseString);
    const wordsForChunks = threeDigitChunks.map(breakDown).reverse();
    const unitsNeeded = allUnits.slice(0, wordsForChunks.length).reverse();

    const wordsForNumber = wordsForChunks.reduce((acc, current, i) => {
      if (i === wordsForChunks.length - 1) {
        const number = parseInt(threeDigitChunks[0]);
        if (acc.length > 0 && number > 0 && number < 100) {
          acc.push(AND);
        }
      }
      if (current && current.length > 0) {
        acc.push(...current);
        acc.push(...unitsNeeded[i]);
      }
      return acc;
    }, []);

    if (wordsForNumber.length === 0) {
      wordsForNumber.push(ZERO);
    }

    return wordsForNumber;
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

    audioElement.src = `${voice || ''}${piece}.m4a`;
    audioElement.play();
  };

  const playAudio = number => play(audio(number));

  return { playAudio, text };
};
