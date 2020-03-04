import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class ThumbDown extends React.PureComponent {
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
        <path fillRule="evenodd" d="M12.455 2H5.09c-.655 0-1.227.41-1.473.982L1.164 8.79c-.082.164-.164.327-.164.573V11c0 .9.736 1.636 1.636 1.636h5.155L6.973 16.4v.245c0 .328.163.655.327.9l.9.819 5.4-5.4c.327-.328.49-.737.49-1.146V3.636c0-.9-.735-1.636-1.635-1.636zm3.272 0v9.818H19V2h-3.273z" />
      </BaseIcons>
    );
  }
}
