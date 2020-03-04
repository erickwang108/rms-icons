import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Plus extends React.PureComponent {
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
        <path fillRule="evenodd" d="M9 11H1V9h8V1h2v8h8v2h-8v8H9v-8z" />
      </BaseIcons>
    );
  }
}
