'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelTypes = require('babel-types');

var t = _interopRequireWildcard(_babelTypes);

var _options = require('../utils/options');

var _detectors = require('../utils/detectors');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var minify = function minify(linebreak) {
  var regex = new RegExp(linebreak + '\\s*', 'g');
  return function (code) {
    return code.split(regex).filter(function (line) {
      return line.length > 0;
    }).map(function (line) {
      return line.indexOf('//') === -1 ? line : line + '\n';
    }).join('');
  };
};

var minifyRaw = minify('(?:\\\\r|\\\\n|\\r|\\n)');
var minifyCooked = minify('[\\r\\n]');

exports.default = function (path, state) {
  if ((0, _options.useMinify)(state) && !(0, _options.useCSSPreprocessor)(state) && ((0, _detectors.isStyled)(path.node.tag, state) || (0, _detectors.isHelper)(path.node.tag, state))) {
    var templateLiteral = path.node.quasi;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = templateLiteral.quasis[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;

        element.value.raw = minifyRaw(element.value.raw);
        element.value.cooked = minifyCooked(element.value.cooked);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
};