'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledProps = require('./styledProps');

var _styledProps2 = _interopRequireDefault(_styledProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bind = function bind(map) {
  return Object.keys(map).reduce(function (memo, key) {
    // eslint-disable-next-line no-param-reassign
    memo[key] = (0, _styledProps2.default)(map[key], key);
    return memo;
  }, {});
};

exports.default = bind;