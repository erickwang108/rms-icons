import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class SmileFace extends React.PureComponent {
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
        <path fillRule="evenodd" d="M13.15 9.1c.72 0 1.35-.63 1.35-1.35 0-.72-.63-1.35-1.35-1.35-.72 0-1.35.63-1.35 1.35 0 .72.63 1.35 1.35 1.35zm-6.3 0c.72 0 1.35-.63 1.35-1.35 0-.72-.63-1.35-1.35-1.35-.72 0-1.35.63-1.35 1.35 0 .72.63 1.35 1.35 1.35zM10 15.4c2.34 0 4.32-1.53 5.13-3.6H4.87c.81 2.07 2.79 3.6 5.13 3.6zM10 1c-4.95 0-9 4.05-9 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9zm0 16.2c-3.96 0-7.2-3.24-7.2-7.2S6.04 2.8 10 2.8s7.2 3.24 7.2 7.2-3.24 7.2-7.2 7.2z" />
      </BaseIcons>
    );
  }
}
