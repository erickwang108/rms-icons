import React from 'react';
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

const Wrapper = React.forwardRef((props, ref) => {
  const { title, children, ...restProps } = props;

  return (
    <Container width="1em" height="1em" viewBox="0 0 20 20" {...restProps} ref={ref}>
      <title>{title}</title>
      {children}
    </Container>
  );
});

Wrapper.propTypes = {
  title: PropTypes.any,
  children: PropTypes.object,
};

export default Wrapper;

