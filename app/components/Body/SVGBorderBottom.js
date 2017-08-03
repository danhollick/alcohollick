import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';

const Shape = styled.polygon`
  ${tachyons}
  color: ${props => props.primary ? 'var(--red)' : 'var(--green)'};
`;

const SVGContainer =styled.svg`
  ${tachyons}  
  fill: ${props => props.primary ? 'var(--red)' : 'var(--green)'};
`;

export default class SVGBorderBottom extends React.PureComponent {
  render() {
    return (
        <SVGContainer primary={this.props.primary} width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 100 100">
            <Shape points="0,0 100,0 100,20 0,100" primary={this.props.primary} />
        </SVGContainer>
    );
  }
}
