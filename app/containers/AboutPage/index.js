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

export default class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FullHeightSection bg_green dt relative pl6_l pl5_m pl4> 
        <Nav />
        <Wrapper bg_green vh_75_ns vh_25 w_100_ns dt mt6 mt0_ns mb5 mb0_ns mr4>
          <Wrapper dtc v_mid_ns w_75 >
            <H1 f3 white> I am a designer. </H1>
            <BodyCopy mt4 measure_wide_ns measure fw2 white> Currently working for <BodyLink link washed_green href="https://www.fusetools.com/"> Fuse </BodyLink> in Oslo, Norway (I didn't do that site).<br/> We do some cool shit.<br/>Previously at <BodyLink link washed_green href="https://www.barclaysafrica.com/barclaysafrica/"> Barclays Africa </BodyLink>, <BodyLink link washed_green href="http://www.mavenagency.co.za/"> Maven Agency,</BodyLink> <BodyLink link washed_green href="http://www.levergy.co.za/"> Levergy </BodyLink> </BodyCopy>
          </Wrapper>
          <Wrapper dtc_ns v_mid w_25 dn>
              <Logo src={logo} height="200" fr mr6 mr6_l mr4_m />
          </Wrapper>
        </Wrapper>
        <SocialLinks primary absolute_ns fixed bottom_0_ns />
      </FullHeightSection>
    );
  }
}
