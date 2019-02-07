require('./zero.m4a');
require('./one.m4a');
require('./two.m4a');
require('./three.m4a');
require('./four.m4a');
require('./five.m4a');
require('./six.m4a');
require('./seven.m4a');
require('./eight.m4a');
require('./nine.m4a');
require('./ten.m4a');
require('./eleven.m4a');
require('./twelve.m4a');
require('./thirteen.m4a');
require('./fourteen.m4a');
require('./fifteen.m4a');
require('./sixteen.m4a');
require('./seventeen.m4a');
require('./eighteen.m4a');
require('./nineteen.m4a');
require('./twenty.m4a');
require('./thirty.m4a');
require('./forty.m4a');
require('./fifty.m4a');
require('./sixty.m4a');
require('./seventy.m4a');
require('./eighty.m4a');
require('./ninety.m4a');
require('./hundred.m4a');
require('./thousand.m4a');
require('./and.m4a');

export const ZERO = { text: 'zero', audio: './zero.m4a' };
export const HUNDRED = { text: 'hundred', audio: './hundred.m4a' };
export const THOUSAND = { text: 'thousand', audio: './thousand.m4a' };
export const AND = { text: 'and', audio: './and.m4a' };

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
