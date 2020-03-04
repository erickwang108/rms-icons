import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Success extends React.PureComponent {
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
        <path fillRule="evenodd" d="M10 17.25a7.25 7.25 0 1 0 0-14.5 7.25 7.25 0 0 0 0 14.5zM10 19a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm-5-8.365L8.571 14 15 7.942l-1.31-1.364-5.119 4.888L6.38 9.34 5 10.635z" />
      </BaseIcons>
    );
  }
}
