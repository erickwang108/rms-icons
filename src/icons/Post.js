import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Post(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="nonzero" d="M15.108 6.14c-1.284 0-2.327-1.072-2.327-2.389V1H4.416C3.634 1 3 1.651 3 2.454v15.093C3 18.349 3.634 19 4.416 19h11.896c.781 0 1.415-.65 1.415-1.453V6.14h-2.62 0zm.165 10.09H5.455v-1.384h9.818v1.385h0zm0-2.768H5.455v-1.385h9.818v1.385h0zm0-5.539v1.385H5.455V7.923h9.818zM14.045 1l3.682 4.154h-2.39c-.713 0-1.292-.643-1.292-1.436h0V1z" />
    </Wrapper>
  );
}

Post.propTypes = PROP_TYPES;
Post.defaultProps = DEFAULT_PROPS;
