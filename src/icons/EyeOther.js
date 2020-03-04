import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class EyeOther extends React.PureComponent {
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
        <path fillRule="evenodd" transform="translate(1 4)" d="M9 0a9.64 9.64 0 0 0-9 6.136 9.64 9.64 0 0 0 9 6.137 9.64 9.64 0 0 0 9-6.137A9.64 9.64 0 0 0 9 0zm0 10.227c-2.29 0-4.09-1.8-4.09-4.09 0-2.292 1.8-4.092 4.09-4.092s4.09 1.8 4.09 4.091c0 2.291-1.8 4.091-4.09 4.091zm0-6.545c-1.39 0-2.455 1.063-2.455 2.454C6.545 7.527 7.61 8.591 9 8.591c1.39 0 2.455-1.064 2.455-2.455 0-1.39-1.064-2.454-2.455-2.454z" />
      </BaseIcons>
    );
  }
}
