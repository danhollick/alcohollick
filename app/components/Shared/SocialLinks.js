import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';
import Wrapper from 'components/Body/Wrapper';
import H1Link from 'components/Shared/H1Link.js';



export default class SocialLinks extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <Wrapper flex mt4>
            <H1Link link mr4 f3 b primary={this.props.primary} href="https://twitter.com/DanHollick" target="_blank"> Twitter </H1Link>
            <H1Link link mh4 f3 b primary={this.props.primary} href="https://medium.com/@danhollick" target="_blank"> Medium </H1Link>
            <H1Link link mh4 f3 b primary={this.props.primary} href="https://www.instagram.com/squirrelabuser/" target="_blank"> Instagram </H1Link>
            <H1Link link mh4 f3 b primary={this.props.primary} href="https://github.com/danhollick" target="_blank"> Github </H1Link>
          </Wrapper>
    )
  }
}
