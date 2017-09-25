/** @module aramaic */

/**
 * Hebrew letter to number mapping
 * @private
 * @const
 * @type { Object.<string, number> }
 */
const hebrewNumbers = Object.freeze(
  Object.create(null, {
    '': { value: 0, enumerable: true },
    א: { value: 1, enumerable: true },
    ב: { value: 2, enumerable: true },
    ג: { value: 3, enumerable: true },
    ד: { value: 4, enumerable: true },
    ה: { value: 5, enumerable: true },
    ו: { value: 6, enumerable: true },
    ז: { value: 7, enumerable: true },
    ח: { value: 8, enumerable: true },
    ט: { value: 9, enumerable: true },
    י: { value: 10, enumerable: true },
    כ: { value: 20, enumerable: true },
    ל: { value: 30, enumerable: true },
    מ: { value: 40, enumerable: true },
    נ: { value: 50, enumerable: true },
    ס: { value: 60, enumerable: true },
    ע: { value: 70, enumerable: true },
    פ: { value: 80, enumerable: true },
    צ: { value: 90, enumerable: true },
    ק: { value: 100, enumerable: true },
    ר: { value: 200, enumerable: true },
    ש: { value: 300, enumerable: true },
    ת: { value: 400, enumerable: true },
    תק: { value: 500, enumerable: true },
    תר: { value: 600, enumerable: true },
    תש: { value: 700, enumerable: true },
    תת: { value: 800, enumerable: true },
    תתק: { value: 900, enumerable: true },
    תתר: { value: 1000, enumerable: true }
  })
);

/**
 * Syriac letter to number mapping
 * @private
 * @const
 * @type { Object.<string, number> }
 */
const syriacNumbers = Object.freeze(
  Object.create(null, {
    '': { value: 0, enumerable: true },
    ܐ: { value: 1, enumerable: true },
    ܒ: { value: 2, enumerable: true },
    ܓ: { value: 3, enumerable: true },
    ܕ: { value: 4, enumerable: true },
    ܗ: { value: 5, enumerable: true },
    ܘ: { value: 6, enumerable: true },
    ܙ: { value: 7, enumerable: true },
    ܚ: { value: 8, enumerable: true },
    ܛ: { value: 9, enumerable: true },
    ܝ: { value: 10, enumerable: true },
    ܟ: { value: 20, enumerable: true },
    ܠ: { value: 30, enumerable: true },
    ܡ: { value: 40, enumerable: true },
    ܢ: { value: 50, enumerable: true },
    ܣ: { value: 60, enumerable: true },
    ܥ: { value: 70, enumerable: true },
    ܦ: { value: 80, enumerable: true },
    ܨ: { value: 90, enumerable: true },
    ܩ: { value: 100, enumerable: true },
    ܪ: { value: 200, enumerable: true },
    ܫ: { value: 300, enumerable: true },
    ܬ: { value: 400, enumerable: true },
    ܬܟ: { value: 500, enumerable: true },
    ܬܪ: { value: 600, enumerable: true },
    ܬܫ: { value: 700, enumerable: true },
    ܬܬ: { value: 800, enumerable: true },
    ܬܬܟ: { value: 900, enumerable: true },
    ܬܬܪ: { value: 1000, enumerable: true }
  })
);

/**
 * CAL ASCII code letter to number mapping
 * @private
 * @const
 * @type { Object.<string, number> }
 */
const calNumbers = Object.freeze(
  Object.create(null, {
    '': { value: 0, enumerable: true },
    ')': { value: 1, enumerable: true },
    b: { value: 2, enumerable: true },
    g: { value: 3, enumerable: true },
    d: { value: 4, enumerable: true },
    h: { value: 5, enumerable: true },
    w: { value: 6, enumerable: true },
    z: { value: 7, enumerable: true },
    x: { value: 8, enumerable: true },
    T: { value: 9, enumerable: true },
    y: { value: 10, enumerable: true },
    k: { value: 20, enumerable: true },
    l: { value: 30, enumerable: true },
    m: { value: 40, enumerable: true },
    n: { value: 50, enumerable: true },
    s: { value: 60, enumerable: true },
    '(': { value: 70, enumerable: true },
    p: { value: 80, enumerable: true },
    c: { value: 90, enumerable: true },
    q: { value: 100, enumerable: true },
    r: { value: 200, enumerable: true },
    $: { value: 300, enumerable: true },
    t: { value: 400, enumerable: true },
    tq: { value: 500, enumerable: true },
    tr: { value: 600, enumerable: true },
    t$: { value: 700, enumerable: true },
    tt: { value: 800, enumerable: true },
    ttq: { value: 900, enumerable: true },
    ttr: { value: 1000, enumerable: true }
  })
);

