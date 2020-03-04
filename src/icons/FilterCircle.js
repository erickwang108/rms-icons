import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class FilterCircle extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.string,
    circleColor: PropTypes.string,
    title: PropTypes.node,
  };
  render() {
    const {
      color,
      fontSize,
      circleColor,
      title = '',
    } = this.props;
    return (
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || '#ffffff'} circleColor={circleColor || '#b6b8c1'} >
        <title>{title}</title>
        <circle cx="10" cy="10" r="9" />
        <path fillRule="evenodd" d="M13.966 6.222c.064.156.038.288-.08.398L11.09 9.422v4.215a.34.34 0 01-.222.335.376.376 0 01-.142.028.34.34 0 01-.255-.107l-1.453-1.454a.345.345 0 01-.107-.255V9.42L6.114 6.619c-.117-.109-.144-.242-.08-.397A.34.34 0 016.37 6h7.261c.161 0 .272.075.335.222z" />
      </BaseIcons>
    );
  }
}
