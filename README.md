# aramaic-number

[![npm version](https://badge.fury.io/js/aramaic-number.svg)](https://badge.fury.io/js/aramaic-number)
[![npm module downloads](http://img.shields.io/npm/dt/aramaic-number.svg)](https://www.npmjs.org/package/aramaic-number)
[![Build Status](https://travis-ci.org/peshitta/aramaic-number.svg?branch=master)](https://travis-ci.org/peshitta/aramaic-number)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/aramaic-number/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/aramaic-number.svg)](https://david-dm.org/peshitta/aramaic-number)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/aramaic-number/badge.svg?branch=master)](https://coveralls.io/github/peshitta/aramaic-number?branch=master)
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Convert numbers to aramaic letters and back.

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install aramaic-number --save
```

Following bundles are available:
* `aramaic-number.js` - UMD ES5 version for use in browser, node, etc.
* `aramaic-number.min.js` - minified version of `aramaic-number.js`
* `aramaic-number.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/aramaic-number/-/aramaic-number-1.0.6.tgz](https://registry.npmjs.org/aramaic-number/-/aramaic-number-1.0.6.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/aramaic-number/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/aramaic-number/issues).

To read quick updates about Peshitta app or post questions or feedback, follow
[@peshittap](https://www.twitter.com/peshittap)
at [![@peshittap](http://i.imgur.com/wWzX9uB.png "@peshittap")](https://www.twitter.com/peshittap)or
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [aramaicNumber](#module_aramaicNumber)
    * [.AramaicNumber](#module_aramaicNumber.AramaicNumber)
        * [new AramaicNumber(writing)](#new_module_aramaicNumber.AramaicNumber_new)
        * [.getNumber(number, limit)](#module_aramaicNumber.AramaicNumber+getNumber) ⇒ <code>string</code>

<a name="module_aramaicNumber.AramaicNumber"></a>

### aramaicNumber.AramaicNumber
Convert numbers to/from various Aramaic writings. `hebrew`
`syriac` and `cal` are supported at this time.

**Kind**: static class of [<code>aramaicNumber</code>](#module_aramaicNumber)  

* [.AramaicNumber](#module_aramaicNumber.AramaicNumber)
    * [new AramaicNumber(writing)](#new_module_aramaicNumber.AramaicNumber_new)
    * [.getNumber(number, limit)](#module_aramaicNumber.AramaicNumber+getNumber) ⇒ <code>string</code>

<a name="new_module_aramaicNumber.AramaicNumber_new"></a>

#### new AramaicNumber(writing)

| Param | Type | Description |
| --- | --- | --- |
| writing | <code>string</code> \| <code>undefined</code> | can be: `hebrew`, `syriac` or `cal`. Defaults to `cal`, if value is not provided. |

<a name="module_aramaicNumber.AramaicNumber+getNumber"></a>

#### aramaicNumber.getNumber(number, limit) ⇒ <code>string</code>
Get number in alphabetic form if input is number, or numeric form if input
is alphabetic. When passing a string, by default, it will be treated as
ordered. By passing `truthy` as a second parameter, it will just add up the
letter numeric values, regardless of position.

When passing a number, a second parameter is available, `limit`. This will
limit the length of the returned string to a number of digits. For example:

```js
getNumber(5774) // התשע״ד - ordinary
getNumber(5774, 3) // תשע״ד - truncated to 774
getNumber(5774, 7) // התשע״ד - kept at 5774
```

**Kind**: instance method of [<code>AramaicNumber</code>](#module_aramaicNumber.AramaicNumber)  
**Returns**: <code>string</code> - converted number  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>string</code> | input number to be converted |
| limit | <code>number</code> \| <code>boolean</code> \| <code>undefined</code> | maximum number of characters |

