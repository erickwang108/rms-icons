import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Book extends React.PureComponent {
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
        <path fillRule="evenodd" d="M17.364 3.441C16.455 3.132 15.457 3 14.5 3c-1.595 0-3.314.353-4.5 1.324C8.814 3.353 7.095 3 5.5 3 3.905 3 2.186 3.353 1 4.324V17.25c0 .22.205.441.41.441.08 0 .122-.044.204-.044 1.104-.573 2.7-.97 3.886-.97 1.595 0 3.314.352 4.5 1.323 1.105-.75 3.11-1.324 4.5-1.324 1.35 0 2.74.265 3.886.927.082.044.123.044.205.044.204 0 .409-.22.409-.441V4.324c-.49-.398-1.023-.662-1.636-.883zm0 11.912c-.9-.309-1.882-.441-2.864-.441-1.39 0-3.395.573-4.5 1.323V6.088c1.105-.75 3.11-1.323 4.5-1.323.982 0 1.964.132 2.864.44v10.148z" />
      </BaseIcons>
    );
  }
}
