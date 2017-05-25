import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';

const H1 = styled.h1`
  ${tachyons}
  color: ${props => props.primary ? 'white' : 'palevioletred'};
`;

export default H1;