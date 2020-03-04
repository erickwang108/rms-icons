import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class OriginalLink extends React.PureComponent {
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
        <path fillRule="evenodd" d="M17 17v-7h2v7c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h7v2H3v14h14zM11.657 1H19v7.343h-2.098V4.566l-10.28 10.28-1.468-1.468 10.28-10.28h-3.777V1z" />
      </BaseIcons>
    );
  }
}
