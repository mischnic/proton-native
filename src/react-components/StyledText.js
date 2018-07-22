import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Area } from '../';
import { HasAreaParentContext } from './Area';

class StyledText extends Component {
  render() {
    const { children, ...otherProps } = this.props;

    return React.createElement(
      HasAreaParentContext.Consumer,
      null,
      hasParent => {
        if (!hasParent) {
          // get width & height?
          return React.createElement(
            Area,
            { scrolling: { w: 0, h: 0 } },
            React.createElement(Area.Text, otherProps, children)
          );
        } else {
          return React.createElement(Area.Text, otherProps, children);
        }
      }
    );
  }
}

StyledText.propTypes = {};

StyledText.defaultProps = {};

export default StyledText;
