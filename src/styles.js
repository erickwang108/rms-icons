import styled from 'styled-components';

export const BaseIcons = styled.svg`
  font-size: ${props => props.fontSize};
  width: ${props => props.fontSize};
  height: ${props => props.fontSize};
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
