'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStyledComponent;

var babelPluginFlowReactPropTypes_proptype_Target = require('../types').babelPluginFlowReactPropTypes_proptype_Target || require('react').PropTypes.any;

function isStyledComponent(target) /* : %checks */{
  return typeof target === 'function' && typeof target.styledComponentId === 'string';
}
module.exports = exports['default'];