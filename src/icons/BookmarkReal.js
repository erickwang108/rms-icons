import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class BookmarkReal extends React.PureComponent {
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
        <path fillRule="evenodd" d="M15.848 1c.182 0 .357.036.523.107.262.103.47.266.625.488.155.222.232.468.232.737v15.336c0 .27-.077.515-.232.737a1.34 1.34 0 0 1-.625.488 1.34 1.34 0 0 1-.523.095c-.38 0-.71-.127-.987-.38l-5.247-5.045-5.247 5.044A1.418 1.418 0 0 1 3.38 19c-.182 0-.357-.036-.523-.107a1.34 1.34 0 0 1-.625-.488A1.262 1.262 0 0 1 2 17.668V2.332c0-.27.077-.515.232-.737a1.34 1.34 0 0 1 .625-.488c.166-.071.34-.107.523-.107h12.468z" />
      </BaseIcons>
    );
  }
}
