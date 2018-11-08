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

var _DesktopComponent2 = require('./DesktopComponent');

var _DesktopComponent3 = _interopRequireDefault(_DesktopComponent2);

var _libuiNode = require('libui-node');

var _libuiNode2 = _interopRequireDefault(_libuiNode);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var functionMappings = {
  onChange: 'onChanged',
};

var ColorButton = (function(_DesktopComponent) {
  _inherits(ColorButton, _DesktopComponent);

  function ColorButton(root, props) {
    _classCallCheck(this, ColorButton);

    var _this = _possibleConstructorReturn(
      this,
      (ColorButton.__proto__ || Object.getPrototypeOf(ColorButton)).call(
        this,
        root,
        props
      )
    );

    _this.eventParameter = { onChanged: 'color' };

    _this.root = root;
    _this.props = _extends({}, props);
    _this.setDefaults(props);
    _this.newElement();
    _this.initialProps(_this.props);
    return _this;
  }

  _createClass(ColorButton, [
    {
      key: 'newElement',
      value: function newElement() {
        this.element = new _libuiNode2.default.UiColorButton();
      },
    },
    {
      key: 'toColorLibui',
      value: function toColorLibui(input) {
        input = input.toLowerCase();
        var alpha = void 0;
        var c = (0, _color2.default)(input).object();
        if (this.exists(c.alpha)) {
          alpha = c.alpha;
        } else if (this.exists(c.a)) {
          alpha = c.a;
        } else {
          alpha = 1;
        }
        return new _libuiNode2.default.Color(
          c.r / 255,
          c.g / 255,
          c.b / 255,
          alpha
        );
      },
    },
    {
      key: 'toColorUser',
      value: function toColorUser(colorObj) {
        return {
          r: Math.round(colorObj.r * 255),
          g: Math.round(colorObj.g * 255),
          b: Math.round(colorObj.b * 255),
          a: colorObj.a,
        };
      },
    },
    {
      key: 'update',
      value: function update(oldProps, newProps) {
        var _this2 = this;

        var _loop = function _loop(prop) {
          // normal props
          if (oldProps[prop] !== newProps[prop] && prop !== 'color') {
            // add check for color prop
            if (typeof newProps[prop] === 'function') {
              var translatedProp = functionMappings[prop]; // translate React function names in libui names
              if (typeof _this2.eventParameter[translatedProp] === 'function') {
                // if we don't have a translatedProperty, then we use a function, so handle that
                _this2.element[translatedProp](function() {
                  return newProps[prop](
                    _this2.eventParameter[translatedProp]()
                  );
                });
              } else if (_this2.eventParameter[translatedProp] === 'color') {
                _this2.element[translatedProp](function() {
                  return newProps[prop](
                    _this2.toColorUser(
                      _this2.element[_this2.eventParameter[translatedProp]]
                    )
                  );
                });
              } else if (_this2.eventParameter[translatedProp] !== '') {
                _this2.element[translatedProp](function() {
                  return newProps[prop](
                    _this2.element[_this2.eventParameter[translatedProp]]
                  );
                });
              } else {
                _this2.element[translatedProp](newProps[prop]);
              }
            } else if (prop == 'children') {
              _this2.element[childName] = newProps[prop];
            } else {
              _this2.element[prop] = newProps[prop];
            }
          } else if (oldProps[prop] !== newProps[prop]) {
            // add check for color prop
            _this2.element[prop] = _this2.toColorLibui(newProps[prop]);
          }
        };

        for (var prop in newProps) {
          _loop(prop);
        }
      },
    },
    {
      key: 'initialProps',
      value: function initialProps(props) {
        var _this3 = this;

        var _loop2 = function _loop2(prop) {
          // normal props
          if (typeof props[prop] === 'function') {
            var translatedProp = functionMappings[prop]; // translate React function names in libui names
            if (typeof _this3.eventParameter[translatedProp] === 'function') {
              // if we don't have a property, then we use a function, so handle that
              _this3.element[translatedProp](function() {
                return props[prop](_this3.eventParameter[translatedProp]());
              });
            } else if (_this3.eventParameter[translatedProp] === 'color') {
              _this3.element[translatedProp](function() {
                return props[prop](
                  _this3.toColorUser(
                    _this3.element[_this3.eventParameter[translatedProp]]
                  )
                );
              });
            } else if (_this3.eventParameter[translatedProp] !== '') {
              _this3.element[translatedProp](function() {
                return props[prop](
                  _this3.element[_this3.eventParameter[translatedProp]]
                );
              });
            } else {
              _this3.element[translatedProp](props[prop]);
            }
          } else if (prop == 'children') {
            _this3.element[_this3.childName] = props[prop];
          } else if (prop === 'color') {
            _this3.element[prop] = _this3.toColorLibui(props[prop]);
          } else {
            _this3.element[prop] = props[prop];
          }
        };

        // same as desktop, except in function, convert it back to a RGBA object
        for (var prop in props) {
          _loop2(prop);
        }
      },
    },
    {
      key: 'render',
      value: function render(parent) {
        this.addParent(parent);
        this.renderChildNode();
      },
    },
  ]);

  return ColorButton;
})(_DesktopComponent3.default);

ColorButton.propTypes = _extends({}, _DesktopComponent2.universalPropTypes, {
  color: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
});

ColorButton.defaultProps = _extends(
  {},
  _DesktopComponent2.universalDefaultProps,
  {
    color: 'black',
    onChange: function onChange() {},
  }
);

exports.default = ColorButton;
