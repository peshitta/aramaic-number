const test = require('assert');
const AramaicNumber = require('../build/aramaic-number');

describe('Hebrew', () => {
  const mapper = new AramaicNumber('hebrew');
  describe('Number => Letters', () => {
    it('General case', () => {
      const number = mapper.getNumber(5774);
      const word = 'התשע״ד';
      test.strictEqual(number, word, 'getNumber_generic');
    });
    it('Another general case', () => {
      const number = mapper.getNumber(774);
      const word = 'תשע״ד';
      test.strictEqual(number, word, 'getNumber_generic');
    });
    it('Truncate to Limit', () => {
      const number = mapper.getNumber(5774, 3);
      const word = 'תשע״ד';
      test.strictEqual(number, word, 'getNumber_generic');
    });
    it('Limit but un-truncated', () => {
      const number = mapper.getNumber(5774, 7);
      const word = 'התשע״ד';
      test.strictEqual(number, word, 'getNumber_generic');
    });
    it('טו case', () => {
      const number = mapper.getNumber(15);
      const word = 'ט״ו';
      test.strictEqual(number, word, 'getNumber_טו');
    });
    it('טז case', () => {
      const number = mapper.getNumber(16);
      const word = 'ט״ז';
      test.strictEqual(number, word, 'getNumber_טז');
    });
    it('Single digit with Geresh', () => {
      const number = mapper.getNumber(10);
      const word = 'י׳';
      test.strictEqual(number, word, 'getNumber_י');
    });
    it('Another single digit with Geresh', () => {
      const number = mapper.getNumber(9);
      const word = 'ט׳';
      test.strictEqual(number, word, 'getNumber_ט');
    });
  });
  describe('Letters => Number', () => {
    it('General case', () => {
      const number = mapper.getNumber('התשע״ד');
      const word = 5774;
      test.strictEqual(number, word, 'getNumber_generic with gershayim');
    });
    it('Truncate to Limit', () => {
      const number = mapper.getNumber('תשע״ד');
      const word = 774;
      test.strictEqual(
        number,
        word,
        'getNumber_generic shorter with gershayim'
      );
    });
    it('Limit but un-truncated', () => {
      const number = mapper.getNumber('התשע״ד', true);
      const word = 779;
      test.strictEqual(
        number,
        word,
        'getNumber_generic un-ordered with gershayim'
      );
    });
    it('טו case', () => {
      const number = mapper.getNumber('ט״ו');
      const word = 15;
      test.strictEqual(number, word, 'getNumber_טו');
    });
    it('טז case', () => {
      const number = mapper.getNumber('ט״ז');
      const word = 16;
      test.strictEqual(number, word, 'getNumber_טז');
    });
    it('יה case', () => {
      const number = mapper.getNumber('יה');
      const word = 15;
      test.strictEqual(number, word, 'getNumber_יה');
    });
    it('יו case', () => {
      const number = mapper.getNumber('יו');
      const word = 16;
      test.strictEqual(number, word, 'getNumber_יו');
    });
    it('Single digit with Geresh', () => {
      const number = mapper.getNumber('י׳');
      const word = 10;
      test.strictEqual(number, word, 'getNumber_י');
    });
    it('Single digit with single quote', () => {
      const number = mapper.getNumber("'ט");
      const word = 9;
      test.strictEqual(number, word, 'getNumber_ט');
    });
    it('General case with quote', () => {
      const number = mapper.getNumber('התשע"ד');
      const word = 5774;
      test.strictEqual(number, word, 'getNumber_generic with quote');
    });
    it('Truncate to Limit with quote', () => {
      const number = mapper.getNumber('תשע"ד');
      const word = 774;
      test.strictEqual(number, word, 'getNumber_generic shorter with quote');
    });
    it('Limit but un-truncated with quote', () => {
      const number = mapper.getNumber('התשע"ד', true);
      const word = 779;
      test.strictEqual(number, word, 'getNumber_generic un-ordered with quote');
    });
    it('General case with single quote', () => {
      const number = mapper.getNumber('התשע"ד');
      const word = 5774;
      test.strictEqual(number, word, 'getNumber_generic with single quote');
    });
    it('Truncate to Limit with single quote', () => {
      const number = mapper.getNumber('תשע"ד');
      const word = 774;
      test.strictEqual(
        number,
        word,
        'getNumber_generic shorter with single quote'
      );
    });
    it('Limit but un-truncated with single quote', () => {
      const number = mapper.getNumber('התשע"ד', true);
      const word = 779;
      test.strictEqual(
        number,
        word,
        'getNumber_generic un-ordered with single quote'
      );
    });
  });
});
describe('Syriac', () => {
  const mapper = new AramaicNumber('syriac');
  describe('Number => Letters', () => {
    it('General case', () => {
      const number = mapper.getNumber(5774);
      const word = 'ܗܬܫܥܕ';
      test.strictEqual(number, word, 'getNumber_generic');
    });
    it('Another general case', () => {
      const number = mapper.getNumber(774);
      const word = 'ܬܫܥܕ';
      test.strictEqual(number, word, 'getNumber_generic');
    });
    it('Truncate to Limit', () => {
      const number = mapper.getNumber(5774, 3);
      const word = 'ܬܫܥܕ';
      test.strictEqual(number, word, 'getNumber_generic');
    });
    it('Limit but un-truncated', () => {
      const number = mapper.getNumber(5774, 7);
      const word = 'ܗܬܫܥܕ';
      test.strictEqual(number, word, 'getNumber_generic');
    });
  });
  describe('Letters => Number', () => {
    it('General case', () => {
      const number = mapper.getNumber('ܗܬܫܥܕ');
      const word = 5774;
      test.strictEqual(number, word, 'getNumber_generic');
    });
    it('Truncate to Limit', () => {
      const number = mapper.getNumber('ܬܫܥܕ');
      const word = 774;
      test.strictEqual(number, word, 'getNumber_generic shorter');
    });
    it('Limit but un-truncated', () => {
      const number = mapper.getNumber('ܗܬܫܥܕ', true);
      const word = 779;
      test.strictEqual(number, word, 'getNumber_generic un-ordered');
    });
  });
});
describe('CAL', () => {
  let mapper = new AramaicNumber();
  describe('Number => Letters', () => {
    it('Default to CAL', () => {
      const number = mapper.getNumber(5774);
      const word = 'ht$(d';
      test.strictEqual(number, word, 'getNumber_generic');
    });
  });
  mapper = new AramaicNumber('cal');
  describe('Number => Letters', () => {
    it('General case', () => {
      const number = mapper.getNumber(5774);
      const word = 'ht$(d';
      test.strictEqual(number, word, 'getNumber_generic');
    });
    it('Another general case', () => {
      const number = mapper.getNumber(774);
      const word = 't$(d';
      test.strictEqual(number, word, 'getNumber_generic');
    });
    it('Truncate to Limit', () => {
      const number = mapper.getNumber(5774, 3);
      const word = 't$(d';
      test.strictEqual(number, word, 'getNumber_generic');
    });
    it('Limit but un-truncated', () => {
      const number = mapper.getNumber(5774, 7);
      const word = 'ht$(d';
      test.strictEqual(number, word, 'getNumber_generic');
    });
  });
  describe('Letters => Number', () => {
    it('General case', () => {
      const number = mapper.getNumber('ht$(d');
      const word = 5774;
      test.strictEqual(number, word, 'getNumber_generic');
    });
    it('Truncate to Limit', () => {
      const number = mapper.getNumber('t$(d');
      const word = 774;
      test.strictEqual(number, word, 'getNumber_generic shorter');
    });
    it('Limit but un-truncated', () => {
      const number = mapper.getNumber('ht$(d', true);
      const word = 779;
      test.strictEqual(number, word, 'getNumber_generic un-ordered');
    });
  });
});
describe('Non numeric or non-string input throws', () => {
  it('Object input', () => {
    test.throws(() => {
      const mapper = new AramaicNumber();
      const number = mapper.getNumber({});
      test.strictEqual(number, null, 'Should have never gotten here');
    }, TypeError);
  });
});
describe('Unknown writing throws', () => {
  it('Non hebrew/syriac/cal writing', () => {
    test.throws(() => {
      const mapper = new AramaicNumber('Wrong value');
      test.strictEqual(mapper, null, 'Should have not gotten here');
    }, TypeError);
  });
});
