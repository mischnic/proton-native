'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.HasAreaParentContext = undefined;

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('../');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

var HasAreaParentContext = _react2.default.createContext(false);

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

var Area = (function(_Component) {
  _inherits(Area, _Component);

  function Area() {
    _classCallCheck(this, Area);

    return _possibleConstructorReturn(
      this,
      (Area.__proto__ || Object.getPrototypeOf(Area)).apply(this, arguments)
    );
  }

  _createClass(Area, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          children = _props.children,
          stretchy = _props.stretchy,
          label = _props.label,
          column = _props.column,
          row = _props.row,
          span = _props.span,
          expand = _props.expand,
          align = _props.align,
          onMouseMove = _props.onMouseMove,
          onMouseUp = _props.onMouseUp,
          onMouseDown = _props.onMouseDown,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          onKeyUp = _props.onKeyUp,
          onKeyDown = _props.onKeyDown,
          onSizeChange = _props.onSizeChange,
          groupProps = _objectWithoutProperties(_props, [
            'children',
            'stretchy',
            'label',
            'column',
            'row',
            'span',
            'expand',
            'align',
            'onMouseMove',
            'onMouseUp',
            'onMouseDown',
            'onMouseEnter',
            'onMouseLeave',
            'onKeyUp',
            'onKeyDown',
            'onSizeChange',
          ]);

        var areaProps = {
          children: children,
          stretchy: stretchy,
          label: label,
          column: column,
          row: row,
          span: span,
          expand: expand,
          align: align,
          onMouseMove: onMouseMove,
          onMouseUp: onMouseUp,
          onMouseDown: onMouseDown,
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave,
          onKeyUp: onKeyUp,
          onKeyDown: onKeyDown,
          onSizeChange: onSizeChange,
        };
        return _react2.default.createElement(
          HasAreaParentContext.Provider,
          { value: true },
          _react2.default.createElement(
            _.AreaInternal,
            areaProps,
            _react2.default.createElement(Area.Group, groupProps, children)
          )
        );
      },
    },
  ]);

  return Area;
})(_react.Component);

Area.propTypes = _extends({}, AreaComponentPropTypes);

Area.defaultProps = _extends({}, AreaComponentDefaultProps);
exports.HasAreaParentContext = HasAreaParentContext;
exports.default = Area;
