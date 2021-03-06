import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function ITProduct(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M14.211 1H6.625C5.732 1 5 1.76 5 2.687v14.625C5 18.241 5.732 19 6.625 19h7.586c.894 0 1.626-.76 1.626-1.688V2.687C15.837 1.76 15.105 1 14.21 1zm-5.96 1.406h4.335v-.562H8.25v.562zm2.167 15.469c-.598 0-1.083-.504-1.083-1.125s.485-1.125 1.083-1.125c.599 0 1.084.504 1.084 1.125s-.485 1.125-1.084 1.125zM6.084 14.5h8.67V3.25h-8.67V14.5z" />
    </Wrapper>
  );
}

ITProduct.propTypes = PROP_TYPES;
ITProduct.defaultProps = DEFAULT_PROPS;
