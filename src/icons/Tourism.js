import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Tourism extends React.PureComponent {
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
        <path fillRule="nonzero" d="M18.673 1.327c.377.445.428 1.079.154 1.9a5.605 5.605 0 0 1-1.387 2.21l-2.068 2.068 2.055 8.938c.043.163-.008.304-.154.424L15.629 18.1a.363.363 0 0 1-.244.077.285.285 0 0 1-.09-.013.355.355 0 0 1-.27-.205l-3.583-6.525-3.326 3.327.68 2.491a.391.391 0 0 1-.102.398l-1.233 1.233a.4.4 0 0 1-.295.116H7.14a.461.461 0 0 1-.308-.167l-2.427-3.237-3.237-2.427c-.094-.06-.15-.158-.167-.295a.44.44 0 0 1 .116-.321l1.233-1.246a.4.4 0 0 1 .295-.116c.051 0 .086.005.103.013l2.491.68 3.327-3.325L2.04 4.975a.43.43 0 0 1-.218-.309.396.396 0 0 1 .116-.346l1.644-1.644c.12-.112.248-.146.385-.103l8.54 2.042 2.055-2.055a5.605 5.605 0 0 1 2.21-1.387c.821-.274 1.455-.223 1.9.154z" />
      </BaseIcons>
    );
  }
}
