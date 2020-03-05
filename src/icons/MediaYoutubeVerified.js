import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function MediaYoutubeVerified(props) {
  return (
    <Wrapper {...props} color={props.color || '#f5f4f4'} circleColor={props.circleColor || '#000'}>
      <circle fill="#D8D8D8" cx="10" cy="10" r="9" />
      <path fill="#FFF" d="M8.128 15.337l-4.455-4.455 1.845-1.845 2.61 2.61 6.615-6.615 1.845 1.845z" />
    </Wrapper>
  );
}

MediaYoutubeVerified.propTypes = PROP_TYPES;
MediaYoutubeVerified.defaultProps = DEFAULT_PROPS;
