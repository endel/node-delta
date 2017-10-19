const nodeDelta = require('../');
const fossilDelta = require('fossil-delta');
const msgpack = require('msgpack-lite');
const Benchmark = require('benchmark');

var obj1 = {
  name: "Hello",
  number: 10,
  deep: [1,2,3,4],
  deepObj: {
    arr: [1,2,3],
    obj: {another: 2}
  }
}

var obj2 = {
  name: "Hey there!",
  newAttribute: 10,
  deep: [1,2,3,5],
  deepObj: {
    arr: [1,3],
    obj: {another: 2, something: 10},
    anotherNew: 5
  }
}

let packed1 = msgpack.encode(obj1);
let packed2 = msgpack.encode(obj2);
let patch = nodeDelta.create(packed1, packed2);

let createSuite = new Benchmark.Suite()

createSuite.add('(create) node-delta', function() {
  nodeDelta.create(packed1, packed2);
});

createSuite.add('(create) fossil-delta', function() {
  fossilDelta.create(packed1, packed2);
});

createSuite.on('cycle', function(event) {
  console.log(String(event.target));
});

createSuite.run();

let applySuite = new Benchmark.Suite()

applySuite.add('(apply) node-delta', function() {
  nodeDelta.apply(packed1, patch);
});

applySuite.add('(apply) fossil-delta', function() {
  fossilDelta.apply(packed1, patch);
});

applySuite.on('cycle', function(event) {
  console.log(String(event.target));
});

applySuite.run();
