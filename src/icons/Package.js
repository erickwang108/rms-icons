import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Package(props) {
  return (
    <Wrapper {...props}>
      <path d="M18.54 3.23l-1.39-1.68C16.88 1.21 16.47 1 16 1H4c-.47 0-.88.21-1.16.55L1.46 3.23C1.17 3.57 1 4.02 1 4.5V17c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4.5c0-.48-.17-.93-.46-1.27zM4.24 3h11.52l.81.97H3.44l.8-.97zM3 17V6h14v11H3z" />
    </Wrapper>
  );
}

Package.propTypes = PROP_TYPES;
Package.defaultProps = DEFAULT_PROPS;
