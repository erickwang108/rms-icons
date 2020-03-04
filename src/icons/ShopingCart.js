import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class ShopingCart extends React.PureComponent {
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
        <path fillRule="nonzero" d="M6.4 15.4c-.99 0-1.791.81-1.791 1.8S5.41 19 6.4 19c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8zM1 1v1.8h1.8l3.24 6.831-1.215 2.205a1.74 1.74 0 0 0-.225.864c0 .99.81 1.8 1.8 1.8h10.8v-1.8H6.778a.223.223 0 0 1-.225-.225l.027-.108.81-1.467h6.705c.675 0 1.269-.369 1.575-.927l3.222-5.841A.903.903 0 0 0 18.1 2.8H4.789L3.943 1H1zm14.4 14.4c-.99 0-1.791.81-1.791 1.8S14.41 19 15.4 19c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8z" />
      </BaseIcons>
    );
  }
}
