'use strict';

var _templateObject = _taggedTemplateLiteral(['\n      color: blue;\n      font-weight: light;\n    '], ['\n      color: blue;\n      font-weight: light;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      padding: 1rem;\n      > ', ' {\n        font-weight: bold;\n      }\n    '], ['\n      padding: 1rem;\n      > ', ' {\n        font-weight: bold;\n      }\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _enzyme = require('enzyme');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled = void 0;

describe('extending', function () {
  /**
   * Make sure the setup is the same for every test
   */
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });

  it('should let you use another component in a css rule', function () {
    var Inner = styled.div(_templateObject);
    var Outer = styled.div(_templateObject2, Inner);
    (0, _enzyme.shallow)(_react2.default.createElement(Inner, null));
    (0, _enzyme.shallow)(_react2.default.createElement(Outer, null));
    (0, _utils.expectCSSMatches)('\n      .sc-a {}\n      .c { color: blue; font-weight: light; }\n      .sc-b {}\n      .d { padding: 1rem; }\n      .d > .sc-a { font-weight: bold; }\n    ');
  });
});