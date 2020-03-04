import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Sciences extends React.PureComponent {
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
        <path fillRule="evenodd" d="M18.195 16.469c.438.695.522 1.29.252 1.787-.27.496-.818.744-1.646.744H3.3c-.829 0-1.377-.248-1.647-.744s-.185-1.092.252-1.787l5.895-9.293V2.5h-.75a.72.72 0 0 1-.528-.223.72.72 0 0 1-.222-.527.72.72 0 0 1 .222-.527A.72.72 0 0 1 7.051 1h6a.72.72 0 0 1 .527.223.72.72 0 0 1 .223.527.72.72 0 0 1-.223.527.72.72 0 0 1-.527.223h-.75v4.676l5.894 9.293zM9.066 7.973L5.88 13h8.343l-3.187-5.027-.234-.364V2.5H9.3v5.11l-.235.363z" />
      </BaseIcons>
    );
  }
}
