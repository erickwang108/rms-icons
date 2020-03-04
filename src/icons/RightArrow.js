import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class RightArrow extends React.PureComponent {
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
        <path fillRule="evenodd" d="M12.731 9.77a.317.317 0 0 1 0 .46L8.062 14.9a.317.317 0 0 1-.46 0l-.502-.501a.317.317 0 0 1 0-.461L11.038 10 7.1 6.062a.317.317 0 0 1 0-.46l.501-.502a.317.317 0 0 1 .461 0l4.67 4.67z" />
      </BaseIcons>
    );
  }
}
