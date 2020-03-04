import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Delete extends React.PureComponent {
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
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || '#76829E'}>
        <title>{title}</title>
        <path fillRule="evenodd" d="M4 17c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5H4v12zM6 7h8v10H6V7zm7.5-5l-1-1h-5l-1 1H3v2h14V2h-3.5z" />
      </BaseIcons>
    );
  }
}
