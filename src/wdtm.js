const ZERO = { text: 'zero', audio: new Audio('./audio/zero.m4a') };
const ONE = { text: 'one', audio: new Audio('./audio/one.m4a') };
const TWO = { text: 'two', audio: new Audio('./audio/two.m4a') };
const THREE = { text: 'three', audio: new Audio('./audio/three.m4a') };
const FOUR = { text: 'four', audio: new Audio('./audio/four.m4a') };
const FIVE = { text: 'five', audio: new Audio('./audio/five.m4a') };
const SIX = { text: 'six', audio: new Audio('./audio/six.m4a') };
const SEVEN = { text: 'seven', audio: new Audio('./audio/seven.m4a') };
const EIGHT = { text: 'eight', audio: new Audio('./audio/eight.m4a') };
const NINE = { text: 'nine', audio: new Audio('./audio/nine.m4a') };
const TEN = { text: 'ten', audio: new Audio('./audio/ten.m4a') };
const ELEVEN = { text: 'eleven', audio: new Audio('./audio/eleven.m4a') };
const TWELVE = { text: 'twelve', audio: new Audio('./audio/twelve.m4a') };
const THIRTEEN = { text: 'thirteen', audio: new Audio('./audio/thirteen.m4a') };
const FOURTEEN = { text: 'fourteen', audio: new Audio('./audio/fourteen.m4a') };
const FIFTEEN = { text: 'fifteen', audio: new Audio('./audio/fifteen.m4a') };
const SIXTEEN = { text: 'sixteen', audio: new Audio('./audio/sixteen.m4a') };
const SEVENTEEN = { text: 'seventeen', audio: new Audio('./audio/seventeen.m4a') };
const EIGHTEEN = { text: 'eighteen', audio: new Audio('./audio/eighteen.m4a') };
const NINETEEN = { text: 'nineteen', audio: new Audio('./audio/nineteen.m4a') };
const TWENTY = { text: 'twenty', audio: new Audio('./audio/twenty.m4a') };
const THIRTY = { text: 'thirty', audio: new Audio('./audio/thirty.m4a') };
const FORTY = { text: 'forty', audio: new Audio('./audio/forty.m4a') };
const FIFTY = { text: 'fifty', audio: new Audio('./audio/fifty.m4a') };
const SIXTY = { text: 'sixty', audio: new Audio('./audio/sixty.m4a') };
const SEVENTY = { text: 'seventy', audio: new Audio('./audio/seventy.m4a') };
const EIGHTY = { text: 'eighty', audio: new Audio('./audio/eighty.m4a') };
const NINETY = { text: 'ninety', audio: new Audio('./audio/ninety.m4a') };
const HUNDRED = { text: 'hundred', audio: new Audio('./audio/hundred.m4a') };
const THOUSAND = { text: 'thousand', audio: new Audio('./audio/thousand.m4a') };
const AND = { text: 'and', audio: new Audio('./audio/and.m4a') };

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
