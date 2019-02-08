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
  });
});