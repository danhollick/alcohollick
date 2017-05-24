'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isPlainObject = require('is-plain-object');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _flatten2 = require('../utils/flatten');

var _flatten3 = _interopRequireDefault(_flatten2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var babelPluginFlowReactPropTypes_proptype_Interpolation = require('../types').babelPluginFlowReactPropTypes_proptype_Interpolation || require('react').PropTypes.any;

var isRuleSet = function isRuleSet(interpolation) {
  return !!(interpolation && Array.isArray(interpolation) && interpolation.length > 0 && interpolation[0] && Array.isArray(interpolation[0]));
};

var flatten = function flatten(chunks, executionContext) {
  /* Fall back to old flattener for non-rule-set chunks */
  if (!isRuleSet(chunks)) {
    return (0, _flatten3.default)(chunks, executionContext);
  }

  return chunks.reduce(function (ruleSet, chunk) {
    if (!Array.isArray(chunk)) {
      return ruleSet;
    }

    var appendChunks = [];

    var newChunk = chunk.reduce(function (rules, rule) {
      /* Remove falsey values */
      if (rule === undefined || rule === null || rule === false || rule === '') {
        return rules;
      }

      /* Flatten nested rule set */
      if (isRuleSet(rule)) {
        // $FlowFixMe Don't know what's wrong here
        appendChunks = [].concat(_toConsumableArray(appendChunks), _toConsumableArray(flatten(rule, executionContext)));
        return rules;
      }

      /* Stringify unexpected array */
      if (Array.isArray(rule)) {
        return [].concat(_toConsumableArray(rules), _toConsumableArray((0, _flatten3.default)(rule, executionContext)));
      }

      /* Either execute or defer the function */
      if (typeof rule === 'function') {
        if (executionContext) {
          var res = rule(executionContext);

          if (isRuleSet(res)) {
            // $FlowFixMe Don't know what's wrong here
            appendChunks = [].concat(_toConsumableArray(appendChunks), _toConsumableArray(flatten(res, executionContext)));
            return rules;
          }

          /* Flatten non-ruleset values */
          return [].concat(_toConsumableArray(rules), _toConsumableArray(flatten([res], executionContext)));
        } else {
          return [].concat(_toConsumableArray(rules), [rule]);
        }
      }

      /* Handle other components */
      if ((typeof rule === 'undefined' ? 'undefined' : _typeof(rule)) === 'object' && rule.hasOwnProperty('styledComponentId')) return [].concat(_toConsumableArray(rules), ['.' + rule.styledComponentId]);

      /* Convert object to css string */
      if ((typeof rule === 'undefined' ? 'undefined' : _typeof(rule)) === 'object' && (0, _isPlainObject2.default)(rule)) {
        return [].concat(_toConsumableArray(rules), [(0, _flatten2.objToCss)(rule)]);
      }

      return [].concat(_toConsumableArray(rules), [rule.toString()]);
    }, []);

    if (executionContext) {
      var newChunkStr = newChunk.join('');
      if (appendChunks.length) {
        return [].concat(_toConsumableArray(ruleSet), [newChunkStr], _toConsumableArray(appendChunks));
      }

      return [].concat(_toConsumableArray(ruleSet), [newChunkStr]);
    }

    return [].concat(_toConsumableArray(ruleSet), [newChunk], _toConsumableArray(appendChunks));
  }, []);
};

exports.default = flatten;
module.exports = exports['default'];