import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';
import Wrapper from 'components/Body/Wrapper';

const H1 = styled.h1`
  ${tachyons}
  color: ${props => props.primary ? 'white' : 'rgba(0,0,0,.7)'};
`;

const BodyCopy = styled.p`
  ${tachyons}
  color: ${props => props.primary ? 'white' : 'rgba(0,0,0,.7)'};
`;


export default class TextBlock extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper dtc v_mid ph6_l ph5_m ph4 >
      <H1 f3 primary={this.props.primary}>{this.props.title} </H1>
        <BodyCopy primary={this.props.primary} mt4 fw2 measure >{this.props.description}<br/>{this.props.description1}<br/>{this.props.descriptionExtra}</BodyCopy>
        <BodyCopy primary={this.props.primary} mt2 fw2 measure >{this.props.description2}</BodyCopy>
      </Wrapper>
    )
  }
}
