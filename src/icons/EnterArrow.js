import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class EnterArrow extends React.PureComponent {
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
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || '#B2B9C8'}>
        <title>{title}</title>
        <path fillRule="evenodd" d="M10 19l-1.575-1.575 6.3-6.3H1v-2.25h13.725l-6.3-6.3L10 1l9 9z" />
      </BaseIcons>
    );
  }
}
