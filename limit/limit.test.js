'use strict';

const $limit = require('../limit');
const orders = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }, { a: 7 }];

(function () {
  console.log(orders);

  console.log("\nCase 1: Limit first 4 items from the array.");
  console.log($limit(orders, 4));

  console.log("\nCase 2: Limits no items from the array.");
  console.log($limit(orders));

  console.log("\nCase 3: Ignores limit value.");
  console.log($limit(orders, "2"));
})();