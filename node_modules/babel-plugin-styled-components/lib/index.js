'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var t = _ref.types;

  return {
    visitor: {
      ImportDeclaration(path, state) {
        (0, _noParserImport.noParserImportDeclaration)(path, state);
      },
      CallExpression(path, state) {
        (0, _noParserImport.noParserRequireCallExpression)(path, state);
      },
      TaggedTemplateExpression(path, state) {
        (0, _minify2.default)(path, state);
        (0, _displayNameAndId2.default)(path, state);
        (0, _templateLiterals2.default)(path, state);
      }
    }
  };
};

var _minify = require('./visitors/minify');

var _minify2 = _interopRequireDefault(_minify);

var _displayNameAndId = require('./visitors/displayNameAndId');

var _displayNameAndId2 = _interopRequireDefault(_displayNameAndId);

var _templateLiterals = require('./visitors/templateLiterals');

var _templateLiterals2 = _interopRequireDefault(_templateLiterals);

var _noParserImport = require('./visitors/noParserImport');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }