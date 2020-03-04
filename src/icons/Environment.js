import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Environment extends React.PureComponent {
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
        <path fillRule="evenodd" d="M17.186 11.614l-4.453 3.072h-2.608l-.651-.614h2.394c.72 0 1.567-.264 1.609-.975.041-.711-.525-1.043-1.225-1.092-1.11.007-2.375-.15-3.796-.472-2.13-.481-3.285-.128-3.946.51L1 15.3l3.91 3.687 1.305-1.843h6.16a2.78 2.78 0 0 0 1.782-.639l4.91-4.112a.52.52 0 0 0-.044-.842c-.71-.454-1.482-.13-1.837.063zM11.08 5.14V9a5.047 5.047 0 0 0-3.202.882.37.37 0 0 0-.09.533c.129.17.358.166.555.086 1.084-.44 2.002-.362 3.15-.245.958.17 2.051.613 2.899 1.548.095.105.208.196.348.196a.409.409 0 0 0 .192-.048.373.373 0 0 0 .155-.518c-.688-1.19-1.864-2.023-3.212-2.321V7.88h1.94c1.204 0 2.184-.94 2.184-2.095V4.76a.39.39 0 0 0-.397-.381h-2.337c-.528 0-1.012.18-1.39.48V3.713C11.876 2.217 10.606 1 9.047 1h-2.65A.39.39 0 0 0 6 1.38v1.047C6 3.923 7.269 5.14 8.829 5.14h2.252z" />
      </BaseIcons>
    );
  }
}
