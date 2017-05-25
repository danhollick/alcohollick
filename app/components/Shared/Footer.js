import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';
import Wrapper from 'components/Body/Wrapper';
import SVGBorderBottom from 'components/Body/SVGBorderBottom';
import H1 from 'components/Shared/H1.js';
import H1Link from 'components/Shared/H1Link.js';
import BodyCopy from 'components/Shared/BodyCopy.js';
import ListText from 'components/Shared/ListText.js';


export default class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper bg_light_blue w_100 pl6 pt5 pb4>
        <H1 f3 light_purple> {this.props.title} </H1>
        <BodyCopy  mt4 measure_wide fw2 light_purple>{this.props.description}<br/>{this.props.description1}</BodyCopy>
        <Wrapper flex mt4>
            <H1Link link mr4 f3 b light_purple href="https://twitter.com/DanHollick" target="_blank"> Twitter </H1Link>
            <H1Link link mh4 f3 b light_purple href="https://medium.com/@danhollick" target="_blank"> Medium </H1Link>
            <H1Link link mh4 f3 b light_purple href="https://www.instagram.com/squirrelabuser/" target="_blank"> Instagram </H1Link>
          </Wrapper>
      </Wrapper>
    )
  }
}
