import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Email(props) {
  return (
    <Wrapper {...props}>
      <path d="M1.593 5.086c.488.262 7.249 3.893 7.5 4.029.252.135.578.2.906.2.328 0 .653-.065.906-.2l7.5-4.03c.488-.262.95-1.085.053-1.085H1.539c-.897 0-.435.823.054 1.086zm17.018 2l-7.706 4.028c-.34.178-.578.201-.906.201-.33 0-.567-.023-.906-.2l-7.706-4.03C.996 6.882 1 7.122 1 7.306v7.335c0 .42.559.959.992.959h16.016c.433 0 .992-.54.992-.959V7.305c0-.184.002-.424-.389-.22z" />
    </Wrapper>
  );
}

Email.propTypes = PROP_TYPES;
Email.defaultProps = DEFAULT_PROPS;
