import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Romace extends React.PureComponent {
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
        <path fillRule="evenodd" d="M10.059 14.758l4.101-5.543c.125-.172.22-.402.287-.692.067-.289.043-.62-.07-.996-.113-.375-.354-.683-.72-.925a1.722 1.722 0 0 0-.973-.3 1.788 1.788 0 0 0-.862.206 2.337 2.337 0 0 0-.638.527c-.282.313-.657.469-1.125.469-.461 0-.832-.156-1.114-.469a2.337 2.337 0 0 0-.638-.527 1.788 1.788 0 0 0-.862-.205 1.777 1.777 0 0 0-.984.299c-.36.242-.596.55-.709.925-.113.375-.137.707-.07.996.066.29.162.52.287.692l4.09 5.543zm7.734-9.27C18.598 6.863 19 8.368 19 10a8.804 8.804 0 0 1-1.207 4.518 8.96 8.96 0 0 1-3.275 3.275A8.804 8.804 0 0 1 10 19a8.804 8.804 0 0 1-4.518-1.207 8.96 8.96 0 0 1-3.275-3.275A8.804 8.804 0 0 1 1 10c0-1.633.402-3.139 1.207-4.518a8.96 8.96 0 0 1 3.275-3.275A8.804 8.804 0 0 1 10 1c1.633 0 3.139.402 4.518 1.207a8.946 8.946 0 0 1 3.275 3.281z" />
      </BaseIcons>
    );
  }
}
