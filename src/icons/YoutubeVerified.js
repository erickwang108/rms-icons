import React from 'react';
import PropTypes from 'prop-types';

import { BaseIcons } from '../styles';

export default class YoutubeVerified extends React.PureComponent {
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
      <BaseIcons width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize || '14px'} color={color || '#f5f4f4'} circleColor={circleColor || '#000'}>
        <title>{title}</title>
        <circle fill="#D8D8D8" cx="10" cy="10" r="9" />
        <path fill="#FFF" d="M8.128 15.337l-4.455-4.455 1.845-1.845 2.61 2.61 6.615-6.615 1.845 1.845z" />
      </BaseIcons>
    );
  }
}
