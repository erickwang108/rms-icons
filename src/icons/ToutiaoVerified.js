import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class ToutiaoVerified extends React.PureComponent {
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
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || '#FFF'} circleColor={circleColor || '#D0021B'} >
        <title>{title}</title>
        <path fillRule="evenodd" id="round" d="M10 19a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" />
        <path fillRule="evenodd" id="letter" d="M16 6h-3.35l-4.174 5.211L7.056 6H4v1.223h1.223l2.713 9.2z" />
      </BaseIcons>
    );
  }
}
