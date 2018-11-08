'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _typeof =
  typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
    ? function(obj) {
        return typeof obj;
      }
    : function(obj) {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj;
      };

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _libuiNode = require('libui-node');

var _libuiNode2 = _interopRequireDefault(_libuiNode);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _svgPathParser = require('svg-path-parser');

var _svgPathParser2 = _interopRequireDefault(_svgPathParser);

var _ = require('..');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
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

var onMouse = function onMouse(component) {
  return function(area, evt) {
    var down = evt.getDown();
    var up = evt.getUp();
    if (up) {
      component.props.onMouseUp({
        x: evt.getX(),
        y: evt.getY(),
        width: evt.getAreaWidth(),
        height: evt.getAreaHeight(),
        button: up,
      });
    } else if (down) {
      component.props.onMouseDown({
        x: evt.getX(),
        y: evt.getY(),
        width: evt.getAreaWidth(),
        height: evt.getAreaHeight(),
        button: down,
        count: evt.getCount(),
      });
    } else {
      var buttons = [];
      var held = evt.getHeld1To64();
      if (held > 0) {
        for (var i = 0; i <= 6; i++) {
          if (held & Math.pow(2, i)) buttons.push(i + 1);
          if (!(held >> (i + 1))) break;
        }
      }
      component.props.onMouseMove({
        x: evt.getX(),
        y: evt.getY(),
        width: evt.getAreaWidth(),
        height: evt.getAreaHeight(),
        buttons: buttons,
      });
    }
  };
};

