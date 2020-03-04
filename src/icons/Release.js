import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Release extends React.PureComponent {
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
        <path fillRule="nonzero" d="M18.325 17.566h-11.7c.112-.113.338-.225.563-.338.45-.337 1.8-1.35 2.362-2.362l5.625-9.788c.337-.562.45-1.125.337-1.687-.112-.675-.45-1.125-.9-1.463l-1.124-.675c-.45-.337-1.125-.337-1.688 0-.563.113-1.013.563-1.35 1.013l-5.625 9.787c-.563 1.013-.788 2.7-.788 3.263-.112 1.125-.112 1.8 0 2.25H1.675c-.338 0-.675.225-.675.675 0 .337.337.675.675.675h16.65c.338 0 .675-.338.675-.675 0-.45-.337-.675-.675-.675zM6.063 12.728l5.625-9.787c.112-.338.45-.563.675-.675.112 0 .225-.113.337-.113h.225l1.125.675c.112.113.225.338.225.45 0 .225 0 .563-.225.9l-5.625 9.788c-.45.9-2.25 2.137-3.038 2.587-.112-.787.113-2.925.676-3.825z" />
      </BaseIcons>
    );
  }
}
