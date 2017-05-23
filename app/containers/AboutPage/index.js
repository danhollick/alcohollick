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
import SVGBorderBottom from 'components/Body/SVGBorderBottom';
import H1 from 'components/Shared/H1.js';
import H1Link from 'components/Shared/H1Link.js';
import BodyCopy from 'components/Shared/BodyCopy.js';
import BodyLink from 'components/Shared/BodyLink.js';
import logo from '/Users/DanHollick/dev/alcohollick/app/assets/simplePortrait@2x.png';



export default class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FullHeightSection bg_green dt >
          <Nav />
          <Wrapper bg_green vh_75 w_100 ph5 pt6>
            <Wrapper mt4 >
              <img src={logo} height="140" />
              <H1 f3 white> I am a designer. </H1>
              <BodyCopy mt4 measure_wide fw2 white> Currently working for <BodyLink link dark_green href="https://www.fusetools.com/"> Fuse </BodyLink> in Oslo, Norway (I didn't do that site).<br/> We do some cool shit.<br/>Previously at <BodyLink link dark_green href="https://www.barclaysafrica.com/barclaysafrica/"> Barclays Africa </BodyLink>, <BodyLink link dark_green href="http://www.mavenagency.co.za/"> Maven Agency,</BodyLink> <BodyLink link dark_green href="http://www.levergy.co.za/"> Levergy </BodyLink> </BodyCopy>
              <Wrapper w_100 absolute bottom_0 mb4>
                <H1 f3 white dib> Hit Me Up Online </H1>
                <Wrapper dib fr mr6 >
                  <H1Link link mr4 f3 b white href="https://twitter.com/DanHollick" target="_blank"> Twitter </H1Link>
                  <H1Link link mh4 f3 b white href="https://medium.com/@danhollick" target="_blank"> Medium </H1Link>
                  <H1Link link mh4 f3 b white href="https://www.instagram.com/squirrelabuser/" target="_blank"> Instagram </H1Link>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </FullHeightSection>
    );
  }
}
