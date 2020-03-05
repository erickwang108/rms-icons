import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Lock(props) {
  return (
    <Wrapper {...props}>
      <path d="M2.212 6.976V4.823C2.212 2.239 4.107 0 6.635 0h1.264c2.37 0 4.423 2.067 4.423 4.823v2.153h.632c.948 0 1.422.69 1.422 1.55v7.924c.158.861-.474 1.55-1.264 1.55H1.422C.632 18 0 17.311 0 16.45V8.526c0-.86.79-1.55 1.422-1.55h.79zm8.688 0V4.823C10.9 2.928 9.478 1.55 7.9 1.55H6.635c-1.738 0-3.002 1.378-3.002 3.273v2.153H10.9z" />
    </Wrapper>
  );
}

Lock.propTypes = PROP_TYPES;
Lock.defaultProps = DEFAULT_PROPS;