var onKey = function onKey(component) {
  return function(area, event) {
    var extKey = event.getExtKey();
    if (extKey) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (
          var _iterator = Object.keys(_libuiNode2.default.extKeys)[
              Symbol.iterator
            ](),
            _step;
          !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
          _iteratorNormalCompletion = true
        ) {
          var k = _step.value;

          if (extKey == _libuiNode2.default.extKeys[k]) {
            extKey = k;
            break;
          }
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

    var modifierKey = event.getModifier();
    if (modifierKey) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (
          var _iterator2 = Object.keys(_libuiNode2.default.modifierKeys)[
              Symbol.iterator
            ](),
            _step2;
          !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
          _iteratorNormalCompletion2 = true
        ) {
          var _k = _step2.value;

          if (modifierKey == _libuiNode2.default.modifierKeys[_k]) {
            modifierKey = _k;
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }

    var modifiers = event.getModifiers();
    var modifiersList = [];

    if (modifiers) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (
          var _iterator3 = Object.keys(_libuiNode2.default.modifierKeys)[
              Symbol.iterator
            ](),
            _step3;
          !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);
          _iteratorNormalCompletion3 = true
        ) {
          var _k2 = _step3.value;

          if (modifiers & _libuiNode2.default.modifierKeys[_k2]) {
            modifiersList.push(_k2);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }

    if (event.getUp()) {
      return component.props.onKeyUp({
        key: event.getKey(),
        extKey: extKey,
        modifierKey: modifierKey,
        modifiers: modifiersList,
      });
    } else {
      return component.props.onKeyDown({
        key: event.getKey(),
        extKey: extKey,
        modifierKey: modifierKey,
        modifiers: modifiersList,
      });
    }
  };
};

var Area = (function(_DesktopComponent) {
  _inherits(Area, _DesktopComponent);

  function Area(root, props) {
    _classCallCheck(this, Area);

    var _this = _possibleConstructorReturn(
      this,
      (Area.__proto__ || Object.getPrototypeOf(Area)).call(this, root, props)
    );

    _this.root = root;
    _this.props = _extends({}, props);
    _this.setDefaults(props);
    _this.width = null;
    _this.height = null;

    _this.element = new _libuiNode2.default.UiArea(
      function(area, p) {
        var width = p.getAreaWidth();
        var height = p.getAreaHeight();
        if (width !== _this.width || height !== _this.height) {
          _this.width = width;
          _this.height = height;
          _this.props.onSizeChange({ width: width, height: height });
        }

        for (var i = 0; i < _this.children.length; i += 1) {
          if (_typeof(_this.children[i]) === 'object') {
            _this.children[i].draw(_this, area, p);
          }
        }
      },
      onMouse(_this),
      function(area, inOut) {
        if (inOut === 0) {
          _this.props.onMouseEnter();
        } else {
          _this.props.onMouseLeave();
        }
      },
      function dragBroken() {},
      onKey(_this)
    );
    return _this;
  }

  _createClass(Area, [
    {
      key: 'getArea',
      value: function getArea() {
        return this.element;
      },

      // to prevent TypeError: Cannot read property 'undefined' of undefined
      // because onMouseMove, ... shouldn't be handled by DesktopComponent
    },
    {
      key: 'update',
      value: function update(oldProps, newProps) {},
    },
    {
      key: 'render',
      value: function render(parent) {
        this.addParent(parent);
      },
    },
  ]);

  return Area;
})(_DesktopComponent3.default);

Area.propTypes = _extends({}, _DesktopComponent2.universalPropTypes, {
  onMouseMove: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onSizeChange: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([
    _propTypes2.default.element,
    _propTypes2.default.arrayOf(_propTypes2.default.element),
  ]),
});

Area.defaultProps = _extends({}, _DesktopComponent2.universalDefaultProps, {
  onMouseMove: function onMouseMove(e) {},
  onMouseUp: function onMouseUp(e) {},
  onMouseDown: function onMouseDown(e) {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onKeyUp: function onKeyUp(event) {},
  onKeyDown: function onKeyDown(event) {},
  onSizeChange: function onSizeChange(event) {},
});

function fallback() {
  var func = function func(a) {
    return Number(a);
  };

  for (
    var _len = arguments.length, vals = Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    vals[_key] = arguments[_key];
  }

  if (typeof vals[vals.length - 1] === 'function') {
    func = vals.pop();
  }

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (
      var _iterator4 = vals[Symbol.iterator](), _step4;
      !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done);
      _iteratorNormalCompletion4 = true
    ) {
      var v = _step4.value;

      if (typeof v !== 'undefined') {
        return func(v);
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
}

function toLibuiColor(color) {
  return new _libuiNode2.default.Color(
    color.red() / 255,
    color.green() / 255,
    color.blue() / 255,
    color.alpha()
  );
}

function createBrush(color, alpha) {
  var brush = new _libuiNode2.default.DrawBrush();
  brush.color = toLibuiColor(color);
  brush.color.alpha = brush.color.alpha * alpha;
  brush.type = _libuiNode2.default.brushType.solid;

  return brush;
}

var AreaComponent = (function() {
  function AreaComponent(root, props) {
    _classCallCheck(this, AreaComponent);

    this.root = root;
    this.props = _extends({}, props);
    this.setDefaults(props);
    this.element = {};
  }

  _createClass(AreaComponent, [
    {
      key: 'setDefaults',
      value: function setDefaults(props) {
        for (var prop in this.constructor.defaultProps) {
          if (!(prop in props) || typeof props[prop] === 'undefined') {
            // children can exist, but be undefined
            this.props[prop] = this.constructor.defaultProps[prop];
          }
        }
        _propTypes2.default.checkPropTypes(
          this.constructor.propTypes,
          this.props,
          'prop',
          this.constructor.name
        );
      },
    },
    {
      key: 'getArea',
      value: function getArea() {
        return this.parent.getArea();
      },
    },
    {
      key: 'update',
      value: function update(oldProps, newProps) {
        this.props = _extends({}, this.props, newProps);
        if (this.parent) this.getArea().queueRedrawAll();
      },
    },
    {
      key: 'getWidth',
      value: function getWidth(p) {
        return this.props.width ? this.parseParent(this.props.width, p) : 0;
      },
    },
    {
      key: 'getHeight',
      value: function getHeight(p) {
        return this.props.width
          ? this.parseParent(this.props.height, p, true)
          : 0;
      },

      // parse numbers (especially percentages with respect to the parent)
    },
    {
      key: 'parseParent',
      value: function parseParent(val, p) {
        var y =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : false;

        if (typeof val === 'string') {
          var num = Number(val);
          if (num == val) {
            return num;
          } else if (val.slice(-1) == '%') {
            var _num = Number(val.slice(0, -1));
            return (_num / 100) * (y ? p.getAreaHeight() : p.getAreaWidth());
          }
        } else if (typeof val === 'number') {
          return val;
        }
      },

      // parse numbers (especially percentages with respect to itself)
    },
    {
      key: 'parseSelf',
      value: function parseSelf(val, p) {
        var y =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : false;

        if (typeof val === 'string') {
          var num = Number(val);
          if (num == val) {
            return num;
          } else if (val.slice(-1) == '%') {
            var _num2 = Number(val.slice(0, -1));
            return (_num2 / 100) * (y ? this.getHeight(p) : this.getWidth(p));
          }
        } else if (typeof val === 'number') {
          return val;
        }
      },

      // translates coordinates relative to this component into the area coordinate system
    },
    {
      key: 'selfToParent',
      value: function selfToParent(xx, yy, p) {
        // get top left corner
        var x = 0;
        var y = 0;
        if (this.props.x) {
          x = this.parseParent(this.props.x, p);
        } else if (this.props.x1 && this.props.x2) {
          var realX1 = this.parseParent(this.props.x1, p);
          var realX2 = this.parseParent(this.props.x2, p);
          x = realX1 < realX2 ? realX1 : realX2;
        }
        if (this.props.y) {
          y = this.parseParent(this.props.y, p, true);
        } else if (this.props.y1 && this.props.y2) {
          var realY1 = this.parseParent(this.props.y1, p, true);
          var realY2 = this.parseParent(this.props.y2, p, true);
          y = realY1 < realY2 ? realY1 : realY2;
        }

        return {
          x: x + this.parseSelf(xx, p),
          y: y + this.parseSelf(yy, p, true),
        };
      },
    },
    {
      key: 'applyTransforms',
      value: function applyTransforms(p) {
        var _this2 = this;

        p.getContext().save();

        var mat = new _libuiNode2.default.UiDrawMatrix();
        mat.setIdentity();

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (
            var _iterator5 = this.props.transform
                .match(/\w+\([^)]+\)/g)
                [Symbol.iterator](),
              _step5;
            !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done);
            _iteratorNormalCompletion5 = true
          ) {
            var transform = _step5.value;

            // rotate(deg [,x, y])
            // default x: 50%, y: 50%
            var rotate = transform.match(
              /rotate\s*\(\s*([-0-9.]+)(?:\s*,\s*([-0-9.%]+)\s*,\s*([-0-9.%]+))?\s*\)/
            );
            if (rotate) {
              var xy = this.selfToParent(
                fallback(rotate[2], '50%', function(v) {
                  return v;
                }),
                fallback(rotate[3], '50%', function(v) {
                  return v;
                }),
                p
              );
              var rad = Number(rotate[1]) * (Math.PI / 180);
              mat.rotate(xy.x, xy.y, rad);
            }

            // translate(x [y])
            // default y: x
            var translate = transform.match(
              /translate\s*\(\s*([-0-9.%]+)(?:\s*,\s*([-0-9.%]+))?\s*\)/
            );
            if (translate) {
              mat.translate(
                this.parseSelf(translate[1], p),
                fallback(translate[2], translate[1], function(v) {
                  return _this2.parseSelf(v, p, true);
                })
              );
            }

            // 1: scale(x)
            // 2: scale(x, y)
            // 3: scale(x, xCenter, yCenter)
            // 4: scale(x, y, xCenter, yCenter)
            // default y: x, xCenter=yCenter: 50%
            var scale = transform.match(
              /scale\s*\(([-0-9.]+)(?:(?:\s*,\s*([-0-9.]+))?(?:\s*,\s*([-0-9.%]+)\s*,\s*([-0-9.%]+))?)?\)/
            );
            if (scale) {
              var _xy = this.selfToParent(
                fallback(scale[3], '50%', function(v) {
                  return v;
                }),
                fallback(scale[4], '50%', function(v) {
                  return v;
                }),
                p
              );
              if (process.platform === 'win32') {
                mat.scale(
                  _xy.x,
                  _xy.y,
                  Number(scale[1]),
                  fallback(scale[2], scale[1])
                );
              } else {
                // https://github.com/andlabs/libui/issues/331:
                mat.translate(_xy.x, _xy.y);
                mat.scale(0, 0, Number(scale[1]), fallback(scale[2], scale[1]));
                mat.translate(-_xy.x, -_xy.y);
              }
            }

            // skew(a, b [,x, y])
            // a, b: x/y angle
            // default x=y: 50%
            var skew = transform.match(
              /skew\s*\(\s*([-0-9.]+)\s*,\s*([-0-9.]+)(?:,\s*([-0-9.%]+),\s*([-0-9.%]+))?\)/
            );
            if (skew) {
              var rad1 = Number(skew[1]) * (Math.PI / 180);
              var rad2 = Number(skew[2]) * (Math.PI / 180);
              mat.skew(
                fallback(skew[2], '50%', function(v) {
                  return _this2.parseSelf(v, p);
                }),
                fallback(skew[3], '50%', function(v) {
                  return _this2.parseSelf(v, p, true);
                }),
                rad1,
                rad2
              );
            }

            // matrix(a, b, c, d, e, f, g)
            var matrix = transform.match(
              /matrix\s*\(\s*([-0-9.]+)\s*,\s*([-0-9.]+)\s*,\s*([-0-9.]+)\s*,\s*([-0-9.]+)\s*,\s*([-0-9.]+)\s*,\s*([-0-9.]+)\s*\)/
            );
            if (matrix) {
              mat.setM11(matrix[1]);
              mat.setM12(matrix[2]);
              mat.setM21(matrix[3]);
              mat.setM22(matrix[4]);
              mat.setM31(matrix[5]);
              mat.setM32(matrix[6]);
            }
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        p.getContext().transform(mat);
      },
    },
    {
      key: 'draw',
      value: function draw(parent, area, p, props) {
        this.parent = parent;

        var _props = this.props,
          children = _props.children,
          appendProps = _objectWithoutProperties(_props, ['children']);

        props = _extends({}, props, appendProps);

        if (this.props.transform) {
          this.applyTransforms(p);
        }

        var path = this.drawPath(area, p, props);

        if (path) {
          var fillBrush =
            props.fill &&
            props.fill != 'none' &&
            createBrush(
              (0, _color2.default)(props.fill),
              Number(props.fillOpacity)
            );
          var strokeBrush =
            props.stroke &&
            props.stroke != 'none' &&
            createBrush(
              (0, _color2.default)(props.stroke),
              Number(props.strokeOpacity)
            );

          if (strokeBrush) {
            var sp = new _libuiNode2.default.DrawStrokeParams();

            switch (props.strokeLinecap) {
              case 'flat':
                sp.cap = _libuiNode2.default.lineCap.flat;
                break;
              case 'round':
                sp.cap = _libuiNode2.default.lineCap.round;
                break;
              case 'square':
                sp.cap = _libuiNode2.default.lineCap.square;
                break;
            }

            switch (props.strokeLinejoin) {
              case 'miter':
                sp.join = _libuiNode2.default.lineJoin.miter;
                break;
              case 'round':
                sp.join = _libuiNode2.default.lineJoin.round;
                break;
              case 'bevel':
                sp.join = _libuiNode2.default.lineJoin.bevel;
                break;
            }

            sp.thickness = Number(props.strokeWidth);
            sp.miterLimit = Number(props.strokeMiterlimit);

            p.getContext().stroke(path, strokeBrush, sp);

            sp.free();
            strokeBrush.free();
          }

          if (fillBrush) {
            p.getContext().fill(path, fillBrush);
            fillBrush.free();
          }

          path.freePath();
        }

        if (this.props.transform) {
          p.getContext().restore();
        }
      },
    },
    {
      key: 'drawPath',
      value: function drawPath(area, p, props) {},
    },
  ]);

  return AreaComponent;
})();

var AreaComponentPropTypes = {
  transform: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  fillOpacity: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]),
  stroke: _propTypes2.default.string,
  strokeOpacity: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]),
  strokeWidth: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]),
  strokeLinecap: _propTypes2.default.oneOf(['flat', 'round', 'square']),
  strokeLinejoin: _propTypes2.default.oneOf(['miter', 'round', 'bevel']),
  strokeMiterlimit: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]),
};

