import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Education(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M16.062 8.954l-5.349 3.171-5.247-3.17-.436 2.705a.62.62 0 0 0-.086.307c0 .956 4.426 3.845 5.769 3.845 1.346 0 5.874-2.885 5.874-3.845 0-.101-.033-.203-.087-.506l-.438-2.507zm-5.308 2.61L2.533 6.613 10.776 4 19 6.574l-8.246 4.99zM2.587 7.051L1 14.38l1.26-1.677.939 1.84-.612-7.493z" />
    </Wrapper>
  );
}

Education.propTypes = PROP_TYPES;
Education.defaultProps = DEFAULT_PROPS;
