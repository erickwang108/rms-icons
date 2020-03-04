import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Household extends React.PureComponent {
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
        <path fillRule="evenodd" d="M3.446 17.172V10.37l6.645-5.433 6.262 5.433v6.692s.022.49-.479.49h-4.44l.007-3.62s.046-.597-.66-.597H8.9c-.596 0-.533.597-.533.597L8.36 17.56l-4.537.006c-.39 0-.378-.394-.378-.394zM16.873 3.777V7.34l-1.767-1.463-.005-2.1h1.772zM1 9.864L10.146 2 19 9.826s-.533 1.003-1.958 0l-6.896-6.032-7.35 6.07C1.562 10.88 1 9.864 1 9.864z" />
      </BaseIcons>
    );
  }
}