var AreaComponentDefaultProps = {
  fillOpacity: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
  strokeMiterlimit: 10,
  strokeLinecap: 'flat',
  strokeLinejoin: 'miter',
};

Area.Group = (function(_AreaComponent) {
  _inherits(AreaGroup, _AreaComponent);

  function AreaGroup(root, props) {
    _classCallCheck(this, AreaGroup);

    var _this3 = _possibleConstructorReturn(
      this,
      (AreaGroup.__proto__ || Object.getPrototypeOf(AreaGroup)).call(
        this,
        root,
        props
      )
    );

    _this3.children = [];
    return _this3;
  }

  _createClass(AreaGroup, [
    {
      key: 'appendChild',
      value: function appendChild(child) {
        this.children.push(child);
      },
    },
    {
      key: 'removeChild',
      value: function removeChild(child) {
        if (child.children) {
          // we recursively remove all children
          child.children.forEach(function(w) {
            child.removeChild(w);
          });
        }
        var index = this.children.indexOf(child);
        this.children.splice(index, 1);
      },
    },
    {
      key: 'insertChild',
      value: function insertChild(child, beforeChild) {
        var beforeIndex = this.children.indexOf(beforeChild);
        this.children.splice(beforeIndex, 0, child);
      },
    },
    {
      key: 'drawPath',
      value: function drawPath(area, p, props) {
        for (var i = 0; i < this.children.length; i += 1) {
          if (_typeof(this.children[i]) === 'object') {
            this.children[i].draw(this, area, p, props);
          }
        }
      },
    },
  ]);

  return AreaGroup;
})(AreaComponent);

