var assert = require("chai").assert;
var fs = require('fs');
var path = require('path');
var fossilDelta = require('../');

describe("node-delta", function() {
  it("should create and apply delta", function() {
    var NTESTS = 5;

    for (var i = 1; i <= NTESTS; i++) {
      var dir = path.join(__dirname, 'data', i.toString());

      var origin = fs.readFileSync(path.join(dir, 'origin'));
      var target = fs.readFileSync(path.join(dir, 'target'));
      var goodDelta = fs.readFileSync(path.join(dir, 'delta'));

      var delta = fossilDelta.create(origin, target);
      var applied = fossilDelta.apply(origin, delta);
      assert.deepEqual(delta, goodDelta);
      assert.deepEqual(applied, target);
    }
  });
});
