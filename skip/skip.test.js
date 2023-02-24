'use strict';

const $skip = require('../skip');
const orders = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }, { a: 7 }];

(function () {
  console.log(orders);

  console.log("\nCase 1: Skips first 4 items from the array.");
  console.log($skip(orders, 4));

  console.log("\nCase 2: Skips no items from the array.");
  console.log($skip(orders));

  console.log("\nCase 3: Ignores skip value.");
  console.log($skip(orders, "2"));
})();