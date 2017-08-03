import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';
import Wrapper from 'components/Body/Wrapper';
import BodyCopy from 'components/Shared/BodyCopy.js';

const CircleText = styled.text`
  ${tachyons}
`;

const Circle = styled.svg`
  ${tachyons}
   fill: var(--light-purple);
`;

export default class RandomCircles extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper right_0 top_1_ns top_0 absolute db_ns dn >
        <Circle height="400" width="400" primary>
          <circle cx="200" cy="200" r="160" fill="#FFF7CE" opacity="0.7"/>
          <circle cx="140" cy="140" r="120" fill="#DCD6FF" opacity="0.7"/>
          <CircleText light_purple b x="10%" y="32%" text-anchor="middle"> Random shapes are totally</CircleText>
          <CircleText light_purple b x="10%" y="37%" text-anchor="middle"> on trend </CircleText>  
        </Circle>
      </Wrapper>
    )
  }
}
