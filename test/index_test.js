const test = require('assert');
const AramaicNumber = require('../build/aramaic-number');

describe('Hebrew', () => {
  const mapper = new AramaicNumber('hebrew');
  describe('Number => Letters', () => {
    it('General case', () => {
      const number = mapper.getNumber(5774);
      const word = 'התשע"ד';
      test.strictEqual(number, word, 'getNumber_generic');
    });
    it('Truncate to Limit', () => {
      const number = mapper.getNumber(5774, 3);
      const word = 'תשע"ד';
      test.strictEqual(number, word, 'getNumber_generic');
    });
    it('Limit but un-truncated', () => {
      const number = mapper.getNumber(5774, 7);
      const word = 'התשע"ד';
      test.strictEqual(number, word, 'getNumber_generic');
    });
  });
});
