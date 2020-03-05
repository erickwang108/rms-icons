import React from 'react';

import Wrapper from '../Wrapper';

export default function Add(props) {
  return (
    <Wrapper {...props}>
      <path d="M10 2c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z" fill="#001D88" />
      <path d="M10.955 8.975h3.984c.566 0 .99.424.99.99 0 .565-.424.99-.99.99h-3.984v3.984c0 .566-.425.99-.99.99a.967.967 0 0 1-.99-.99v-3.984H4.99a.967.967 0 0 1-.99-.99c0-.566.424-.99.99-.99h3.985V4.99c0-.566.424-.99.99-.99.565 0 .99.424.99.99v3.985z" fill="#FFF" />
    </Wrapper>
  );
}
