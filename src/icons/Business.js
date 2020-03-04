import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Business extends React.PureComponent {
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
        <path fillRule="evenodd" d="M13.831 9.014c.545-.105 1.048-.513 1.13-1.416.068-.742-.143-1.122-.451-1.317.86-3.17-1.512-3.79-1.512-3.79s-1.771-2.72-5.23-.812c-.44.243-1.123.709-1.53 1.188-.655.63-1.098 1.652-1.169 3.31-.422.146-.754.516-.67 1.419.086.946.63 1.348 1.204 1.43.774 1.706 2.303 3.112 4.112 3.112 1.813 0 3.345-1.412 4.116-3.124zM5.883 7.09c0-.268.703-1.074.72-1.304 2.609.112 4.044-1.241 4.884-2.125.796.772 2.126 2.704 2.336 3.43 0 1.955-2.2 4.316-3.984 4.316-1.785 0-3.956-2.361-3.956-4.317zm6.482 4.664l1.106.256c1.902.435 2.964 1.786 3.44 3.761l.27 1.138c.111.653.56 2.091.379 2.091h-6.51l-.726-4.028c.326-.005.725 0 .614-.615l-.333-.827a.493.493 0 0 0-.144-.24l.06-.046 1.844-1.49zM9.023 13.53l-.342.627c-.257.813.297.81.623.813l-.725 4.028H2l.668-3.075c.534-2.085 1.568-3.478 3.469-3.913l1.123-.256 1.844 1.49c.02.016.04.03.063.045a.493.493 0 0 0-.144.241z" />
      </BaseIcons>
    );
  }
}
