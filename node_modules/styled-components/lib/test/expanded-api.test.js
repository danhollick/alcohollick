'use strict';

var _templateObject = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _enzyme = require('enzyme');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled = void 0;

describe('expanded api', function () {
  /**
   * Make sure the setup is the same for every test
   */
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });

  describe('displayName', function () {
    it('should be auto-generated if none passed', function () {
      var Comp = styled.div(_templateObject);
      (0, _expect2.default)(Comp.displayName).toBe('styled.div');
    });

    it('should be attached if supplied', function () {
      var Comp = styled.div.withConfig({ displayName: 'Comp' })(_templateObject);
      (0, _expect2.default)(Comp.displayName).toBe('Comp');
    });
  });

  describe('componentId', function () {
    it('should be generated as "sc" + hash', function () {
      var Comp = styled.div(_templateObject);
      var Comp2 = styled.div(_templateObject);
      (0, _expect2.default)(Comp.styledComponentId).toBe('sc-a');
      (0, _expect2.default)((0, _enzyme.shallow)(_react2.default.createElement(Comp, null)).prop('className')).toInclude('sc-a');
      (0, _expect2.default)(Comp2.styledComponentId).toBe('sc-b');
      (0, _expect2.default)((0, _enzyme.shallow)(_react2.default.createElement(Comp2, null)).prop('className')).toInclude('sc-b');
    });

    it('should be generated from displayName + hash', function () {
      var Comp = styled.div.withConfig({ displayName: 'Comp' })(_templateObject);
      var Comp2 = styled.div.withConfig({ displayName: 'Comp2' })(_templateObject);
      (0, _expect2.default)(Comp.styledComponentId).toBe('Comp-a');
      (0, _expect2.default)((0, _enzyme.shallow)(_react2.default.createElement(Comp, null)).prop('className')).toInclude('Comp-a');
      (0, _expect2.default)(Comp2.styledComponentId).toBe('Comp2-b');
      (0, _expect2.default)((0, _enzyme.shallow)(_react2.default.createElement(Comp2, null)).prop('className')).toInclude('Comp2-b');
    });

    it('should be attached if passed in', function () {
      var Comp = styled.div.withConfig({ displayName: 'Comp', componentId: 'LOLOMG' })(_templateObject);
      var Comp2 = styled.div.withConfig({ displayName: 'Comp2', componentId: 'OMGLOL' })(_templateObject);
      (0, _expect2.default)(Comp.styledComponentId).toBe('LOLOMG');
      (0, _expect2.default)((0, _enzyme.shallow)(_react2.default.createElement(Comp, null)).prop('className')).toInclude('LOLOMG');
      (0, _expect2.default)(Comp2.styledComponentId).toBe('OMGLOL');
      (0, _expect2.default)((0, _enzyme.shallow)(_react2.default.createElement(Comp2, null)).prop('className')).toInclude('OMGLOL');
    });
  });

  describe('chaining', function () {
    it('should merge the options strings', function () {
      var Comp = styled.div.withConfig({ componentId: 'id-1' }).withConfig({ displayName: 'dn-2' })(_templateObject);
      (0, _expect2.default)(Comp.displayName).toBe('dn-2');
      (0, _expect2.default)((0, _enzyme.shallow)(_react2.default.createElement(Comp, null)).prop('className')).toBe('id-1 a');
    });

    it('should keep the last value passed in when merging', function () {
      var Comp = styled.div.withConfig({ displayName: 'dn-2', componentId: 'id-3' }).withConfig({ displayName: 'dn-5', componentId: 'id-4' })(_templateObject);
      (0, _expect2.default)(Comp.displayName).toBe('dn-5');
      (0, _expect2.default)((0, _enzyme.shallow)(_react2.default.createElement(Comp, null)).prop('className')).toBe('id-4 a');
    });
  });
});