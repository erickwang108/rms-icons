import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class VCircle extends React.PureComponent {
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
        <circle cx="10" cy="10" r="9" stroke="#FFF" />
        <path fillRule="evenodd" d="M5.5 7h2.862l.249.574 1.622 3.856L12.167 7h2.36l-3.953 7.158h-1.17l-3.53-6.482z" />
      </BaseIcons>
    );
  }
}
