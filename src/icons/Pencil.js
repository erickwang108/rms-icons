import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Pencil extends React.PureComponent {
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
        <path fillRule="nonzero" d="M12.058 7.02l.92.919-9.058 9.059H3v-.92l9.058-9.059zm3.6-6.02a1 1 0 0 0-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L1 15.248v3.75h3.75L15.807 7.939l-3.75-3.75z" />
      </BaseIcons>
    );
  }
}
