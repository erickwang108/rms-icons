import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Fork extends React.PureComponent {
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
        <path fillRule="evenodd" d="M10.004 11.111L2.858 18.33a.673.673 0 0 1-.96 0 .69.69 0 0 1 0-.969l7.07-7.344-7.07-7.346a.69.69 0 0 1 0-.969.672.672 0 0 1 .96 0l7.146 7.218 7.147-7.218a.672.672 0 0 1 .959 0 .69.69 0 0 1 0 .969l-7.07 7.346 7.07 7.344a.69.69 0 0 1 0 .97.673.673 0 0 1-.96 0l-7.146-7.219z" />
      </BaseIcons>
    );
  }
}
