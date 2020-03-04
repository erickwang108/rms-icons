import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Subtract extends React.PureComponent {
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
        <path fillRule="evenodd" d="M19 11H1V9h18z" />
      </BaseIcons>
    );
  }
}
