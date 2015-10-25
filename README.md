Multi-hash
==========

[![Build Status](https://travis-ci.org/tinybike/multi-hash.svg)](https://travis-ci.org/tinybike/multi-hash)
[![Coverage Status](https://coveralls.io/repos/tinybike/multi-hash/badge.svg?branch=master&service=github)](https://coveralls.io/github/tinybike/multi-hash?branch=master)
[![npm version](https://badge.fury.io/js/multi-hash.svg)](http://badge.fury.io/js/multi-hash)

Multi-hash encoder/decoder.

Usage
-----
```
$ npm install multi-hash
```
To use in Node.js, simply require it:
```javascript
var multihash = require("multi-hash");
```
A minified, browserified file `dist/multihash.min.js` is included for use in the browser.  Including this file attaches a `multihash` object to `window`:
```html
<script src="dist/multihash.min.js" type="text/javascript"></script>
```

Tests
-----

Unit tests are included in `test/`, and can be run using Mocha:
```
$ mocha
```
