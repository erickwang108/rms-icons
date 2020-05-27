/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import * as icons from './index.js';
import Arrow from './icons/Arrow';
import DoubleArrow from './icons/DoubleArrow';

const GroupContainer = styled.div`
`;

const GroupName = styled.h3`
  font-size: 14px;
  padding-bottom: 8px;
  border-bottom: 2px solid #eee;
`;

const Container = styled.div`
  display: inline-block;
  text-align: center;
  margin: 10px;
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
            {React.createElement(icon, { hoverColor: 'red' })}
          </IconContainer>
          <IconText>{id}</IconText>
        </Container>
      ))}
    </GroupContainer>
  )))
  .add('arrows', () => {
    return (
      <React.Fragment>
        <GroupContainer>
          <GroupName>Normal Arrow</GroupName>
          <Container>
            <Arrow fontSize="18px" direction="up" />
          </Container>
          <Container>
            <Arrow fontSize="18px" direction="down" />
          </Container>
          <Container>
            <Arrow fontSize="18px" direction="left" />
          </Container>
          <Container>
            <Arrow fontSize="18px" direction="right" />
          </Container>
        </GroupContainer>
        <GroupContainer>
          <GroupName>Double Arrow</GroupName>
          <Container>
            <DoubleArrow color="blue" fontSize="24px" direction="up" />
          </Container>
          <Container>
            <DoubleArrow color="gray" fontSize="24px" direction="down" />
          </Container>
          <Container>
            <DoubleArrow color="red" fontSize="24px" direction="left" />
          </Container>
          <Container>
            <DoubleArrow color="green" fontSize="24px" direction="right" />
          </Container>
        </GroupContainer>
      </React.Fragment>
    );
  });
