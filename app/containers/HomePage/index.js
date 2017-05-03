/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';

import FullHeightSection from 'components/Shared/FullHeightSection.js';
import Nav from 'components/Nav';
import Wrapper from 'components/Body/Wrapper';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FullHeightSection bg_gold dt >
          <Nav />
          <Wrapper dt bg_gold vh_100 w_100>
            <Wrapper dtc v_mid pb6>
              <h1> HomePage </h1>
              <text> Random Tasdknlasdk;klasd dashdashjkdkas </text>
            </Wrapper>
          </Wrapper>
        </FullHeightSection>
        
          <svg width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="0,0 100,0 100,20 0,100" color="#f2c800" />
          </svg>
        
        <FullHeightSection dt >
          <Wrapper dtc v_mid vh_100 w_100>
              <h1> HomePage </h1>
              <text> Random Tasdknlasdk;klasd dashdashjkdkas </text>
            </Wrapper>
        </FullHeightSection>
        </div>
    );
  }
}
