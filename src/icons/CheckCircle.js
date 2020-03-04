import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class CheckCircle extends React.PureComponent {
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
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || '#f5f4f4'} circleColor={circleColor || '#000'} >
        <title>{title}</title>
        <circle cx="10" cy="10" r="9" />
        <path fillRule="evenodd" d="M14.837 7.952c.109.109.163.24.163.395a.538.538 0 0 1-.163.395l-4.993 4.993a.538.538 0 0 1-.395.163.538.538 0 0 1-.395-.163l-2.891-2.891A.538.538 0 0 1 6 10.449c0-.155.054-.286.163-.395l.79-.79a.538.538 0 0 1 .394-.162c.155 0 .287.054.395.163l1.707 1.712 3.81-3.814A.538.538 0 0 1 13.652 7c.155 0 .286.054.395.163l.79.79z" />
      </BaseIcons>
    );
  }
}
