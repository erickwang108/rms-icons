import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class SpeedDial extends React.PureComponent {
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
        <path fillRule="evenodd" clipRule="evenodd" d="M1 2a1 1 0 011-1h2.5a1 1 0 011 1v2.5a1 1 0 01-1 1H2a1 1 0 01-1-1V2zm6.75 0a1 1 0 011-1h2.5a1 1 0 011 1v2.5a1 1 0 01-1 1h-2.5a1 1 0 01-1-1V2zM19 2a1 1 0 00-1-1h-2.5a1 1 0 00-1 1v2.5a1 1 0 001 1H18a1 1 0 001-1V2zM1 8.75a1 1 0 011-1h2.5a1 1 0 011 1v2.5a1 1 0 01-1 1H2a1 1 0 01-1-1v-2.5zm11.25 0a1 1 0 00-1-1h-2.5a1 1 0 00-1 1v2.5a1 1 0 001 1h2.5a1 1 0 001-1v-2.5zm2.25 0a1 1 0 011-1H18a1 1 0 011 1v2.5a1 1 0 01-1 1h-2.5a1 1 0 01-1-1v-2.5zm-9 6.75a1 1 0 00-1-1H2a1 1 0 00-1 1V18a1 1 0 001 1h2.5a1 1 0 001-1v-2.5zm2.25 0a1 1 0 011-1h2.5a1 1 0 011 1V18a1 1 0 01-1 1h-2.5a1 1 0 01-1-1v-2.5zm11.25 0a1 1 0 00-1-1h-2.5a1 1 0 00-1 1V18a1 1 0 001 1H18a1 1 0 001-1v-2.5z" />
      </BaseIcons>
    );
  }
}
