import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';



const FullHeightSection = styled.div`
  ${tachyons}
  height: 100vh;
  width: 100%;
  display: table;
`;

export default FullHeightSection;