///<reference path="../../index.d.ts" />
import * as fossilDelta from "node-delta";

var origin = new Buffer([1,2,3]);
var target = new Buffer([1,2,3,4,5,6]);

var delta = fossilDelta.create(origin, target);
var targetApplied = fossilDelta.apply(origin, delta);
