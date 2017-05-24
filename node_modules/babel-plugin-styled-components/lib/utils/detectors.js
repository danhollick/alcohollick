'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHelper = exports.isKeyframesHelper = exports.isInjectGlobalHelper = exports.isCSSHelper = exports.isStyled = undefined;

var _babelTypes = require('babel-types');

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var importLocalName = function importLocalName(name, state) {
  var imports = state.file.metadata.modules.imports;
  var styledImports = imports.find(function (x) {
    return x.source === 'styled-components';
  });
  if (styledImports) {
    var specifier = styledImports.specifiers.find(function (x) {
      return x.imported === name;
    });
    if (specifier) {
      return specifier.local;
    }
  }
  // import not found - return default name
  return name === 'default' ? 'styled' : name;
};

var isStyled = exports.isStyled = function isStyled(tag, state) {
  if (t.isCallExpression(tag) && t.isMemberExpression(tag.callee)) {
    // styled.something()
    return isStyled(tag.callee.object, state);
  } else {
    return t.isMemberExpression(tag) && tag.object.name === importLocalName('default', state) || t.isCallExpression(tag) && tag.callee.name === importLocalName('default', state);
  }
};

var isCSSHelper = exports.isCSSHelper = function isCSSHelper(tag, state) {
  return t.isIdentifier(tag) && tag.name === importLocalName('css', state);
};

var isInjectGlobalHelper = exports.isInjectGlobalHelper = function isInjectGlobalHelper(tag, state) {
  return t.isIdentifier(tag) && tag.name === importLocalName('injectGlobal', state);
};

var isKeyframesHelper = exports.isKeyframesHelper = function isKeyframesHelper(tag, state) {
  return t.isIdentifier(tag) && tag.name === importLocalName('keyframes', state);
};

var isHelper = exports.isHelper = function isHelper(tag, state) {
  return isCSSHelper(tag, state) || isKeyframesHelper(tag, state);
};