export const ZERO = 'zero';
export const HUNDRED = 'hundred';
export const THOUSAND = 'thousand';
export const MILLION = 'million';
export const BILLION = 'billion';
export const TRILLION = 'trillion';
export const AND = 'and';

const ONE = 'one';
const TWO = 'two';
const THREE = 'three';
const FOUR = 'four';
const FIVE = 'five';
const SIX = 'six';
const SEVEN = 'seven';
const EIGHT = 'eight';
const NINE = 'nine';
const TEN = 'ten';
const ELEVEN = 'eleven';
const TWELVE = 'twelve';
const THIRTEEN = 'thirteen';
const FOURTEEN = 'fourteen';
const FIFTEEN = 'fifteen';
const SIXTEEN = 'sixteen';
const SEVENTEEN = 'seventeen';
const EIGHTEEN = 'eighteen';
const NINETEEN = 'nineteen';
const TWENTY = 'twenty';
const THIRTY = 'thirty';
const FORTY = 'forty';
const FIFTY = 'fifty';
const SIXTY = 'sixty';
const SEVENTY = 'seventy';
const EIGHTY = 'eighty';
const NINETY = 'ninety';

export const zeroToNine = [[], [ONE], [TWO], [THREE], [FOUR], [FIVE], [SIX], [SEVEN], [EIGHT], [NINE]];
const tensAndUnits = ten => zeroToNine.map((unit) => unit ? [ten, ...unit] : [ten]);

export const zeroToNinetyNine = [
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
