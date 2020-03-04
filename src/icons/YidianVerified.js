import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class YidianVerified extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.string,
    circleColor: PropTypes.string,
    title: PropTypes.node,
  };
  render() {
    const {
      color,
      fontSize,
      circleColor,
      title = '',
    } = this.props;
    return (
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || '#FFF'} circleColor={circleColor || '#558DFF'} >
        <title>{title}</title>
        <path fillRule="evenodd" id="polygonal" d="M18.456 8.875l-1.887-1.887V4.883c0-.87-.69-1.56-1.56-1.56h-2.106l-1.887-1.888c-.58-.58-1.56-.58-2.141 0L6.988 3.323H4.883c-.87 0-1.56.69-1.56 1.56v2.105L1.435 8.875c-.58.58-.58 1.56 0 2.141l1.888 1.887v2.105c0 .871.69 1.56 1.56 1.56h2.105l1.887 1.888c.58.58 1.56.58 2.141 0l1.887-1.887h2.105c.871 0 1.56-.69 1.56-1.56v-2.106l1.888-1.887c.58-.617.58-1.56 0-2.141z" />
        <path fillRule="evenodd" id="word" d="M13.52 8.657L9.855 12.36a.81.81 0 0 1-1.161 0L6.334 10a.81.81 0 0 1 0-1.161.81.81 0 0 1 1.162 0l1.778 1.778 3.085-3.085a.81.81 0 0 1 1.161 0 .768.768 0 0 1 0 1.125z" />
      </BaseIcons>
    );
  }
}
