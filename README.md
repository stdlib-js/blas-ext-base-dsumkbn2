<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dsumkbn2

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the sum of double-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import dsumkbn2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsumkbn2@deno/mod.js';
```

#### dsumkbn2( N, x, stride )

Computes the sum of double-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var N = x.length;

var v = dsumkbn2( N, x, 1 );
// returns 1.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the sum of every other element in `x`,

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var N = floor( x.length / 2 );

var v = dsumkbn2( N, x, 2 );
// returns 5.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = dsumkbn2( N, x1, 2 );
// returns 5.0
```

#### dsumkbn2.ndarray( N, x, stride, offset )

Computes the sum of double-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm and alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var N = x.length;

var v = dsumkbn2.ndarray( N, x, 1, 0 );
// returns 1.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the sum of every other value in `x` starting from the second value

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var N = floor( x.length / 2 );

var v = dsumkbn2.ndarray( N, x, 2, 1 );
// returns 5.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import dsumkbn2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsumkbn2@deno/mod.js';

var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( randu()*100.0 );
}
console.log( x );

var v = dsumkbn2( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Klein, Andreas. 2005. "A Generalized Kahan-Babuška-Summation-Algorithm." _Computing_ 76 (3): 279–93. doi:[10.1007/s00607-005-0139-x][@klein:2005a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-ext/base/dnansumkbn2`][@stdlib/blas/ext/base/dnansumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring NaN values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/dsum`][@stdlib/blas/ext/base/dsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/dsumkbn`][@stdlib/blas/ext/base/dsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/dsumors`][@stdlib/blas/ext/base/dsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/dsumpw`][@stdlib/blas/ext/base/dsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/gsumkbn2`][@stdlib/blas/ext/base/gsumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/ssumkbn2`][@stdlib/blas/ext/base/ssumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-dsumkbn2.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-dsumkbn2

[test-image]: https://github.com/stdlib-js/blas-ext-base-dsumkbn2/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-dsumkbn2/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-dsumkbn2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-dsumkbn2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-dsumkbn2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-dsumkbn2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-dsumkbn2/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-dsumkbn2/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-dsumkbn2/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-dsumkbn2/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-dsumkbn2/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-dsumkbn2/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-dsumkbn2/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-dsumkbn2/main/LICENSE

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/deno

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@klein:2005a]: https://doi.org/10.1007/s00607-005-0139-x

<!-- <related-links> -->

[@stdlib/blas/ext/base/dnansumkbn2]: https://github.com/stdlib-js/blas-ext-base-dnansumkbn2/tree/deno

[@stdlib/blas/ext/base/dsum]: https://github.com/stdlib-js/blas-ext-base-dsum/tree/deno

[@stdlib/blas/ext/base/dsumkbn]: https://github.com/stdlib-js/blas-ext-base-dsumkbn/tree/deno

[@stdlib/blas/ext/base/dsumors]: https://github.com/stdlib-js/blas-ext-base-dsumors/tree/deno

[@stdlib/blas/ext/base/dsumpw]: https://github.com/stdlib-js/blas-ext-base-dsumpw/tree/deno

[@stdlib/blas/ext/base/gsumkbn2]: https://github.com/stdlib-js/blas-ext-base-gsumkbn2/tree/deno

[@stdlib/blas/ext/base/ssumkbn2]: https://github.com/stdlib-js/blas-ext-base-ssumkbn2/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
