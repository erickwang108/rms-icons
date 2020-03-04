import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class DownArrow extends React.PureComponent {
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
        <path fillRule="evenodd" d="M14.9 7.59c.067.065.1.14.1.225 0 .085-.033.16-.1.226l-4.67 4.575a.32.32 0 0 1-.46 0L5.1 8.041a.307.307 0 0 1-.1-.226c0-.085.033-.16.1-.226l.501-.49a.32.32 0 0 1 .461 0L10 10.956l3.938-3.859a.32.32 0 0 1 .46 0l.502.491z" />
      </BaseIcons>
    );
  }
}
