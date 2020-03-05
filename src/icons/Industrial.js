import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Industrial(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M15.48 6.757V1.75a.741.741 0 0 0-.737-.75H11.5a.742.742 0 0 0-.736.75v3.626L1.942 2.789c-.26-.099-.891.015-.942.72V18.25c0 .416.329.75.736.75h16.216a.742.742 0 0 0 .737-.75V8.264a.747.747 0 0 0-.531-.72l-2.679-.787zM12.233 2.5h1.769v3.829l-1.769-.519V2.5zm4.982 15.005H2.476V4.51l14.74 4.32v8.675zM5.693 10.021h2.166v5.054H5.693V10.02zm3.278 0h2.166v5.054H8.97V10.02zm3.249 0h2.166v5.054H12.22V10.02z" />
    </Wrapper>
  );
}

Industrial.propTypes = PROP_TYPES;
Industrial.defaultProps = DEFAULT_PROPS;
