Multi-hash
==========

[![Build Status](https://travis-ci.org/tinybike/multi-hash.svg)](https://travis-ci.org/tinybike/multi-hash)
[![Coverage Status](https://coveralls.io/repos/tinybike/multi-hash/badge.svg?branch=master&service=github)](https://coveralls.io/github/tinybike/multi-hash?branch=master)
[![npm version](https://badge.fury.io/js/multi-hash.svg)](http://badge.fury.io/js/multi-hash)

Multi-hash encoder/decoder.  Only supports sha256 multi-hash (the [IPFS](https://ipfs.io/) default) for now; will add more soon.

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
Multi-hash includes `encode` and `decode` functions.  `encode` accepts a 32-byte buffer or hex-encoded string, and converts it to a base58-encoded multi-hash string.
```javascript
var hex = "4afeb08a2bf63b8e42f4b67bd92dbf7e4a23f991c7acf0236a9d1c04462db278";

var ipfsHash = multihash.encode(hex);
// ipfsHash: QmPH4nmLYxgWyq9FqpzvxAEPZ5ZdwGZjmvusLqPDCk7mu1
```
`decode` accepts a base58-encoded multi-hash string, and converts it to a 32-byte buffer with the multi-hash prefix removed.
```javascript
var buf = multihash.decode(ipfsHash);
// buf: <Buffer 4a fe b0 8a 2b f6 3b 8e 42 f4 b6 7b d9 2d bf 7e 4a 23 f9 91 c7
//              ac f0 23 6a 9d 1c 04 46 2d b2 78>
```

Tests
-----

Unit tests are included in `test/`, and can be run using Mocha:
```
$ mocha
```
