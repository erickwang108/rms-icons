import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Wrapper from '../Wrapper';

const Container = styled.div`
  margin: 1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: ${({ direction }) => {
    let val = 0;

    switch (direction) {
      case 'vertical': {
        val = 0.25;
        break;
      }
      case 'horizontal': {
        val = 0;
        break;
      }
      default: {
        break;
      }
    }

    return `rotate(${val}turn)`;
  }};
`;

export default function Dot(props) {
  const { color, viewBox, direction, ...restProps } = props;

  return (
    <Container direction={direction}>
      <Wrapper viewBox={viewBox} {...restProps}>
        <path
          fill={color}
          d="M7,31c3.309,0,6-2.691,6-6s-2.691-6-6-6s-6,2.691-6,6S3.691,31,7,31z M7,21c2.206,0,4,1.794,4,4s-1.794,4-4,4s-4-1.794-4-4   S4.794,21,7,21z"
        />
        <path
          fill={color}
          d="M19,25c0,3.309,2.691,6,6,6s6-2.691,6-6s-2.691-6-6-6S19,21.691,19,25z M29,25c0,2.206-1.794,4-4,4s-4-1.794-4-4   s1.794-4,4-4S29,22.794,29,25z"
        />
        <path
          fill={color}
          d="M43,19c-3.309,0-6,2.691-6,6s2.691,6,6,6s6-2.691,6-6S46.309,19,43,19z M43,29c-2.206,0-4-1.794-4-4s1.794-4,4-4   s4,1.794,4,4S45.206,29,43,29z"
        />
      </Wrapper>
    </Container>
  );
}

Dot.propTypes = {
  color: PropTypes.string,
  viewBox: PropTypes.string,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
};

Dot.defaultProps = {
  color: '#121313',
  viewBox: '0 0 48 48',
  direction: 'horizontal',
};
