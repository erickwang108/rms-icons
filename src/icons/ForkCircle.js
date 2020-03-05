import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function ForkCircle(props) {
  return (
    <Wrapper {...props} circleColor={props.circleColor || '#000'} >
      <circle cx="9" cy="9" r="9" />
      <path fillRule="nonzero" d="M13.457 12.135a.723.723 0 0 0-.223-.529L11.106 9.48l2.128-2.128a.723.723 0 0 0 .223-.529.736.736 0 0 0-.223-.54l-1.058-1.059a.736.736 0 0 0-.54-.223.723.723 0 0 0-.53.223L8.98 7.351 6.85 5.223A.723.723 0 0 0 6.322 5a.736.736 0 0 0-.54.223L4.722 6.281a.736.736 0 0 0-.223.541c0 .204.074.38.223.529l2.128 2.128-2.128 2.127a.723.723 0 0 0-.223.53c0 .21.074.39.223.54l1.058 1.058c.15.149.33.223.541.223.204 0 .38-.074.529-.223l2.128-2.128 2.127 2.128a.723.723 0 0 0 .53.223.736.736 0 0 0 .54-.223l1.058-1.058a.736.736 0 0 0 .223-.54z" />
    </Wrapper>
  );
}

ForkCircle.propTypes = PROP_TYPES;
ForkCircle.defaultProps = DEFAULT_PROPS;