Area.Group.propTypes = _extends({}, AreaComponentPropTypes, {
  width: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]),
  height: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]),
});

Area.Rectangle = (function(_AreaComponent2) {
  _inherits(Rectangle, _AreaComponent2);

  function Rectangle() {
    _classCallCheck(this, Rectangle);

    return _possibleConstructorReturn(
      this,
      (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(Rectangle, [
    {
      key: 'getWidth',
      value: function getWidth(p) {
        return this.parseParent(this.props.width, p);
      },
    },
    {
      key: 'getHeight',
      value: function getHeight(p) {
        return this.parseParent(this.props.height, p, true);
      },
    },
    {
      key: 'drawPath',
      value: function drawPath(area, p, props) {
        var path = new _libuiNode2.default.UiDrawPath(
          _libuiNode2.default.fillMode.winding
        );
        path.addRectangle(
          this.parseParent(this.props.x, p),
          this.parseParent(this.props.y, p, true),
          this.parseParent(this.props.width, p),
          this.parseParent(this.props.height, p, true)
        );
        path.end();
        return path;
      },
    },
  ]);

  return Rectangle;
})(AreaComponent);

Area.Rectangle.propTypes = _extends({}, AreaComponentPropTypes, {
  x: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  y: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  width: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  height: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
});

Area.Line = (function(_AreaComponent3) {
  _inherits(Line, _AreaComponent3);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(
      this,
      (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments)
    );
  }

  _createClass(Line, [
    {
      key: 'getWidth',
      value: function getWidth(p) {
        return Math.abs(
          this.parseParent(this.props.x2, p) -
            this.parseParent(this.props.x1, p)
        );
      },
    },
    {
      key: 'getHeight',
      value: function getHeight(p) {
        return Math.abs(
          this.parseParent(this.props.y2, p, true) -
            this.parseParent(this.props.y1, p, true)
        );
      },
    },
    {
      key: 'drawPath',
      value: function drawPath(area, p, props) {
        var path = new _libuiNode2.default.UiDrawPath(
          _libuiNode2.default.fillMode.winding
        );
        path.newFigure(
          this.parseParent(this.props.x1, p),
          this.parseParent(this.props.y1, p, true)
        );
        path.lineTo(
          this.parseParent(this.props.x2, p),
          this.parseParent(this.props.y2, p, true)
        );
        path.end();

        return path;
      },
    },
  ]);

  return Line;
})(AreaComponent);

Area.Line.propTypes = _extends({}, AreaComponentPropTypes, {
  x1: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  y1: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  x2: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  y2: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
});

Area.Arc = (function(_AreaComponent4) {
  _inherits(Arc, _AreaComponent4);

  function Arc() {
    _classCallCheck(this, Arc);

    return _possibleConstructorReturn(
      this,
      (Arc.__proto__ || Object.getPrototypeOf(Arc)).apply(this, arguments)
    );
  }

  _createClass(Arc, [
    {
      key: 'getWidth',
      value: function getWidth(p) {
        return 2 * this.parseParent(this.props.r, p);
      },
    },
    {
      key: 'getHeight',
      value: function getHeight(p) {
        return getWidth(p);
      },
    },
    {
      key: 'drawPath',
      value: function drawPath(area, p, props) {
        var path = new _libuiNode2.default.UiDrawPath(
          _libuiNode2.default.fillMode.winding
        );
        path.newFigureWithArc(
          this.parseParent(this.props.x, p),
          this.parseParent(this.props.y, p, true),
          this.parseParent(this.props.r, p),
          Number(this.props.start) * (Math.PI / 180),
          Number(this.props.sweep) * (Math.PI / 180),
          false
        );
        path.end();
        return path;
      },
    },
  ]);

  return Arc;
})(AreaComponent);

Area.Arc.propTypes = _extends({}, AreaComponentPropTypes, {
  x: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  y: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  r: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  start: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]),
  sweep: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
});

