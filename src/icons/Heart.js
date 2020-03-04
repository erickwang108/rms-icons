import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Heart extends React.PureComponent {
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
        <path fillRule="evenodd" d="M10 18.356L8.74 17.11C4.06 13.022 1 10.267 1 6.89 1 4.133 3.16 2 5.95 2c1.53 0 3.06.711 4.05 1.867A5.436 5.436 0 0 1 14.05 2C16.84 2 19 4.133 19 6.889c0 3.378-3.06 6.133-7.74 10.222L10 18.356z" />
      </BaseIcons>
    );
  }
}
