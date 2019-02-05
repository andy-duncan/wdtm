
// add audio
// split out millions / thousands
// add billions, trillions, quadrillions, quintillions
// highlight as it says each section
// cache the content for offline
// make a smarter input


const ZERO = { text: 'zero' };
const ONE = { text: 'one' };
const TWO = { text: 'two' };
const THREE = { text: 'three' };
const FOUR = { text: 'four' };
const FIVE = { text: 'five' };
const SIX = { text: 'six' };
const SEVEN = { text: 'seven' };
const EIGHT = { text: 'eight' };
const NINE = { text: 'nine' };
const TEN = { text: 'ten' };
const ELEVEN = { text: 'eleven' };
const TWELVE = { text: 'twelve' };
const THIRTEEN = { text: 'thirteen' };
const FOURTEEN = { text: 'fourteen' };
const FIFTEEN = { text: 'fifteen' };
const SIXTEEN = { text: 'sixteen' };
const SEVENTEEN = { text: 'seventeen' };
const EIGHTEEN = { text: 'eighteen' };
const NINETEEN = { text: 'nineteen' };
const TWENTY = { text: 'twenty' };
const THIRTY = { text: 'thirty' };
const FORTY = { text: 'forty' };
const FIFTY = { text: 'fifty' };
const SIXTY = { text: 'sixty' };
const SEVENTY = { text: 'seventy' };
const EIGHTY = { text: 'eighty' };
const NINETY = { text: 'ninety' };
const HUNDRED = { text: 'hundred' };
const THOUSAND = { text: 'thousand' };
const AND = { text: 'and' };

const zeroToNine = [[], [ONE], [TWO], [THREE], [FOUR], [FIVE], [SIX], [SEVEN], [EIGHT], [NINE]];
const tensAndUnits = ten => zeroToNine.map((unit) => unit ? [ten,...unit] : [ten]);

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

const breakDown = (x) => {
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

const say = (x) => {
  const pieces = [];

  const thousands = Math.floor(x/1000);
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

  console.log(x, pieces.map((n) => n.text).join(' '));
};

document.getElementById('one').play();

console.log('thingy');
