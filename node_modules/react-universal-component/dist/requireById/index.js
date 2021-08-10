'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return module.require('' + id);
  }

  return __webpack_require__('' + id);
};

exports.default = requireById;