Area.Arc.defaultProps = _extends({}, AreaComponentDefaultProps, {
  start: 0,
});

Area.Circle = (function(_AreaComponent5) {
  _inherits(Circle, _AreaComponent5);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(
      this,
      (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments)
    );
  }

  _createClass(Circle, [
    {
      key: 'getWidth',
      value: function getWidth(p) {
        return 2 * this.parseParent(this.props.r, p);
      },
    },
    {
      key: 'getHeight',
      value: function getHeight(p) {
        return getWidth(p);
      },
    },
    {
      key: 'drawPath',
      value: function drawPath(area, p, props) {
        var path = new _libuiNode2.default.UiDrawPath(
          _libuiNode2.default.fillMode.winding
        );
        path.newFigureWithArc(
          this.parseParent(this.props.x, p),
          this.parseParent(this.props.y, p, true),
          this.parseParent(this.props.r, p),
          0,
          2 * Math.PI,
          false
        );
        path.end();
        return path;
      },
    },
  ]);

  return Circle;
})(AreaComponent);

Area.Circle.propTypes = _extends({}, AreaComponentPropTypes, {
  x: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  y: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  r: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
});

Area.Circle.defaultProps = _extends({}, AreaComponentDefaultProps);

Area.Bezier = (function(_AreaComponent6) {
  _inherits(Bezier, _AreaComponent6);

  function Bezier() {
    _classCallCheck(this, Bezier);

    return _possibleConstructorReturn(
      this,
      (Bezier.__proto__ || Object.getPrototypeOf(Bezier)).apply(this, arguments)
    );
  }

  _createClass(Bezier, [
    {
      key: 'drawPath',
      value: function drawPath(area, p, props) {
        var path = new _libuiNode2.default.UiDrawPath(
          _libuiNode2.default.fillMode.winding
        );
        path.newFigure(
          this.parseParent(this.props.x1, p),
          this.parseParent(this.props.y1, p, true)
        );
        path.bezierTo(
          this.parseParent(this.props.cx1, p),
          this.parseParent(this.props.cy1, p, true),
          this.parseParent(this.props.cx2, p),
          this.parseParent(this.props.cy2, p, true),
          this.parseParent(this.props.x2, p),
          this.parseParent(this.props.y2, p, true)
        );
        path.end();

        return path;
      },
    },
  ]);

  return Bezier;
})(AreaComponent);

