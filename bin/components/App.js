'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _libuiNode = require('libui-node');

var _libuiNode2 = _interopRequireDefault(_libuiNode);

var _DesktopComponent2 = require('./DesktopComponent');

var _DesktopComponent3 = _interopRequireDefault(_DesktopComponent2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _devtools = require('../devtools');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var App = (function(_DesktopComponent) {
  _inherits(App, _DesktopComponent);

  function App(root, props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(
      this,
      (App.__proto__ || Object.getPrototypeOf(App)).call(this, root, props)
    );

    _this.root = root;
    _this.props = _extends({}, props);
    _this.newElement();
    _this.setDefaults(props);
    return _this;
  }

  _createClass(App, [
    {
      key: 'newElement',
      value: function newElement() {
        this.element = {};
      },
    },
    {
      key: 'update',
      value: function update(oldProps, newProps) {
        var _this2 = this;

        if (newProps.onShouldQuit !== oldProps.onShouldQuit) {
          _libuiNode2.default.Ui.onShouldQuit(function() {
            _this2.newProps.onShouldQuit();
            _libuiNode2.default.stopLoop();
          });
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;

        _libuiNode2.default.Ui.onShouldQuit(function() {
          _this3.props.onShouldQuit();
          (0, _devtools.disconnectDevtools)();
          _libuiNode2.default.stopLoop();
        });
        this.renderChildNode(this);
      },
    },
  ]);

  return App;
})(_DesktopComponent3.default);

App.propTypes = {
  onShouldQuit: _propTypes2.default.func,
};

App.defaultProps = {
  onShouldQuit: function onShouldQuit() {},
};

exports.default = App;
