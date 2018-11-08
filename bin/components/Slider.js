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

var Slider = (function(_DesktopComponent) {
  _inherits(Slider, _DesktopComponent);

  function Slider(root, props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(
      this,
      (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(
        this,
        root,
        props
      )
    );

    _this.eventParameter = { onChanged: 'value' };

    _this.root = root;
    _this.props = _extends({}, props);
    _this.setDefaults(props);
    _this.newElement();
    _this.initialProps(_this.props);
    return _this;
  }

  _createClass(Slider, [
    {
      key: 'newElement',
      value: function newElement() {
        this.element = new _libuiNode2.default.UiSlider(
          this.props.min,
          this.props.max
        );
      },
    },
    {
      key: 'minMaxAdjusted',
      value: function minMaxAdjusted(prop, newProps) {
        this.props = _extends({}, newProps);
        for (var i = this.lastParent.children.length - 1; i >= 0; i--) {
          // we go backwards cause otherwise we're trying to remove indexes in libui that don't exist, but still do in our local children array
          this.lastParent.deparentChild(this.lastParent.children[i]); // we remove all the children from the parent
        }

        this.element = new _libuiNode2.default.UiSlider(
          this.props.min,
          this.props.max
        ); // we make a new element
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (
            var _iterator = this.lastParent.children[Symbol.iterator](), _step;
            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
            _iteratorNormalCompletion = true
          ) {
            var child = _step.value;

            this.lastParent.reparentChild(child); // add back all of the children, in the same order
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

        if (
          this.props.value > this.props.max ||
          this.props.value < this.props.min
        ) {
          this.props.value = Math.max(
            Math.min(this.props.value, this.props.max),
            this.props.min
          ); // make the value inside the range
          this.props.onChange(this.props.value); // and trigger onChange so that the value can get updated
        }
        this.initialProps(this.props);
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

  return Slider;
})(_DesktopComponent3.default);

Slider.propTypes = _extends({}, _DesktopComponent2.universalPropTypes, {
  enabled: _propTypes2.default.bool,
  visible: _propTypes2.default.bool,
  value: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
});

Slider.defaultProps = _extends({}, _DesktopComponent2.universalDefaultProps, {
  enabled: true,
  visible: true,
  value: 0,
  onChange: function onChange() {},
  min: 0,
  max: 100,
});

exports.default = Slider;
