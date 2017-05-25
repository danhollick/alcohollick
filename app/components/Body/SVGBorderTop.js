import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';

const Shape = styled.polygon`
  ${tachyons}
  color: ${props => props.primary ? 'var(--light-blue)' : 'var(--green)'};
`;

export default class SVGBorderTop extends React.PureComponent {
  render() {
    return (
        <svg width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 100 100">
            <Shape points="0,100 100,100 0,0 0,100" primary={this.props.primary} />
        </svg>
    );
  }
}
