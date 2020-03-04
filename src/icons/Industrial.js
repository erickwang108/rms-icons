import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class Industrial extends React.PureComponent {
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
        <path fillRule="evenodd" d="M15.48 6.757V1.75a.741.741 0 0 0-.737-.75H11.5a.742.742 0 0 0-.736.75v3.626L1.942 2.789c-.26-.099-.891.015-.942.72V18.25c0 .416.329.75.736.75h16.216a.742.742 0 0 0 .737-.75V8.264a.747.747 0 0 0-.531-.72l-2.679-.787zM12.233 2.5h1.769v3.829l-1.769-.519V2.5zm4.982 15.005H2.476V4.51l14.74 4.32v8.675zM5.693 10.021h2.166v5.054H5.693V10.02zm3.278 0h2.166v5.054H8.97V10.02zm3.249 0h2.166v5.054H12.22V10.02z" />
      </BaseIcons>
    );
  }
}
