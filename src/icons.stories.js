/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import * as icons from './index.js';

const GroupContainer = styled.div`
`;

const GroupName = styled.h3`
  margin-bottom: 8px;
  border-bottom: 2px solid #eee;
`;

const Container = styled.div`
  display: inline-block;
  text-align: center;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
`;

const IconContainer = styled.div`
  display: inline-block;
`;

const IconText = styled.div`
  font-size: 14px;
`;

const groups = Object.keys(icons).sort().reduce((obj, name) => {
  if (name) {
    const groupName = name.charAt(0);
    obj[groupName] = obj[groupName] || [];
    obj[groupName].push({
      id: name,
      icon: icons[name],
    });
  }
  return obj;
}, {});

storiesOf('Icons', module)
  .add('all', () => Object.keys(groups).map(g => (
    <GroupContainer key={g}>
      <GroupName>{g}</GroupName>
      {groups[g].map(({ id, icon }) => (
        <Container key={id}>
          <IconContainer>
            {React.createElement(icon)}
          </IconContainer>
          <IconText>{id}</IconText>
        </Container>
      ))}
    </GroupContainer>
  )));
