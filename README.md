node-delta [![Build Status](https://secure.travis-ci.org/endel/node-delta.svg?branch=master)](http://travis-ci.org/endel/node-delta) [![Build status](https://ci.appveyor.com/api/projects/status/m3shq2gxu1a1hk91?svg=true)](https://ci.appveyor.com/project/endel/node-delta)
===

An efficient delta compression algorithm for Node.js, written in C. ([see original source code](http://fossil-scm.org/xfer/artifact/e5c5c088b05441b7))

**Requires NodeJS v4 or higher**

Usage
---

```
const fossilDelta = require('node-delta');
```

Creating delta between `origin` and `target` buffer:

```
var origin = new Buffer([1,2,3,4]);
var target = new Buffer([1,2,3,4,5,6]);
var delta = fossilDelta.create(origin, target);
```

Applying the delta:

```
var origin = new Buffer([1,2,3,4]);
var target = fossilDelta.apply(origin, delta);
```

Benchmarks
---

For creating the patch, [node-delta](https://github.com/endel/node-delta/) has the best results. (roughly ~2x speed)

```
(create) node-delta x 313,371 ops/sec ±1.76% (77 runs sampled)
(create) fossil-delta x 238,424 ops/sec ±3.58% (75 runs sampled)
```

For applying the patch, [fossil-delta-js](https://github.com/dchest/fossil-delta-js) still have the best results.

```
(apply) node-delta x 664,472 ops/sec ±5.44% (69 runs sampled)
(apply) fossil-delta x 860,541 ops/sec ±1.57% (84 runs sampled)
```

References
---

- [Fossil Delta Format](http://fossil-scm.org/xfer/doc/trunk/www/delta_format.wiki)
- [Pure JavaScript port](https://github.com/dchest/fossil-delta-js)
- [C# port](https://github.com/endel/FossilDelta)

License
---

MIT
