import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';
import Wrapper from 'components/Body/Wrapper';
import SVGBorderBottom from 'components/Body/SVGBorderBottom';
import H1 from 'components/Shared/H1.js';
import H1Link from 'components/Shared/H1Link.js';
import BodyCopy from 'components/Shared/BodyCopy.js';
import SocialLinks from 'components/Shared/SocialLinks.js';


export default class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper bg_light_blue w_100 ph6_l ph5_m ph4 pt5_ns pt4 pb4>
        <H1 f3 light_purple> {this.props.title} </H1>
        <BodyCopy  mt4 measure_wide_ns measure fw2 light_purple>{this.props.description}<br/>{this.props.description1}</BodyCopy>
        <SocialLinks/>
      </Wrapper>
    )
  }
}
