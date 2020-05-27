import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.svg`
  font-size: ${props => props.size};
  width: ${props => props.size};
  height: ${props => props.size};
  > path {
    fill: ${props => props.color};
    &#polygonal,
    &#round,
    &#round_1 {
      fill: ${props => props.circleColor};
    }
    &#word,
    &#letter,
    &#letter_1 {
      fill: ${props => props.color};
    }
  }
  > circle {
    fill: ${props => props.circleColor};
  }
`;

const Wrapper = React.forwardRef((props, fwdRef) => {
  const ref = fwdRef || createRef();
  const { title, viewBox, children, ...restProps } = props;

  return (
    <Container
      width="1em"
      height="1em"
      ref={ref}
      viewBox={viewBox}
      {...restProps}
    >
      <title>{title}</title>
      {children}
    </Container>
  );
});

Wrapper.propTypes = {
  title: PropTypes.any,
  viewBox: PropTypes.string,
  children: PropTypes.object,
};

Wrapper.defaultProps = {
  viewBox: '0 0 20 20',
};

export default Wrapper;

