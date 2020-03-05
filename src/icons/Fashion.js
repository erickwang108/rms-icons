import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Fashion(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M14.235 3.31L12.374 1h-3.97L6.39 3.31l2.374 2.884C5.474 6.825 3 9.421 3 12.522 3 16.092 6.28 19 10.312 19s7.313-2.907 7.313-6.478c0-3.101-2.474-5.697-5.764-6.328l2.374-2.883zm-3.923 13.44c-2.793 0-5.062-1.892-5.062-4.219 0-2.326 2.27-4.219 5.062-4.219 2.792 0 5.063 1.893 5.063 4.22 0 2.326-2.271 4.218-5.063 4.218z" />
    </Wrapper>
  );
}

Fashion.propTypes = PROP_TYPES;
Fashion.defaultProps = DEFAULT_PROPS;

