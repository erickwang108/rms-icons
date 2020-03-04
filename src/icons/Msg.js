import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Msg extends React.PureComponent {
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
        <path fillRule="evenodd" d="M17.2 1H2.8C1.81 1 1 1.81 1 2.8V19l3.6-3.6h12.6c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8zM7.3 9.1H5.5V7.3h1.8v1.8zm3.6 0H9.1V7.3h1.8v1.8zm3.6 0h-1.8V7.3h1.8v1.8z" />
      </BaseIcons>
    );
  }
}
