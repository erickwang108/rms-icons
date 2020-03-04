import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class JuniorModels extends React.PureComponent {
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
        <path fillRule="evenodd" d="M14.562 4.161l-1.264.67.26-1.376-1.004-1.005 1.376-.186L14.562 1l.595 1.264 1.413.186-1.004 1.005.223 1.376-1.227-.67zm0 3.72l-.632.334.111-.707-.483-.483.67-.112.334-.632.298.632.706.112-.52.483.111.707-.595-.335zm-4.24-5.282l-.632.335.112-.707-.484-.483.707-.112.297-.632.298.632.706.112-.483.483.112.707-.633-.335zm-.483 8.814c1.71 0 3.087-1.599 3.087-3.607S12.479 4.16 9.839 4.16 6.752 5.798 6.752 7.806s1.376 3.607 3.087 3.607zm5.839 5.393c-.075-3.496-.521-4.463-4.128-5.095 0 0-.521.595-1.711.595s-1.674-.595-1.674-.595c-3.57.595-4.09 1.599-4.128 4.983-.037.26-.037.298-.037.26v.372S4.893 19 9.839 19c4.983 0 5.839-1.674 5.839-1.674v-.297-.223z" />
      </BaseIcons>
    );
  }
}
