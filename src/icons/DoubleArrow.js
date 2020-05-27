import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from '../Wrapper';

function getTransform(direction) {
  if (typeof direction === 'number') {
    return `rotate(${direction})`;
  }

  switch (direction) {
    case 'down': {
      return 'rotate(90)';
    }
    case 'left': {
      return 'rotate(180)';
    }
    case 'up': {
      return 'rotate(270)';
    }
    default: {
      return 'rotate(0)';
    }
  }
}

export default function DoubleArrow(props) {
  const { color, viewBox, direction, ...restProps } = props;
  const wrapperProps = {
    ...restProps,
    viewBox,
    transform: getTransform(direction),
  };

  return (
    <Wrapper {...wrapperProps}>
      <path
        fill={color}
        d="M23.662,15.286l-6.9-6.999c-0.39-0.394-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428L21.544,16   l-6.196,6.285c-0.391,0.394-0.391,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l6.899-6.999   C24.038,16.335,24.039,15.666,23.662,15.286z"
      />
      <path
        fill={color}
        d="M16.662,15.286L9.763,8.287c-0.391-0.394-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428L14.544,16   l-6.196,6.285c-0.391,0.394-0.391,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l6.899-6.999   C17.038,16.335,17.039,15.666,16.662,15.286z"
      />
    </Wrapper>
  );
}

DoubleArrow.propTypes = {
  color: PropTypes.string,
  viewBox: PropTypes.string,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
};

DoubleArrow.defaultProps = {
  color: '#121313',
  viewBox: '0 0 32 32',
  direction: 'up',
};
