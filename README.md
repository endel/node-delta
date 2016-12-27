node-delta [![Build Status](https://secure.travis-ci.org/endel/node-delta.png?branch=master)](http://travis-ci.org/endel/node-delta)
===

An efficient delta compression algorithm for Node.js. (C++ addon)

**Requires Node.js 0.10+**

Usage
---

```
const nDelta = require('node-delta');
```

Creating delta between `origin` and `target` buffer:

```
var origin = new Buffer([1,2,3,4]);
var target = new Buffer([1,2,3,4,5,6]);
var delta = nDelta.create(origin, target);
```

Applying the delta:

```
var origin = new Buffer([1,2,3,4]);
var target = nDelta.apply(origin, delta);
```

Benchmarks
---

```
node-delta x 228,969 ops/sec ±3.87% (65 runs sampled)
fossil-delta x 178,216 ops/sec ±3.80% (76 runs sampled)
```

References
---

- [Fossil Delta Format](http://fossil-scm.org/xfer/doc/trunk/www/delta_format.wiki)
- [Pure JavaScript port](https://github.com/dchest/fossil-delta-js)
- [C# port](https://github.com/endel/FossilDelta)

License
---

MIT
