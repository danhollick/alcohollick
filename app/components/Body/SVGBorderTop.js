import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';

const Shape = styled.polygon`
  ${tachyons}
  color: ${props => props.primary ? 'var(--light-blue)' : 'var(--green)'};
`;

const SVGContainer =styled.svg`
  ${tachyons}  
  fill: ${props => props.primary ? 'var(--light-blue)' : 'var(--green)'};
`;

export default class SVGBorderTop extends React.PureComponent {
  render() {
    return (
        <SVGContainer width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 100 100" primary={this.props.primary}>
            <Shape points="0,100 100,100 0,0 0,100" primary={this.props.primary} />
        </SVGContainer>
    );
  }
}
