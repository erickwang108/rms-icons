import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from '../Wrapper';

function getTransform(direction) {
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
  const { color, direction, ...restProps } = props;
  const wrapperProps = {
    ...restProps,
    transform: getTransform(direction),
  };

  return (
    <Wrapper {...wrapperProps}>
      <polygon
        fillRule="evenodd"
        points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 "
      />
    </Wrapper>
  );
}

Arrow.propTypes = {
  color: PropTypes.string,
  viewBox: PropTypes.string,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
};

Arrow.defaultProps = {
  color: '#121313',
  viewBox: '0 0 512 512',
  direction: 'right',
};