Area.Bezier.propTypes = _extends({}, AreaComponentPropTypes, {
  x1: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  y1: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  cx1: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  cy1: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  x2: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  y2: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  cx2: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
  cy2: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]).isRequired,
});

Area.Path = (function(_AreaComponent7) {
  _inherits(Path, _AreaComponent7);

  function Path() {
    _classCallCheck(this, Path);

    return _possibleConstructorReturn(
      this,
      (Path.__proto__ || Object.getPrototypeOf(Path)).apply(this, arguments)
    );
  }

  _createClass(Path, [
    {
      key: 'drawPath',
      value: function drawPath(area, p, props) {
        var path = new _libuiNode2.default.UiDrawPath(
          this.props.fillRule === 'evenodd'
            ? _libuiNode2.default.fillMode.alternate
            : _libuiNode2.default.fillMode.winding
        );
        var commands = (0, _svgPathParser2.default)(this.props.d);
        _svgPathParser2.default.makeAbsolute(commands);

        for (var i = 0; i < commands.length; i++) {
          var c = commands[i];
          switch (c.command) {
            case 'moveto':
              path.newFigure(c.x, c.y);
              break;

            case 'lineto':
            case 'horizontal lineto':
            case 'vertical lineto':
              path.lineTo(c.x, c.y);
              break;

            case 'curveto':
              path.bezierTo(c.x1, c.y1, c.x2, c.y2, c.x, c.y);
              break;

            case 'smooth curveto':
              //uses point from previous curve
              var x1 = c.x0 - (commands[i - 1].x2 - c.x0);
              var y1 = c.y0 - (commands[i - 1].y2 - c.y0);
              path.bezierTo(x1, y1, c.x2, c.y2, c.x, c.y);
              break;

            case 'closepath':
              path.closeFigure();
              break;

            default:
              // 'quadratic curveto', 'elliptical arc'
              throw new Error(
                'Not implemented in Area.Path - ' + c.code + ': ' + c.command
              );
          }
        }

        path.end();

        return path;
      },
    },
  ]);

  return Path;
})(AreaComponent);

