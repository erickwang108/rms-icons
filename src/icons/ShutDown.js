import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class ShutDown extends React.PureComponent {
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
        <path d="M11 1H9v10h2V1zm4.83 2.17l-1.42 1.42A6.92 6.92 0 0 1 17 10c0 3.87-3.13 7-7 7A6.995 6.995 0 0 1 5.58 4.58L4.17 3.17A8.932 8.932 0 0 0 1 10a9 9 0 0 0 18 0c0-2.74-1.23-5.18-3.17-6.83z" />
      </BaseIcons>
    );
  }
}
