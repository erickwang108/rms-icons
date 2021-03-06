import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Download(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="nonzero" d="M9.434 15.248a.813.813 0 0 1-.005-.004L5.225 11c.302-.275.815-.787 1.176-1.125l2.798 2.845V1h1.602v11.726l2.826-2.851c.207.205.935.917 1.148 1.125l-4.209 4.248a.797.797 0 0 1-1.132 0zm7.965-2.46H19v3.566C19 17.813 17.823 19 16.377 19H3.623C2.177 19 1 17.813 1 16.354v-3.566h1.601v3.566c0 .568.459 1.03 1.022 1.03h12.754c.563 0 1.022-.462 1.022-1.03v-3.566z" />
    </Wrapper>
  );
}

Download.propTypes = PROP_TYPES;
Download.defaultProps = DEFAULT_PROPS;
