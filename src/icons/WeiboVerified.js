import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class WeiboVerified extends React.PureComponent {
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
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || '#f5f4f4'} circleColor={circleColor || '#000'}>
        <title>{title}</title>
        <circle fillRule="evenodd" cx="10" cy="10" r="9" />
        <path fillRule="evenodd" d="M4.71 6.01l3.526 9.312h3.105L14.8 6.011h-2.927L9.82 12.708 7.727 6.011z" />
      </BaseIcons>
    );
  }
}
