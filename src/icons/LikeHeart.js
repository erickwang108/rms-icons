import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class LikeHeart extends React.PureComponent {
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
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || '#f5f4f4'} circleColor={circleColor || '#000'} >
        <title>{title}</title>
        <circle cx="9" cy="9" r="9" />
        <path fillRule="evenodd" d="M9.1 6.283c-.61-1.156-1.787-1.668-3.133-1.43-1.814.32-2.676 2.276-1.855 4.158.928 2.127 3.047 3.63 4.988 4.777 1.94-1.148 4.06-2.65 4.988-4.777.821-1.882-.04-3.837-1.855-4.158-1.346-.238-2.523.274-3.133 1.43z" />
      </BaseIcons>
    );
  }
}
