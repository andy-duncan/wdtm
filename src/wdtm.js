const ZERO = { text: 'zero', start: 1.5, length: 1.2 };
const ONE = { text: 'one', start: 3.6, length: 1.2 };
const TWO = { text: 'two', start: 5.5, length: 1.2 };
const THREE = { text: 'three', start: 7.5, length: 1.2 };
const FOUR = { text: 'four', start: 9.5, length: 1.2 };
const FIVE = { text: 'five', start: 11.5, length: 1.2 };
const SIX = { text: 'six', start: 13.5, length: 1.2 };
const SEVEN = { text: 'seven', start: 15.5, length: 1.2 };
const EIGHT = { text: 'eight', start: 17.5, length: 1.2 };
const NINE = { text: 'nine', start: 19.5, length: 1.2 };
const TEN = { text: 'ten', start: 21.5, length: 1.2 };
const ELEVEN = { text: 'eleven', start: 23.5, length: 1.2 };
const TWELVE = { text: 'twelve', start: 25.5, length: 1.6 };
const THIRTEEN = { text: 'thirteen', start: 27.5, length: 1.2 };
const FOURTEEN = { text: 'fourteen', start: 29.5, length: 1.2 };
const FIFTEEN = { text: 'fifteen', start: 31.5, length: 1.2 };
const SIXTEEN = { text: 'sixteen', start: 33.5, length: 1.2 };
const SEVENTEEN = { text: 'seventeen', start: 35.5, length: 1.2 };
const EIGHTEEN = { text: 'eighteen', start: 37.5, length: 1.2 };
const NINETEEN = { text: 'nineteen', start: 39.5, length: 1.2 };
const TWENTY = { text: 'twenty', start: 41.5, length: 1.2 };
const THIRTY = { text: 'thirty', start: 43.5, length: 1.2 };
const FORTY = { text: 'forty', start: 45.5, length: 1.2 };
const FIFTY = { text: 'fifty', start: 47.5, length: 1.2 };
const SIXTY = { text: 'sixty', start: 49.5, length: 1.2 };
const SEVENTY = { text: 'seventy', start: 51.5, length: 1.2 };
const EIGHTY = { text: 'eighty', start: 53.5, length: 1.2 };
const NINETY = { text: 'ninety', start: 55.5, length: 1.2 };
const HUNDRED = { text: 'hundred', start: 58, length: 1.2 };
const THOUSAND = { text: 'thousand', start: 60, length: 1.2 };
const MILLION = { text: 'million', start: 62, length: 1.2 };
const BILLION = { text: 'billion', start: 64, length: 1.2 };
const TRILLION = { text: 'trillion', start: 66, length: 1.2 };
const QUADRILLION = { text: 'quadrillion', start: 68, length: 1.2 };
const QUINTILLION = { text: 'quintillion', start: 70, length: 1.2 };
const AND = { text: 'and', start: 72, length: 1.2 };

const zeroToNine = [[], [ONE], [TWO], [THREE], [FOUR], [FIVE], [SIX], [SEVEN], [EIGHT], [NINE]];
const tensAndUnits = ten => zeroToNine.map((unit) => unit ? [ten, ...unit] : [ten]);

const zeroToNinetyNine = [
  zeroToNine,
  [[TEN], [ELEVEN], [TWELVE], [THIRTEEN], [FOURTEEN], [FIFTEEN], [SIXTEEN], [SEVENTEEN], [EIGHTEEN], [NINETEEN]],
  tensAndUnits(TWENTY),
  tensAndUnits(THIRTY),
  tensAndUnits(FORTY),
  tensAndUnits(FIFTY),
  tensAndUnits(SIXTY),
  tensAndUnits(SEVENTY),
  tensAndUnits(EIGHTY),
  tensAndUnits(NINETY)
];

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

const text = number => pieces(number).map((p) => p.text).join(' ');

export { text };
