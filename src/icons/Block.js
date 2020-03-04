import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Block extends React.PureComponent {
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
        <path fillRule="nonzero" d="M6.4 1h7.2A5.4 5.4 0 0 1 19 6.4v7.2a5.4 5.4 0 0 1-5.4 5.4H6.4A5.4 5.4 0 0 1 1 13.6V6.4A5.4 5.4 0 0 1 6.4 1z" />
      </BaseIcons>
    );
  }
}
