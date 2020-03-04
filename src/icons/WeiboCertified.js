import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class WeiboCertified extends React.PureComponent {
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
        <path fillRule="evenodd" d="M14.5005877,12.4287254 L10.0165133,15.7034216 L10,15.69474 L4.4376941,18.6190173 L5.5,12.4252987 L1,8.03888275 L7.21884705,7.13523138 L10,1.5 L12.7811529,7.13523138 L19,8.03888275 L14.5,12.4252987 L14.5005877,12.4287254 Z M14.6990948,13.5861101 L15.5623059,18.6190173 L11.0533975,16.2485439 L14.6990948,13.5861101 Z" />
      </BaseIcons>
    );
  }
}
