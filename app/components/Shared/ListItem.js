import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';
import Wrapper from 'components/Body/Wrapper';
import BodyCopy from 'components/Shared/BodyCopy.js';

const ListText = styled.text`
  ${tachyons}
`;

export default class ListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <BodyCopy mb0 mt4 measure fw2 white b > {this.props.listHeader} </BodyCopy>
        <ListText fw2 measure white >{this.props.listDescription}</ListText>
      </Wrapper>
    )
  }
}