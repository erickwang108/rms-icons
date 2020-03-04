import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Eye extends React.PureComponent {
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
        <path fillRule="evenodd" d="M1 10.192L10.192 1l9.193 9.192-9.193 9.193L1 10.192zm2.121 0l7.071 7.071 7.071-7.07-7.07-7.072-7.072 7.071zM9.2 6.146h2v5h-2v-5zM9.2 13h2v2h-2v-2z" />
      </BaseIcons>
    );
  }
}
