'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelTypes = require('babel-types');

var t = _interopRequireWildcard(_babelTypes);

var _options = require('../utils/options');

var _getName = require('../utils/getName');

var _getName2 = _interopRequireDefault(_getName);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _hash = require('../utils/hash');

var _hash2 = _interopRequireDefault(_hash);

var _detectors = require('../utils/detectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var blockName = function blockName(file) {
  return file.opts.basename !== 'index' ? file.opts.basename : _path2.default.basename(_path2.default.dirname(file.opts.filename));
};

var addConfig = function addConfig(path, displayName, componentId) {
  if (!displayName && !componentId) {
    return;
  }

  var withConfigProps = [];
  if (displayName) {
    withConfigProps.push(t.objectProperty(t.identifier('displayName'), t.stringLiteral(displayName)));
  }
  if (componentId) {
    withConfigProps.push(t.objectProperty(t.identifier('componentId'), t.stringLiteral(componentId)));
  }

  // Replace x`...` with x.withConfig({ })`...`
  path.node.tag = t.callExpression(t.memberExpression(path.node.tag, t.identifier('withConfig')), [t.objectExpression(withConfigProps)]);
};

var getDisplayName = function getDisplayName(path, state) {
  var file = state.file;

  var componentName = (0, _getName2.default)(path);
  if (file) {
    return componentName ? `${blockName(file)}__${componentName}` : blockName(file);
  } else {
    return componentName;
  }
};

var findModuleRoot = function findModuleRoot(filename) {
  if (!filename) {
    return null;
  }
  var dir = _path2.default.dirname(filename);
  if (_fs2.default.existsSync(_path2.default.join(dir, 'package.json'))) {
    return dir;
  } else if (dir !== filename) {
    return findModuleRoot(dir);
  } else {
    return null;
  }
};

var FILE_HASH = 'styled-components-file-hash';
var COMPONENT_POSITION = 'styled-components-component-position';

var getFileHash = function getFileHash(state) {
  var file = state.file;
  // hash calculation is costly due to fs operations, so we'll cache it per file.

  if (file.get(FILE_HASH)) {
    return file.get(FILE_HASH);
  }
  var filename = file.opts.filename;
  // find module root directory
  var moduleRoot = findModuleRoot(filename);
  var filePath = moduleRoot && _path2.default.relative(moduleRoot, filename).replace(_path2.default.sep, '/');
  var moduleName = moduleRoot && JSON.parse(_fs2.default.readFileSync(_path2.default.join(moduleRoot, 'package.json'))).name;
  var code = file.code;

  var fileHash = (0, _hash2.default)([moduleName, filePath, code].join(''));
  file.set(FILE_HASH, fileHash);
  return fileHash;
};

var getNextId = function getNextId(state) {
  var id = state.file.get(COMPONENT_POSITION) || 0;
  state.file.set(COMPONENT_POSITION, id + 1);
  return id;
};

var getComponentId = function getComponentId(state) {
  // Prefix the identifier with a character because CSS classes cannot start with a number
  return `${getFileHash(state).replace(/^(\d)/, 's$1')}-${getNextId(state)}`;
};

exports.default = function (path, state) {
  if ((0, _detectors.isStyled)(path.node.tag, state)) {
    addConfig(path, (0, _options.useDisplayName)(state) && getDisplayName(path, (0, _options.useFileName)(state) && state), (0, _options.useSSR)(state) && getComponentId(state));
  }
};