import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Support extends React.PureComponent {
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
        <path fill="#fff" stroke="#9197A3" d="M7.139 7.253l4.535-5.135-.778 4.195h0l-.127.685h0l-.119.637-.11.591h7.717c.022.008.243.081.243.463v2.078a.65.65 0 01-.033.207l-2.76 7.294-.001.003-.003.008h0l-.001.003v.002l-.003.006c-.076.199-.187.21-.195.21H7.248a.088.088 0 01-.036-.01.245.245 0 01-.077-.062.6.6 0 01-.131-.391V7.651c0-.183.062-.316.135-.398h0zM3.5 9.265V18.5h-2V9.265h2z" />
      </BaseIcons>
    );
  }
}
