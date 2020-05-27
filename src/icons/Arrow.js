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

export default function Arrow(props) {
  const { thin, color, direction, ...restProps } = props;
  const wrapperProps = {
    ...restProps,
    transform: getTransform(direction),
  };
  const points = thin
    ? '160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 '
    : '160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 ';

  return (
    <Wrapper {...wrapperProps}>
      <polygon
        fill={color}
        points={points}
      />
    </Wrapper>
  );
}

Arrow.propTypes = {
  thin: PropTypes.bool,
  color: PropTypes.string,
  viewBox: PropTypes.string,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
};

Arrow.defaultProps = {
  thin: false,
  color: '#121313',
  viewBox: '0 0 512 512',
  direction: 'right',
};