/**
 * Aggregated letter to number mapping hash
 * @private
 * @const
 * @type { Object.<string, Object.<string, number>> }
 */
const numberMaps = Object.freeze(
  Object.create(null, {
    hebrew: { enumerable: true, value: hebrewNumbers },
    syriac: { enumerable: true, value: syriacNumbers },
    cal: { enumerable: true, value: calNumbers }
  })
);

/**
 * Returns a copy of the object where the keys have become the values and the
 * values the keys.
 * @private
 * @const
 * @param { Object } obj object
 * @returns { Object } new object with properties reverted
 */
const invert = obj => {
  const result = Object.create(null, {});
  const keys = Object.keys(obj);
  for (let i = 0, { length } = keys; i < length; i++) {
    Object.defineProperty(result, obj[keys[i]], {
      value: keys[i],
      enumerable: true
    });
  }

  return Object.freeze(result);
};

/**
 * Aggregated number to letter mapping hash
 * @private
 * @const
 * @type { Object.<string, Object.<string, number>> }
 */
const letterMaps = Object.create(null, {
  hebrew: { value: invert(hebrewNumbers), enumerable: true },
  syriac: { value: invert(syriacNumbers), enumerable: true },
  cal: { value: invert(calNumbers), enumerable: true }
});

/**
  * @class AramaicNumber
  * @classdesc Convert numbers to/from various Aramaic writings. `hebrew`
  * `syriac` and `cal` are supported at this time.
  * @static
  * @constructor
  * @param { string|undefined } writing can be: `hebrew`, `syriac` or `cal`.
  * Defaults to `cal`, if value is not provided.
 */
export default function AramaicNumber(writing) {
  const w = (writing || 'cal').toLowerCase();
  const numbers = numberMaps[w];
  const letters = letterMaps[w];
  if (!numbers) {
    throw new TypeError(`Unsupported ${writing} writing`);
  }

  /**
   * Get number in alphabetic form if input is number, or numeric form if input
   * is alphabetic.
   * When passing a string, by default, it just adds up the numbers, regardless
   * of position. By passing `true` as a second parameter, it will treat it as
   * being ordered.
   *
   * When passing a number, a second parameter is available, `limit`. This will
   * limit the length of the returned string to a number of digits. For example:
   *
   * ```js
   * getNumber(5774) // התשע"ד - ordinary
   * getNumber(5774, 3) // תשע"ד - cropped to 774
   * getNumber(5774, 7) // התשע"ד - kept at 5774
   * ```
   * @alias module:aramaic.AramaicNumber#getNumber
   * @param { string } number input number to be converted
   * @param { number|boolean|undefined } limit maximum number of characters
   * @returns { string } converted number
   */
  this.getNumber = (number, limit) => {
    let num = number;
    if (typeof num !== 'number' && typeof num !== 'string') {
      throw new TypeError('Expected number or string for getNumber argument');
    }
    const str = typeof num === 'string';
    if (str) {
      num = num.replace(/('|")/g, '');
    }
    num = num
      .toString()
      .split('')
      .reverse();
    if (!str && limit) {
      num = num.slice(0, limit);
    }

    num = num.map(function g(n, i) {
      if (str) {
        return limit && numbers[n] < numbers[num[i - 1]] && numbers[n] < 100
          ? numbers[n] * 1000
          : numbers[n];
      }
      if (parseInt(n, 10) * (10 ** i) > 1000) {
        return g(n, i - 3);
      }
      return letters[parseInt(n, 10) * (10 ** i)];
    });

    if (str) {
      return num.reduce((o, t) => o + t, 0);
    }

    if (w === 'hebrew') {
      num = num
        .reverse()
        .join('')
        .replace(/יה/g, 'טו')
        .replace(/יו/g, 'טז')
        .split('');

      if (num.length === 1) {
        num.push("'");
      } else if (num.length > 1) {
        num.splice(-1, 0, '"');
      }

      return num.join('');
    }

    return num.reverse().join('');
  };
}

