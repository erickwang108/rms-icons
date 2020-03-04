import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class WeiboOtherVerified extends React.PureComponent {
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
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || '#FDD31C'} circleColor={circleColor || '#BD1B18'}>
        <title>{title}</title>
        <path id="round_1" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke="#FDCE02" strokeWidth="2" />
        <path id="letter_1" d="M5 6l3.408 9h3.001l3.343-9h-2.83l-1.983 6.473L7.916 6z" />
      </BaseIcons>
    );
  }
}
