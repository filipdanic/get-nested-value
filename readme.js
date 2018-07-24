/**
 * @fileoverview
 *
 * This package safely returns the value at a requested path inside of
 * an object. Best used on unpredictable deeply nested structures. Supports
 * arrays as well.
 *
 * Install:
 *  `npm install get-nested-value --save`
 *   # or
 *  `yarn add get-nested-value`
 *
 *
 *  Example:
 *  import getNestedValue from 'get-nestedValue';
 *
 *  getNestedValue('some.path.to.key', object);
 *  // or
 *  getNestedValue(['some', 'path', 'to', 'key'], object);
 *  // dealing with arrays?
 *  getNestedValue(['some', 'path', 'atIndex', 0, 'key'], object);
 *
 *  Notes:
 *  - Returns undefined if path does not exist.
 *  - Throws an Error if path is not a string or array.
 */

/**

 * @param {array|string} path – e.g ['key1', 0, 'key2'] or a string such as 'key1.0.key2
 * @param {object} object
 * @returns {*}
 */
var getNestedValue = function (path, object) {
  if (!Array.isArray(path) && typeof path !== 'string') {
    throw Error('The package get-nested-value received a non-contract path. Please provide a string or an array!');
  }
  var searchPath = path;
  if (!Array.isArray(path)) {
    searchPath = searchPath.split('.');
  }
  return searchPath
    .reduce(function (prev, cur) {
      if (prev && prev[cur] !== undefined) {
        return prev[cur];
      }
      return undefined;
    }, object);
};

module.exports = getNestedValue;
