import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function PostOverflow(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M14.59 5.957c-1.333 0-2.419-1.034-2.419-2.304V1H3.473C2.659 1 2 1.628 2 2.402v14.554c0 .774.66 1.401 1.473 1.401h12.37c.813 0 1.472-.627 1.472-1.401v-11h-2.724zm.296 9.278H4.429v-.939h10.457v.94zm0-3.006H4.429v-.94h10.457v.94zm0-3.945v.939H4.429v-.94h10.457zM12.869 1l4.446 4.222H14.43c-.862 0-1.56-.653-1.56-1.46V1z" />
    </Wrapper>
  );
}

PostOverflow.propTypes = PROP_TYPES;
PostOverflow.defaultProps = DEFAULT_PROPS;
