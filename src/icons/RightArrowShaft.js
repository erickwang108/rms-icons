import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class RightArrowShaft extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.string,
    title: PropTypes.node,
  };
  render() {
    const {
      color,
      fontSize,
      title = '',
    } = this.props;
    return (
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || ''}>
        <title>{title}</title>
        <path fillRule="evenodd" d="M11.8 9.294H1v2.118h10.8l-3.812 3.812 1.483 1.482 6.353-6.353L9.47 4 7.988 5.482 11.8 9.294zm5.082 7.412H19V4h-2.118v12.706z" />
      </BaseIcons>
    );
  }
}
