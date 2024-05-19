// index.js
import { PI, add, Rectangle } from './my-math.js';
import subtract from './def-subtract.js'
import * as util from './util.js';
import { multiply as mul } from './util.js';

console.log(add(2, 3)); // 5
console.log(subtract(5, 3)); // 2
console.log(PI); // 3.14
console.log(new Rectangle(5, 8).width); // 8
console.log(util.multiply(2, 3)); // 6
console.log(mul(3, 4)); // 12
