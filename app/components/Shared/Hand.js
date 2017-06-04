import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled, { keyframes } from 'styled-components';
import 'variables.css';

const rotate360 = keyframes`
	0% {
		transform: rotate(0deg);
	}

	60% {
		transform: rotate(20deg);
	}
  100% {
		transform: rotate(0deg);
	}
`;

const Logo = styled.img`
  ${tachyons}
  animation: ${rotate360} 0.8s ease-in-out infinite;
`;

export default Logo;