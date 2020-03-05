import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function ArrowShare(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M19 9.5l-7-7v4c-7 1-10 6-11 11 2.5-3.5 6-5.1 11-5.1v4.1l7-7z" />
    </Wrapper>
  );
}

ArrowShare.propTypes = PROP_TYPES;
ArrowShare.defaultProps = DEFAULT_PROPS;
