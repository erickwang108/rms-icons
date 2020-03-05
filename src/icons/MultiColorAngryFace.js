import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';
import { genId } from '../utils';

export default function MultiColorAngryFace(props) {
  const idLinear = genId('_angry_face_');

  return (
    <Wrapper {...props}>
      <linearGradient id={idLinear} x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#F65366" /><stop offset="20.067%" stopColor="#F87168" /><stop offset="40.97%" stopColor="#FB9568" /><stop offset="70.803%" stopColor="#FEC96A" /><stop offset="100%" stopColor="#FFDB6B" /></linearGradient>
      <ellipse cx="9" cy="8.992" fill={`url(#${idLinear})`} rx="9" ry="8.992" />
      <path fill="#000" fillRule="nonzero" d="M13.699 10.652c.064.13.101.28.101.438 0 .497-.358.9-.8.9-.442 0-.8-.403-.8-.9 0-.048.003-.095.01-.142-.57.064-1.18.08-1.833.042a.4.4 0 1 1 .046-.798c1.51.088 2.757-.135 3.755-.559.292-.124.539-.256.74-.386.117-.075.19-.13.219-.156a.4.4 0 0 1 .526.602 2.84 2.84 0 0 1-.31.225 5.69 5.69 0 0 1-.862.45c-.25.107-.515.202-.792.284zm-7.706.317c.005.04.007.08.007.121 0 .497-.358.9-.8.9-.442 0-.8-.403-.8-.9 0-.139.028-.27.078-.388a7.474 7.474 0 0 1-.969-.333 5.69 5.69 0 0 1-.862-.451 2.84 2.84 0 0 1-.31-.225.4.4 0 1 1 .526-.602c.03.026.102.08.218.156.202.13.449.262.741.386.998.424 2.245.647 3.755.559a.4.4 0 1 1 .046.798c-.576.034-1.12.025-1.63-.021zM9 14.787c-1.546 0-2.6 0-2.8-.4-.2-.4 1.254-.6 2.8-.6 1.546 0 3 .2 2.8.6-.2.4-1.254.4-2.8.4z" />
    </Wrapper>
  );
}

MultiColorAngryFace.propTypes = PROP_TYPES;
MultiColorAngryFace.defaultProps = DEFAULT_PROPS;
