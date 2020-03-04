import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Help extends React.PureComponent {
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
        <path fillRule="evenodd" d="M9.1 15.4h1.8v-1.8H9.1v1.8zM10 1c-4.968 0-9 4.032-9 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9zm0 16.2c-3.969 0-7.2-3.231-7.2-7.2 0-3.969 3.231-7.2 7.2-7.2 3.969 0 7.2 3.231 7.2 7.2 0 3.969-3.231 7.2-7.2 7.2zm0-12.6a3.599 3.599 0 0 0-3.6 3.6h1.8c0-.99.81-1.8 1.8-1.8s1.8.81 1.8 1.8c0 1.8-2.7 1.575-2.7 4.5h1.8c0-2.025 2.7-2.25 2.7-4.5 0-1.989-1.611-3.6-3.6-3.6z" />
      </BaseIcons>
    );
  }
}
