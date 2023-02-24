'use strict';

const limit = (arr, limit) => (Array.isArray(arr) && typeof limit == 'number' && limit != NaN) ? arr.slice(0, limit) : arr;

module.exports = limit;