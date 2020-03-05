import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function IIcon(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" transform="translate(1 1)" d="M9 0c4.95 0 9 4.05 9 9s-4.05 9-9 9-9-4.05-9-9 4.05-9 9-9zm0 16.2c3.96 0 7.2-3.24 7.2-7.2S12.96 1.8 9 1.8 1.8 5.04 1.8 9s3.24 7.2 7.2 7.2zM9 7a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </Wrapper>
  );
}

IIcon.propTypes = PROP_TYPES;
IIcon.defaultProps = DEFAULT_PROPS;
