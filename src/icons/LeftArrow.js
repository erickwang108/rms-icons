import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class LeftArrow extends React.PureComponent {
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
        <path fillRule="evenodd" d="M12.731 5.601a.317.317 0 0 1 0 .461L8.794 10l3.937 3.938a.317.317 0 0 1 0 .46l-.5.502a.317.317 0 0 1-.461 0L7.1 10.23a.317.317 0 0 1 0-.46l4.67-4.67a.317.317 0 0 1 .46 0l.501.501z" />
      </BaseIcons>
    );
  }
}
