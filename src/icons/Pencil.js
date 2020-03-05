import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Pencil(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="nonzero" d="M12.058 7.02l.92.919-9.058 9.059H3v-.92l9.058-9.059zm3.6-6.02a1 1 0 0 0-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L1 15.248v3.75h3.75L15.807 7.939l-3.75-3.75z" />
    </Wrapper>
  );
}

Pencil.propTypes = PROP_TYPES;
Pencil.defaultProps = DEFAULT_PROPS;
