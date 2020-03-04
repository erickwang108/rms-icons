import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Reservedbox extends React.PureComponent {
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
        <path fillRule="evenodd" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM8 15l-5-5 1.4-1.4L8 12.2l7.6-7.6L17 6l-9 9z" />
      </BaseIcons>
    );
  }
}
