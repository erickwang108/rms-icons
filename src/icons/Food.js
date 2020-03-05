import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Food(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M17.176 13.625a.7.7 0 0 0 .696-.764 8.198 8.198 0 0 0-6.677-7.3c.008-.062.02-.123.02-.188 0-.702-.568-1.873-1.496-1.873S8.223 4.67 8.223 5.373c0 .065.011.126.02.189a8.198 8.198 0 0 0-6.678 7.299.7.7 0 0 0 .697.764h14.914zM8.875 5.111c0-.432.364-1.048.563-1.048.198 0 .562.616.562 1.048 0 .027-.011.05-.015.077-.182-.013-.363-.027-.547-.027-.185 0-.366.014-.548.027-.004-.027-.015-.05-.015-.077zm9.372 9.076c.416 0 .753.504.753 1.126 0 .62-.337 1.124-.753 1.124H1.753c-.416 0-.753-.503-.753-1.124 0-.622.337-1.126.753-1.126h16.494z" />
    </Wrapper>
  );
}

Food.propTypes = PROP_TYPES;
Food.defaultProps = DEFAULT_PROPS;
