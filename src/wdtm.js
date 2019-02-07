require('./audio/zero.m4a');

require('./audio/one.m4a');
require('./audio/two.m4a');
require('./audio/three.m4a');
require('./audio/four.m4a');
require('./audio/five.m4a');
require('./audio/six.m4a');
require('./audio/seven.m4a');
require('./audio/eight.m4a');
require('./audio/nine.m4a');
require('./audio/ten.m4a');
require('./audio/eleven.m4a');
require('./audio/twelve.m4a');
require('./audio/thirteen.m4a');
require('./audio/fourteen.m4a');
require('./audio/fifteen.m4a');
require('./audio/sixteen.m4a');
require('./audio/seventeen.m4a');
require('./audio/eighteen.m4a');
require('./audio/nineteen.m4a');
require('./audio/twenty.m4a');
require('./audio/thirty.m4a');
require('./audio/forty.m4a');
require('./audio/fifty.m4a');
require('./audio/sixty.m4a');
require('./audio/seventy.m4a');
require('./audio/eighty.m4a');
require('./audio/ninety.m4a');
require('./audio/hundred.m4a');
require('./audio/thousand.m4a');
require('./audio/and.m4a');

const ZERO = { text: 'zero', audio: './zero.m4a' };
const ONE = { text: 'one', audio: './one.m4a' };
const TWO = { text: 'two', audio: './two.m4a' };
const THREE = { text: 'three', audio: './three.m4a' };
const FOUR = { text: 'four', audio: './four.m4a' };
const FIVE = { text: 'five', audio: './five.m4a' };
const SIX = { text: 'six', audio: './six.m4a' };
const SEVEN = { text: 'seven', audio: './seven.m4a' };
const EIGHT = { text: 'eight', audio: './eight.m4a' };
const NINE = { text: 'nine', audio: './nine.m4a' };
const TEN = { text: 'ten', audio: './ten.m4a' };
const ELEVEN = { text: 'eleven', audio: './eleven.m4a' };
const TWELVE = { text: 'twelve', audio: './twelve.m4a' };
const THIRTEEN = { text: 'thirteen', audio: './thirteen.m4a' };
const FOURTEEN = { text: 'fourteen', audio: './fourteen.m4a' };
const FIFTEEN = { text: 'fifteen', audio: './fifteen.m4a' };
const SIXTEEN = { text: 'sixteen', audio: './sixteen.m4a' };
const SEVENTEEN = { text: 'seventeen', audio: './seventeen.m4a' };
const EIGHTEEN = { text: 'eighteen', audio: './eighteen.m4a' };
const NINETEEN = { text: 'nineteen', audio: './nineteen.m4a' };
const TWENTY = { text: 'twenty', audio: './twenty.m4a' };
const THIRTY = { text: 'thirty', audio: './thirty.m4a' };
const FORTY = { text: 'forty', audio: './forty.m4a' };
const FIFTY = { text: 'fifty', audio: './fifty.m4a' };
const SIXTY = { text: 'sixty', audio: './sixty.m4a' };
const SEVENTY = { text: 'seventy', audio: './seventy.m4a' };
const EIGHTY = { text: 'eighty', audio: './eighty.m4a' };
const NINETY = { text: 'ninety', audio: './ninety.m4a' };
const HUNDRED = { text: 'hundred', audio: './hundred.m4a' };
const THOUSAND = { text: 'thousand', audio: './thousand.m4a' };
const AND = { text: 'and', audio: './and.m4a' };

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

const audio = x => pieces(x).map((p) => p.audio);
const text = x => pieces(x).map((p) => p.text).join(' ');

export { audio, text };
