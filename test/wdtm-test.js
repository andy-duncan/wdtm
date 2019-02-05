import { describe, it } from 'mocha';
import assert from 'assert';

import { say } from '../src/wdtm';

describe('wdtm', function () {
  describe('say', function () {
    it('should know about zero', () => {
      assert.equal(say(0), 'zero');
    });
  });
});