import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class ShareArrow extends React.PureComponent {
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
        <path fillRule="evenodd" d="M19 9.5l-7-7v4c-7 1-10 6-11 11 2.5-3.5 6-5.1 11-5.1v4.1l7-7z" />
      </BaseIcons>
    );
  }
}
