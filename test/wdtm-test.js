import { describe, it } from 'mocha';
import assert from 'assert';
import { init } from '../src/wdtm';

const { text } = init();

describe('wdtm', function () {
  describe('text', function () {

    describe('elements', () => {
      it('zero', () => {
        assert.equal(text(0), 'zero');
      });

      it('one', () => {
        assert.equal(text(1), 'one');
      });

      it('two', () => {
        assert.equal(text(2), 'two');
      });

      it('three', () => {
        assert.equal(text(3), 'three');
      });

      it('four', () => {
        assert.equal(text(4), 'four');
      });

      it('five', () => {
        assert.equal(text(5), 'five');
      });

      it('six', () => {
        assert.equal(text(6), 'six');
      });

      it('seven', () => {
        assert.equal(text(7), 'seven');
      });

      it('eight', () => {
        assert.equal(text(8), 'eight');
      });

      it('nine', () => {
        assert.equal(text(9), 'nine');
      });

      it('ten', () => {
        assert.equal(text(10), 'ten');
      });

      it('eleven', () => {
        assert.equal(text(11), 'eleven');
      });

      it('twelve', () => {
        assert.equal(text(12), 'twelve');
      });

      it('thirteen', () => {
        assert.equal(text(13), 'thirteen');
      });

      it('fourteen', () => {
        assert.equal(text(14), 'fourteen');
      });

      it('fifteen', () => {
        assert.equal(text(15), 'fifteen');
      });

      it('sixteen', () => {
        assert.equal(text(16), 'sixteen');
      });

      it('seventeen', () => {
        assert.equal(text(17), 'seventeen');
      });

      it('eighteen', () => {
        assert.equal(text(18), 'eighteen');
      });

      it('nineteen', () => {
        assert.equal(text(19), 'nineteen');
      });
    });

    describe('combinations to a hundred', () => {
      it('twenty one', () => {
        assert.equal(text(21), 'twenty one');
      });

      it('thirty two', () => {
        assert.equal(text(32), 'thirty two');
      });

      it('forty three', () => {
        assert.equal(text(43), 'forty three');
      });

      it('fifty four', () => {
        assert.equal(text(54), 'fifty four');
      });

      it('sixty five', () => {
        assert.equal(text(65), 'sixty five');
      });

      it('seventy six', () => {
        assert.equal(text(76), 'seventy six');
      });

      it('eighty seven', () => {
        assert.equal(text(87), 'eighty seven');
      });

      it('ninety eight', () => {
        assert.equal(text(98), 'ninety eight');
      });
    });

    describe('hundreds', () => {
      it('one hundred', () => {
        assert.equal(text(100), 'one hundred');
      });

      it('two hundred', () => {
        assert.equal(text(200), 'two hundred');
      });

      it('three hundred', () => {
        assert.equal(text(300), 'three hundred');
      });

      it('four hundred', () => {
        assert.equal(text(400), 'four hundred');
      });

      it('five hundred', () => {
        assert.equal(text(500), 'five hundred');
      });

      it('six hundred', () => {
        assert.equal(text(600), 'six hundred');
      });

      it('seven hundred', () => {
        assert.equal(text(700), 'seven hundred');
      });

      it('eight hundred', () => {
        assert.equal(text(800), 'eight hundred');
      });

      it('nine hundred', () => {
        assert.equal(text(900), 'nine hundred');
      });
    });

    describe('thousands', () => {
      it('one thousand', () => {
        assert.equal(text(1000), 'one thousand');
      });

      it('seven thousand and seven', () => {
        assert.equal(text(7007), 'seven thousand and seven');
      });

      it('two thousand four hundred', () => {
        assert.equal(text(2400), 'two thousand four hundred');
      });

      it('four thousand two hundred and twelve', () => {
        assert.equal(text(4212), 'four thousand two hundred and twelve');
      });

      it('one hundred and twenty two thousand five hundred and sixty nine', () => {
        assert.equal(text(122569), 'one hundred and twenty two thousand five hundred and sixty nine');
      });
    });

    describe('millions', () => {
      it('one million', () => {
        assert.equal(text(1000000), 'one million');
      });

      it('one million and twenty three', () => {
        assert.equal(text(1000023), 'one million and twenty three');
      });

      it('forty seven million two hundred and eighty', () => {
        assert.equal(text(47000280), 'forty seven million two hundred and eighty');
      });

      it('two million four hundred thousand', () => {
        assert.equal(text(2400000), 'two million four hundred thousand');
      });

      it('two million four hundred thousand three hundred', () => {
        assert.equal(text(2400300), 'two million four hundred thousand three hundred');
      });

      it('two million four hundred thousand three hundred and eleven', () => {
        assert.equal(text(2400311), 'two million four hundred thousand three hundred and eleven');
      });

      it('four million two hundred and twelve thousand', () => {
        assert.equal(text(4212000), 'four million two hundred and twelve thousand');
      });

      it('four hundred and twenty three million one hundred and twenty two thousand five hundred ', () => {
        assert.equal(text(423122500), 'four hundred and twenty three million one hundred and twenty two thousand five hundred');
      });

      it('four hundred and twenty three million one hundred and twenty two thousand and sixty nine', () => {
        assert.equal(text(423122069), 'four hundred and twenty three million one hundred and twenty two thousand and sixty nine');
      });

      it('four hundred and twenty three million one hundred and twenty two thousand five hundred and sixty nine', () => {
        assert.equal(text(423122569), 'four hundred and twenty three million one hundred and twenty two thousand five hundred and sixty nine');
      });
    });

    describe('billions', () => {
      it('one billion', () => {
        assert.equal(text(1000000000), 'one billion');
      });

      it('one billion and twenty three', () => {
        assert.equal(text(1000000023), 'one billion and twenty three');
      });

      it('forty seven billion two hundred and eighty', () => {
        assert.equal(text(47000000280), 'forty seven billion two hundred and eighty');
      });

      it('two billion four hundred million four hundred thousand four hundred', () => {
        assert.equal(text(2400400400), 'two billion four hundred million four hundred thousand four hundred');
      });

      it('thirty two billion four hundred thousand three hundred', () => {
        assert.equal(text(32000400300), 'thirty two billion four hundred thousand three hundred');
      });

      it('two billion four hundred million three hundred and eleven', () => {
        assert.equal(text(2400000311), 'two billion four hundred million three hundred and eleven');
      });

      it('four billion two hundred and twelve million', () => {
        assert.equal(text(4212000000), 'four billion two hundred and twelve million');
      });

      it('four hundred and twenty three billion one hundred and twenty two thousand five hundred ', () => {
        assert.equal(text(423000122500), 'four hundred and twenty three billion one hundred and twenty two thousand five hundred');
      });

      it('four hundred and twenty three billion one hundred and twenty two thousand and sixty nine', () => {
        assert.equal(text(423000122069), 'four hundred and twenty three billion one hundred and twenty two thousand and sixty nine');
      });
    });

    describe('trillions', () => {
      it('one trillion', () => {
        assert.equal(text(1000000000000), 'one trillion');
      });

      it('one trillion and twenty three', () => {
        assert.equal(text(1000000000023), 'one trillion and twenty three');
      });

      it('forty seven trillion two hundred and eighty', () => {
        assert.equal(text(47000000000280), 'forty seven trillion two hundred and eighty');
      });

      it('two trillion four hundred billion four hundred million four hundred thousand four hundred', () => {
        assert.equal(text(2400400400400), 'two trillion four hundred billion four hundred million four hundred thousand four hundred');
      });

      it('thirty two trillion four hundred thousand three hundred', () => {
        assert.equal(text(32000000400300), 'thirty two trillion four hundred thousand three hundred');
      });

      it('two trillion four hundred million three hundred and eleven', () => {
        assert.equal(text(2000400000311), 'two trillion four hundred million three hundred and eleven');
      });

      it('four trillion two hundred and twelve million', () => {
        assert.equal(text(4000212000000), 'four trillion two hundred and twelve million');
      });

      it('four hundred and twenty three trillion one hundred and twenty two thousand five hundred ', () => {
        assert.equal(text(423000000122500), 'four hundred and twenty three trillion one hundred and twenty two thousand five hundred');
      });

      it('four hundred and twenty three trillion one hundred and twenty two thousand and sixty nine', () => {
        assert.equal(text(423000000122069), 'four hundred and twenty three trillion one hundred and twenty two thousand and sixty nine');
      });
    });
  });
});