import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Twitter extends React.PureComponent {
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
        <path fillRule="evenodd" d="M6.736 5.386a1.3 1.3 0 0 0-.395-.954 1.3 1.3 0 0 0-.955-.395 1.3 1.3 0 0 0-.954.395 1.3 1.3 0 0 0-.395.954c0 .373.132.691.395.955a1.3 1.3 0 0 0 .954.395 1.3 1.3 0 0 0 .955-.395 1.3 1.3 0 0 0 .395-.955zm11.252 6.074c0 .373-.13.69-.39.95l-5.178 5.188a1.35 1.35 0 0 1-.96.39c-.372 0-.688-.13-.949-.39l-7.54-7.55c-.266-.26-.493-.616-.68-1.066-.186-.45-.279-.86-.279-1.233V3.362c0-.366.134-.682.4-.95.268-.266.584-.4.95-.4h4.387c.372 0 .783.093 1.233.28.45.186.809.412 1.076.68l7.54 7.529c.26.274.39.594.39.96z" />
      </BaseIcons>
    );
  }
}
