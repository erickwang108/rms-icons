import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Success(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M10 17.25a7.25 7.25 0 1 0 0-14.5 7.25 7.25 0 0 0 0 14.5zM10 19a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm-5-8.365L8.571 14 15 7.942l-1.31-1.364-5.119 4.888L6.38 9.34 5 10.635z" />
    </Wrapper>
  );
}

Success.propTypes = PROP_TYPES;
Success.defaultProps = DEFAULT_PROPS;

