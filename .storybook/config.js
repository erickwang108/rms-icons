import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import styled from 'styled-components';
import { darken } from 'polished';

const Container = styled.div`
  margin: 30px 60px;
`;

addDecorator((story) => (
  <Container>
    {story()}
  </Container>
));

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
