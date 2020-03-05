import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function ThumbCircleDownDown(props) {
  return (
    <Wrapper {...props} color={props.color || '#f5f4f4'} circleColor={props.circleColor || '#000'}>
      <circle cx="10" cy="10" r="9" stroke="#FFF" />
      <path fillRule="evenodd" transform="matrix(-1 0 0 1 20.333 0)" d="M7.333 7.667a.318.318 0 0 0-.099-.237A.325.325 0 0 0 7 7.333a.322.322 0 0 0-.237.097.322.322 0 0 0-.096.237c0 .09.032.168.096.234A.318.318 0 0 0 7 8a.32.32 0 0 0 .234-.099.32.32 0 0 0 .1-.234zm.834 2.666a.32.32 0 0 1-.1.235.32.32 0 0 1-.234.099h-1.5a.32.32 0 0 1-.234-.1.32.32 0 0 1-.099-.234V7a.32.32 0 0 1 .099-.234.32.32 0 0 1 .234-.1h1.5a.32.32 0 0 1 .235.1.32.32 0 0 1 .099.234v3.333zm5.88-.776c.19.212.286.47.286.776a.984.984 0 0 1-.3.703.952.952 0 0 1-.7.297h-1.442a.878.878 0 0 0 .099.24l.052.094c.062.128.109.227.14.297a2.028 2.028 0 0 1 .151.703c0 .083 0 .15-.002.203-.002.052-.01.13-.026.234a1.305 1.305 0 0 1-.063.26c-.026.07-.068.148-.125.235a.731.731 0 0 1-.208.21 1.141 1.141 0 0 1-.313.136c-.126.037-.27.055-.43.055a.32.32 0 0 1-.234-.099.905.905 0 0 1-.177-.26 1.55 1.55 0 0 1-.101-.271 13.272 13.272 0 0 0-.135-.633 1.665 1.665 0 0 0-.092-.253.798.798 0 0 0-.161-.25 7.687 7.687 0 0 1-.526-.625 9.533 9.533 0 0 0-.526-.63c-.181-.198-.313-.3-.396-.307a.342.342 0 0 1-.224-.107.314.314 0 0 1-.094-.226V7c0-.09.033-.168.099-.232a.345.345 0 0 1 .234-.101c.122-.004.396-.08.823-.23.268-.09.477-.158.628-.205a6.58 6.58 0 0 1 .633-.151c.27-.054.52-.081.75-.081h.672c.461.007.803.142 1.026.406.201.24.286.554.255.943.135.128.229.292.281.49a1.07 1.07 0 0 1 0 .609c.16.212.234.45.224.713 0 .112-.026.244-.078.396z" />
    </Wrapper>
  );
}

ThumbCircleDownDown.propTypes = PROP_TYPES;
ThumbCircleDownDown.defaultProps = DEFAULT_PROPS;
