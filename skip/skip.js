'use strict';

const skip = (arr, skip) => (Array.isArray(arr) && typeof skip == 'number' && skip != NaN) ?
  arr.slice(skip) : arr;

module.exports = skip;