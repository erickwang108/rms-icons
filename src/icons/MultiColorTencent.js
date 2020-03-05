import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function MultiColorTencent(props) {
  return (
    <Wrapper {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="61%" y2="104%" id="a">
          <stop stopColor="#FFE845" offset="0%" />
          <stop stopColor="#DB9F14" offset="100%" />
        </linearGradient>
      </defs>
      <path d="M3.798 8.112c-.09.245.042.4 0 1.331-.012.25-1.066 1.385-1.485 2.564-.415 1.168-.473 2.39.169 2.87.64.48 1.238-1.598 1.316-1.296.034.132.076.27.127.41.205.566.55 1.193 1.05 1.779.1.119-.618.338-1.05 1.09-.431.75.124 2.117 2.269 2.117 2.767 0 3.385-.996 3.442-.992.206.016.22 0 .438 0 .267 0 .157.022.405 0 .134-.012 1.48 1.193 3.341.992 3.172-.341 2.687-1.43 2.438-2.118-.26-.717-1.179-1.053-1.138-1.1.76-.86.88-1.388 1.138-2.178.106-.325.842 1.787 1.409 1.295.236-.205.709-1.059.236-2.87-.472-1.81-1.386-2.223-1.366-2.563.041-.706.017-1.203-.017-1.331-.17-.623-.522-.485-.522-.623 0-3.584-2.63-6.489-5.876-6.489-3.245 0-5.875 2.905-5.875 6.49 0 .284-.247.074-.45.622z" fill="uRl(#a)" fillRule="nonzero" />
    </Wrapper>
  );
}

MultiColorTencent.propTypes = PROP_TYPES;
MultiColorTencent.defaultProps = DEFAULT_PROPS;
