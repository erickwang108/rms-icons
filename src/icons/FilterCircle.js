import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function FilterCircle(props) {
  return (
    <Wrapper {...props} color={props.color || '#ffffff'} circleColor={props.circleColor || '#b6b8c1'} >
      <circle cx="10" cy="10" r="9" />
      <path fillRule="evenodd" d="M13.966 6.222c.064.156.038.288-.08.398L11.09 9.422v4.215a.34.34 0 01-.222.335.376.376 0 01-.142.028.34.34 0 01-.255-.107l-1.453-1.454a.345.345 0 01-.107-.255V9.42L6.114 6.619c-.117-.109-.144-.242-.08-.397A.34.34 0 016.37 6h7.261c.161 0 .272.075.335.222z" />
    </Wrapper>
  );
}

FilterCircle.propTypes = PROP_TYPES;
FilterCircle.defaultProps = DEFAULT_PROPS;
