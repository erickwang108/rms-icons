import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class MultiColorSurprisedFace extends React.PureComponent {
  static propTypes = {
    fontSize: PropTypes.string,
    title: PropTypes.node,
  };
  render() {
    const {
      fontSize,
      title = '',
    } = this.props;
    return (
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} >
        <title>{title}</title>
        <defs>
          <path id="a" d="M0 0h20v20H0z" />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(2 2)">
            <rect stroke="#BD7A05" fill="#F9E491" x="2.761" y="9.398" width="11.087" height="6.565" rx="3.283" />
            <ellipse stroke="#BD7A05" fill="#F9E491" cx="8" cy="7.826" rx="8" ry="6.435" />
            <circle stroke="#BD7A05" fill="#F9E491" cx="7.957" cy="2.217" r="2.217" />
            <path d="M9 12.42V5.913c1.538-1.388 2.891-1.563 4.06-.527 1.751 1.554 1.007 3.927.555 4.66-1.62 1.334-3.16 2.125-4.615 2.372zm-1.835-.027c-1.456-.247-2.994-1.038-4.615-2.373-.451-.733-1.196-3.106.556-4.66 1.168-1.036 2.52-.86 4.06.527v6.506z" fill="#CA0F00" />
          </g>
        </g>
      </BaseIcons>
    );
  }
}
