import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';

const H1Link = styled.a`
  ${tachyons}
  &:hover {
      opacity: .5;
      transition: opacity .15s ease-in;
    }
  color: ${props => props.primary ? 'white' : 'var(--light-purple)'};
  -webkit-font-smoothing: antialiased;
`;

export default H1Link;