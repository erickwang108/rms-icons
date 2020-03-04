import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class CircleCheck extends React.PureComponent {
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
        <path d="M10 1c-4.968 0-9 4.032-9 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9zM8.2 14.5L3.7 10l1.269-1.269L8.2 11.953l6.831-6.831L16.3 6.4l-8.1 8.1z" />
      </BaseIcons>
    );
  }
}
