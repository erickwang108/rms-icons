import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Terminated extends React.PureComponent {
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
        <path fillRule="nonzero" d="M4.839 2.626L5.87 4.101a7.2 7.2 0 1 0 8.258 0l1.032-1.475A9 9 0 0 1 10 19 9 9 0 0 1 4.839 2.626zM9.1 10V1h1.8v9H9.1z" />
      </BaseIcons>
    );
  }
}
