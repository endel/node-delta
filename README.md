node-delta [![Build Status](https://secure.travis-ci.org/endel/node-delta.svg?branch=master)](http://travis-ci.org/endel/node-delta)
===

An efficient delta compression algorithm for Node.js. (C++ addon)

**Requires NodeJS v4 or higher**

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
(create) node-delta x 266,036 ops/sec ±3.01% (69 runs sampled)
(create) fossil-delta x 199,668 ops/sec ±1.95% (82 runs sampled)
```

References
---

- [Fossil Delta Format](http://fossil-scm.org/xfer/doc/trunk/www/delta_format.wiki)
- [Pure JavaScript port](https://github.com/dchest/fossil-delta-js)
- [C# port](https://github.com/endel/FossilDelta)

License
---

MIT
