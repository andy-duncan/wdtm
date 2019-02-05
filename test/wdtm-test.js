import { describe, it } from 'mocha';
import assert from 'assert';
import { say } from '../src/wdtm';

describe('wdtm', function () {
  describe('say', function () {

    describe('elements', () => {
      it('zero', () => {
        assert.equal(say(0), 'zero');
      });

      it('one', () => {
        assert.equal(say(1), 'one');
      });

      it('two', () => {
        assert.equal(say(2), 'two');
      });

      it('three', () => {
        assert.equal(say(3), 'three');
      });

      it('four', () => {
        assert.equal(say(4), 'four');
      });

      it('five', () => {
        assert.equal(say(5), 'five');
      });

      it('six', () => {
        assert.equal(say(6), 'six');
      });

      it('seven', () => {
        assert.equal(say(7), 'seven');
      });

      it('eight', () => {
        assert.equal(say(8), 'eight');
      });

      it('nine', () => {
        assert.equal(say(9), 'nine');
      });

      it('ten', () => {
        assert.equal(say(10), 'ten');
      });

      it('eleven', () => {
        assert.equal(say(11), 'eleven');
      });

      it('twelve', () => {
        assert.equal(say(12), 'twelve');
      });

      it('thirteen', () => {
        assert.equal(say(13), 'thirteen');
      });

      it('fourteen', () => {
        assert.equal(say(14), 'fourteen');
      });

      it('fifteen', () => {
        assert.equal(say(15), 'fifteen');
      });

      it('sixteen', () => {
        assert.equal(say(16), 'sixteen');
      });

      it('seventeen', () => {
        assert.equal(say(17), 'seventeen');
      });

      it('eighteen', () => {
        assert.equal(say(18), 'eighteen');
      });

      it('nineteen', () => {
        assert.equal(say(19), 'nineteen');
      });
    });

    describe('combinations to a hundred', () => {
      it('twenty one', () => {
        assert.equal(say(21), 'twenty one');
      });

      it('thirty two', () => {
        assert.equal(say(32), 'thirty two');
      });

      it('forty three', () => {
        assert.equal(say(43), 'forty three');
      });

      it('fifty four', () => {
        assert.equal(say(54), 'fifty four');
      });

      it('sixty five', () => {
        assert.equal(say(65), 'sixty five');
      });

      it('seventy six', () => {
        assert.equal(say(76), 'seventy six');
      });

      it('eighty seven', () => {
        assert.equal(say(87), 'eighty seven');
      });

      it('ninety eight', () => {
        assert.equal(say(98), 'ninety eight');
      });
    });

    describe('hundreds', () => {
      it('one hundred', () => {
        assert.equal(say(100), 'one hundred');
      });

      it('two hundred', () => {
        assert.equal(say(200), 'two hundred');
      });

      it('three hundred', () => {
        assert.equal(say(300), 'three hundred');
      });

      it('four hundred', () => {
        assert.equal(say(400), 'four hundred');
      });

      it('five hundred', () => {
        assert.equal(say(500), 'five hundred');
      });

      it('six hundred', () => {
        assert.equal(say(600), 'six hundred');
      });

      it('seven hundred', () => {
        assert.equal(say(700), 'seven hundred');
      });

      it('eight hundred', () => {
        assert.equal(say(800), 'eight hundred');
      });

      it('nine hundred', () => {
        assert.equal(say(900), 'nine hundred');
      });
    });

    describe('thousands', () => {
      it('one thousand', () => {
        assert.equal(say(1000), 'one thousand');
      });

      it('two thousand four hundred', () => {
        assert.equal(say(2400), 'two thousand four hundred');
      });

      it('four thousand two hundred and twelve', () => {
        assert.equal(say(4212), 'four thousand two hundred and twelve');
      });

      it('one hundred and twenty two thousand five hundred and sixty nine', () => {
        assert.equal(say(122569), 'one hundred and twenty two thousand five hundred and sixty nine');
      });
    });
  });
});