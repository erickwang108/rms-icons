import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from '../Wrapper';

export default function Correct(props) {
  const { color, type, ...restProps } = props;

  let path = null;

  switch (type) {
    case 0: {
      return (
        <Wrapper
          {...restProps}
          viewBox="0 -46 417.81333 417"
        >
          <path fill={color} d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0" />
        </Wrapper>
      );
    }
    case 1: {
      return (
        <Wrapper
          {...restProps}
          viewBox="0 0 515.556 515.556"
        >
          <path fill={color} d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z" />
        </Wrapper>
      );
    }
    default: {
      break;
    }
  }

  return (
    <Wrapper
      {...restProps}
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0
      c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7
      C514.5,101.703,514.499,85.494,504.502,75.496z"
      />
    </Wrapper>
  );
}

Correct.propTypes = {
  color: PropTypes.string,
  type: PropTypes.number,
};

Correct.defaultProps = {
  color: '#000',
  type: 1,
};
