import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Ellipse extends React.PureComponent {
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
        <path fillRule="nonzero" d="M3.25 8a2.257 2.257 0 0 1 2.25 2.25 2.257 2.257 0 0 1-2.25 2.25A2.257 2.257 0 0 1 1 10.25 2.257 2.257 0 0 1 3.25 8zm13.5 0A2.257 2.257 0 0 1 19 10.25a2.257 2.257 0 0 1-2.25 2.25 2.257 2.257 0 0 1-2.25-2.25A2.257 2.257 0 0 1 16.75 8zM10 8a2.257 2.257 0 0 1 2.25 2.25A2.257 2.257 0 0 1 10 12.5a2.257 2.257 0 0 1-2.25-2.25A2.257 2.257 0 0 1 10 8z" />
      </BaseIcons>
    );
  }
}
