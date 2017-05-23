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
import BodyCopy from 'components/Shared/BodyCopy.js';
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
              <BodyCopy mt4 measure_wide fw2 white> Currently working for Fusetools.com in Oslo, Norway. We do some cool shit.<br/>Previously at Barclays Africa, Maven Agency, Levergy. </BodyCopy>
              <Wrapper mt6 dt w_100 >
                <H1 f3 white mr6> Hit Me Up Online </H1>
                <Wrapper pl6 dtc v_mid >
                  <H1 mh4 fr f3 white> Twitter </H1>
                  <H1 mh4 fr f3 white> Medium </H1>
                  <H1 mh4 fr f3 white> Instagram </H1>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </FullHeightSection>
    );
  }
}
