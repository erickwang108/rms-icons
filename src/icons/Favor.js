import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Favor(props) {
  return (
    <Wrapper {...props}>
      <path d="M10.686 1.426l2.188 4.435a.765.765 0 0 0 .576.418l4.894.712a.765.765 0 0 1 .424 1.304l-3.541 3.452a.765.765 0 0 0-.22.677l.836 4.874a.765.765 0 0 1-1.11.806l-4.377-2.3a.765.765 0 0 0-.712 0l-4.377 2.3a.765.765 0 0 1-1.11-.806l.836-4.874a.765.765 0 0 0-.22-.677L1.232 8.295a.765.765 0 0 1 .424-1.304l4.894-.712a.765.765 0 0 0 .576-.418l2.188-4.435a.765.765 0 0 1 1.372 0z" stroke={props.color || '#FDD31C'} fill="none" fillRule="evenodd" />
    </Wrapper>
  );
}

Favor.propTypes = PROP_TYPES;
Favor.defaultProps = DEFAULT_PROPS;
