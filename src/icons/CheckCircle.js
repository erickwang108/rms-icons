import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function CheckCircle(props) {
  return (
    <Wrapper {...props} color={props.color || '#f5f4f4'} circleColor={props.circleColor || '#000'}>
      <circle cx="10" cy="10" r="9" />
      <path fillRule="evenodd" d="M14.837 7.952c.109.109.163.24.163.395a.538.538 0 0 1-.163.395l-4.993 4.993a.538.538 0 0 1-.395.163.538.538 0 0 1-.395-.163l-2.891-2.891A.538.538 0 0 1 6 10.449c0-.155.054-.286.163-.395l.79-.79a.538.538 0 0 1 .394-.162c.155 0 .287.054.395.163l1.707 1.712 3.81-3.814A.538.538 0 0 1 13.652 7c.155 0 .286.054.395.163l.79.79z" />
    </Wrapper>
  );
}

CheckCircle.propTypes = PROP_TYPES;
CheckCircle.defaultProps = DEFAULT_PROPS;
