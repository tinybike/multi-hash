/**
 * Multi-hash unit tests.
 * @author Jack Peterson (jack@tinybike.net)
 */

"use strict";

var fs = require("fs");
var join = require("path").join;
var assert = require("chai").assert;
var multihash = require("../");

var ipfsHashes = fs.readFileSync(join(__dirname, "ipfs-base58.dat")).toString().split('\n');
var ipfsHex = fs.readFileSync(join(__dirname, "ipfs-hex.dat")).toString().split('\n');

describe("encode", function () {

    var test = function (t) {
        it(t.input + " -> " + t.expected, function () {
            assert.strictEqual(multihash.encode(t.input), t.expected);
        });
    };

    var test_throws = function (t) {
        it(t.input, function () {
            assert.throws(function () { multihash.encode(t.input); });
        });
    };

    for (var i = 0, len = ipfsHex.length; i < len; ++i) {
        test({
            input: ipfsHex[i],
            expected: ipfsHashes[i]
        });
        test_throws({ input: ipfsHex[i].slice(3) });
        test_throws({ input: parseInt(ipfsHex[i]) });
    }

});

describe("decode", function () {

    var test = function (t) {
        it(t.input + " -> " + t.expected, function () {
            assert.strictEqual(multihash.decode(t.input).toString("hex"), t.expected);
        });
    };

    var test_throws = function (t) {
        it(t.input, function () {
            assert.throws(function () { multihash.decode(t.input); });
        });
    };

    for (var i = 0, len = ipfsHashes.length; i < len; ++i) {
        test({
            input: ipfsHashes[i],
            expected: ipfsHex[i].replace("0x", "")
        });
        test_throws({ input: ipfsHashes[i].slice(1) });
        test_throws({ input: ipfsHashes[i].slice(0, ipfsHashes[i].length-1) });
        test_throws({ input: parseInt(ipfsHashes[i]) });
    }

});
