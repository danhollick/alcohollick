import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';

const Logo = styled.img`
  ${tachyons}

  transform: scale(1) rotate(0deg);
  transition: transform .25s ease-in-out;

  &:hover {
      transition: opacity .15s ease-in;
      transform: scale(1.2) rotate(180deg);
      transition: transform .5s ease-in-out;
    }
`;

export default Logo;