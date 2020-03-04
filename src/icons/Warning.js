import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Warning extends React.PureComponent {
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
        <path fillRule="evenodd" d="M10 5.36l6.16 10.956H3.84L10 5.36zM10 2L1 18h18L10 2zm.818 11.79H9.182v1.684h1.636v-1.685zm0-5.053H9.182v3.368h1.636V8.737z" />
      </BaseIcons>
    );
  }
}
