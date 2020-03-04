import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class ThumbUp extends React.PureComponent {
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
        <path fillRule="evenodd" d="M1 18.364h3.273V8.545H1v9.819zm18-9c0-.9-.736-1.637-1.636-1.637h-5.155l.818-3.763v-.246c0-.327-.163-.654-.327-.9L11.8 2 6.4 7.4c-.327.245-.49.655-.49 1.145v8.182c0 .9.735 1.637 1.635 1.637h7.364c.655 0 1.227-.41 1.473-.982l2.454-5.81c.082-.163.082-.408.082-.572V9.364H19c0 .081 0 0 0 0z" />
      </BaseIcons>
    );
  }
}
