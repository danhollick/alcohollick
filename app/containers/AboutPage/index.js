/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css'
import { Link } from 'react-router';
import FullHeightSection from 'components/Shared/FullHeightSection.js';
import Nav from 'components/Nav';
import Wrapper from 'components/Body/Wrapper';
import H1 from 'components/Shared/H1.js';
import BodyCopy from 'components/Shared/BodyCopy.js';
import BodyLink from 'components/Shared/BodyLink.js';
import Logo from 'components/Shared/Logo.js';
import logo from '/Users/DanHollick/dev/alcohollick/app/assets/simplePortrait@2x.png';
import SocialLinks from 'components/Shared/SocialLinks.js';

const FlexCont = styled.div`
  ${tachyons}
  display : inline-flex;
`



export default class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FullHeightSection bg_green vh_100 > 
        <Nav />
        <Wrapper flex items_center w_100 vh_75>
          <FlexCont ml6_l ml5_m ml4 mt4 mt0_ns mb2 mb0_ns flex_row_ns flex  >
            <Wrapper w_75 mr7_l mr4_m mr2 >
              <H1 f3 white> I am a designer. </H1>
              <BodyCopy measure_wide_ns measure fw2 white> Currently working for <BodyLink link washed_green href="https://www.fusetools.com/"> Fuse </BodyLink> in Oslo, Norway (I didn't do that site).<br/> We do some cool shit.<br/>Previously at <BodyLink link washed_green href="https://www.barclaysafrica.com/barclaysafrica/"> Barclays Africa </BodyLink>, <BodyLink link washed_green href="http://www.mavenagency.co.za/"> Maven Agency,</BodyLink> <BodyLink link washed_green href="http://www.levergy.co.za/"> Levergy </BodyLink> </BodyCopy>
              <Wrapper mt4>
                <SocialLinks primary/>   
              </Wrapper>       
            </Wrapper>
            <Wrapper dt_ns w_25 dn>
                <Logo src={logo} height="200"  mr0 mr4_ns />
            </Wrapper>
          </FlexCont>
        </Wrapper>
      </FullHeightSection>
    );
  }
}
