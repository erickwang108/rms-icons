import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Media extends React.PureComponent {
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
        <path fillRule="evenodd" d="M1 18.007c0 .548.445.993.993.993h16.014a.994.994 0 0 0 .993-.993V1.993A.994.994 0 0 0 18.007 1H1.993A.994.994 0 0 0 1 1.993v16.014zm5.595-2.275c-.303.3-.714.483-1.171.483-.458 0-.868-.184-1.17-.483a1.638 1.638 0 0 1 0-2.33 1.65 1.65 0 0 1 2.34 0c.301.302.485.71.487 1.166a1.644 1.644 0 0 1-.486 1.164zm3.008.499v-.004a5.817 5.817 0 0 0-1.71-4.128 5.803 5.803 0 0 0-4.122-1.713v-2.38a8.193 8.193 0 0 1 5.808 2.415 8.206 8.206 0 0 1 2.414 5.81h-2.39zm4.243 0C13.842 10.673 9.328 6.15 3.775 6.148V3.769a12.417 12.417 0 0 1 8.802 3.657 12.427 12.427 0 0 1 3.654 8.805h-2.385z" />
      </BaseIcons>
    );
  }
}