Area.Path.propTypes = _extends({}, AreaComponentPropTypes, {
  d: _propTypes2.default.string.isRequired,
  fillRule: _propTypes2.default.oneOf(['nonzero', 'evenodd']),
});

Area.Path.defaultProps = {
  fillRule: 'nonzero',
};

Area.Text = (function(_AreaComponent8) {
  _inherits(AreaText, _AreaComponent8);

  function AreaText(root, props) {
    _classCallCheck(this, AreaText);

    var _this10 = _possibleConstructorReturn(
      this,
      (AreaText.__proto__ || Object.getPrototypeOf(AreaText)).call(
        this,
        root,
        props
      )
    );

    _this10.children = [];

    _this10.str = new _libuiNode2.default.AttributedString('');
    return _this10;
  }

  _createClass(AreaText, [
    {
      key: 'appendChild',
      value: function appendChild(child) {
        this.children.push(child);
      },
    },
    {
      key: 'removeChild',
      value: function removeChild(child) {
        if (child.children) {
          // we recursively remove all children
          child.children.forEach(function(w) {
            child.removeChild(w);
          });
        }
        var index = this.children.indexOf(child);
        this.children.splice(index, 1);
      },
    },
    {
      key: 'insertChild',
      value: function insertChild(child, beforeChild) {
        var beforeIndex = this.children.indexOf(beforeChild);
        this.children.splice(beforeIndex, 0, child);
      },
    },
    {
      key: 'update',
      value: function update(oldProps, newProps) {
        this.props = _extends({}, this.props, newProps, newProps.children);

        // For text nodes, `appendChild` gets called only on the initial render.
        // `removeChild` is never called. Therefore: updating this.children manually
        // to apply text changes...
        var newChildren = [].concat(newProps.children).filter(Boolean);
        for (var x in newChildren) {
          if (
            typeof newChildren[x] === 'string' &&
            newChildren[x] != this.children[x]
          ) {
            this.children[x] = newChildren[x];
          }
        }
        if (this.parent) this.getArea().queueRedrawAll();
      },
    },
    {
      key: 'appendText',
      value: function appendText(t) {
        for (
          var _len2 = arguments.length,
            attr = Array(_len2 > 1 ? _len2 - 1 : 0),
            _key2 = 1;
          _key2 < _len2;
          _key2++
        ) {
          attr[_key2 - 1] = arguments[_key2];
        }

        if (this.parent instanceof AreaText) {
          var _parent;

          (_parent = this.parent).appendText.apply(_parent, [t].concat(attr));
        } else {
          if (attr) {
            var _str;

            (_str = this.str).appendAttributed.apply(_str, [t].concat(attr));
          } else {
            this.str.appendUnattributed(t);
          }
        }
      },
    },
    {
      key: 'draw',
      value: function draw(parent, area, p, props) {
        var _this11 = this;

        var parentStyle =
          arguments.length > 4 && arguments[4] !== undefined
            ? arguments[4]
            : {};

        this.parent = parent;
        var style = _extends({}, parentStyle, this.props.style);

        this.str.free();
        this.str = new _libuiNode2.default.AttributedString('');

        var attrs = Object.keys(style)
          .map(function(k) {
            var v = style[k];
            switch (k) {
              case 'color':
                var color = (0, _color2.default)(v);
                return _libuiNode2.default.FontAttribute.newColor(
                  toLibuiColor((0, _color2.default)(v))
                );
              case 'fontSize':
                return _libuiNode2.default.FontAttribute.newSize(Number(v));
              case 'fontFamily':
                return _libuiNode2.default.FontAttribute.newFamily(v);
              case 'backgroundColor':
                return _libuiNode2.default.FontAttribute.newBackgroundColor(
                  toLibuiColor((0, _color2.default)(v))
                );
              case 'fontStyle':
                if (v in _libuiNode2.default.textItalic) {
                  return _libuiNode2.default.FontAttribute.newItalic(
                    _libuiNode2.default.textItalic[v]
                  );
                }
                break;
              case 'fontWeight':
                if (
                  typeof v === 'string' &&
                  v in _libuiNode2.default.textWeight
                ) {
                  return _libuiNode2.default.FontAttribute.newWeight(
                    _libuiNode2.default.textWeight[v]
                  );
                } else if (
                  Number(v) >= _libuiNode2.default.textWeight.minimum &&
                  Number(v) <= _libuiNode2.default.textWeight.maximum
                ) {
                  return _libuiNode2.default.FontAttribute.newWeight(Number(v));
                }
                break;
              case 'textStretch':
                if (v in _libuiNode2.default.textStretch) {
                  return _libuiNode2.default.FontAttribute.newStretch(
                    _libuiNode2.default.textStretch[v]
                  );
                }
                break;
              case 'textUnderline':
                if (v in _libuiNode2.default.textUnderline) {
                  return _libuiNode2.default.FontAttribute.newUnderline(
                    _libuiNode2.default.textUnderline[v]
                  );
                }
                break;
              case 'textUnderlineColor':
                if (
                  v !== 'custom' &&
                  v in _libuiNode2.default.textUnderlineColor
                ) {
                  return _libuiNode2.default.FontAttribute.newUnderlineColor(
                    _libuiNode2.default.textUnderlineColor[v]
                  );
                } else {
                  return _libuiNode2.default.FontAttribute.newUnderlineColor(
                    _libuiNode2.default.textUnderlineColor[v],
                    toLibuiColor((0, _color2.default)(v))
                  );
                }
            }
          })
          .filter(function(x) {
            return x;
          });

        this.children.forEach(function(v) {
          if (typeof v === 'string') {
            _this11.appendText.apply(
              _this11,
              [v].concat(_toConsumableArray(attrs))
            );
          } else {
            v.draw(_this11, area, p, props, style);
          }
        });

        if (!(this.parent instanceof AreaText)) {
          var textAlign = void 0;
          switch (style.textAlign || 'left') {
            case 'left':
              textAlign = _libuiNode2.default.textAlign.left;
              break;
            case 'center':
              textAlign = _libuiNode2.default.textAlign.center;
              break;
            case 'right':
              textAlign = _libuiNode2.default.textAlign.right;
              break;
          }

          var font = new _libuiNode2.default.FontDescriptor(
            'Arial',
            12,
            _libuiNode2.default.textWeight.normal,
            _libuiNode2.default.textItalic.normal,
            _libuiNode2.default.textStretch.normal
          );

          var layout = new _libuiNode2.default.DrawTextLayout(
            this.str,
            font,
            p.getAreaWidth() - this.parseParent(this.props.x, p, false),
            textAlign
          );

          if (this.props.transform) {
            this.applyTransforms(p);
          }

          p.getContext().text(
            this.parseParent(this.props.x, p, false),
            this.parseParent(this.props.y, p, true),
            layout
          );

          font.free();
          layout.free();

          if (this.props.transform) {
            p.getContext().restore();
          }
        }
      },
    },
  ]);

  return AreaText;
})(AreaComponent);

function areaTextProp(props, propName, componentName) {
  var v = props[propName];
  if (
    !(
      v === false || // Needed for conditional rendering
      v === null ||
      typeof v === 'string' ||
      v.type === 'AREATEXT' ||
      v.type === _.StyledText
    )
  ) {
    return new Error(
      'Invalid prop `' +
        propName +
        '` supplied to' +
        ' `' +
        componentName +
        '`. Has to be a string or an Area.Text component.'
    );
  }
}

Area.Text.propTypes = {
  children: _propTypes2.default.oneOfType([
    areaTextProp,
    _propTypes2.default.arrayOf(areaTextProp),
  ]),
  x: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]),
  y: _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.string,
  ]),
};

Area.Text.defaultProps = {
  x: 0,
  y: 0,
};

exports.default = Area;
