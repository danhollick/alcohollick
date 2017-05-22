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
import SVGBorderBottom from 'components/Body/SVGBorderBottom';
import H1 from 'components/Shared/H1.js';
import BodyCopy from 'components/Shared/BodyCopy.js';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FullHeightSection bg_red dt >
          <Nav />
          <Wrapper dt bg_red vh_100 w_100 pa6>
            <Wrapper dtc v_mid pb6>
              <H1 f3 white> Hey, welcome to my site. </H1>
              <BodyCopy  mt4 measure fw2 white> Can you believe I learnt React to build this single page, static site? <br/> I know right. It’s kind of like using a tank to go to the grocery store </BodyCopy>
              <BodyCopy mt2 fw2 measure white> You can do it but it doesn’t mean it’s a good idea. </BodyCopy>
            </Wrapper>
          </Wrapper>
        </FullHeightSection>
        <svg width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,0 100,0 100,20 0,100" color="#DE7C7C" />
        </svg>
        <FullHeightSection dt>
          <Wrapper dtc v_mid vh_100 w_100 pa6>
              <H1 f3 black_70> Wouldn’t it have been easier to just use HTML and CSS? </H1>
              <BodyCopy  mt4 measure fw2 black_70>Yup. Like a lot easier.<br/> I don’t really have a witty response here. I should have done that</BodyCopy>
              <BodyCopy mt2 fw2 measure black_70> But I wanted to be a cool tech bro… </BodyCopy>
            </Wrapper>
        </FullHeightSection>
        <svg width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,100 100,100 0,0 0,100" color="#73BCBF" />
        </svg>
        <FullHeightSection dt>
          <Wrapper dtc v_mid vh_100 w_100 pa6 bg_green>
              <H1 f3 white> I know buzzwords. I have the best buzzwords: </H1>
              <BodyCopy  mt4 measure fw2 white >Yup. Like a lot easier.<br/> I don’t really have a witty response here. I should have done that</BodyCopy>
              <BodyCopy mt2 fw2 measure white > But I wanted to be a cool tech bro… </BodyCopy>
            </Wrapper>
        </FullHeightSection>
        <svg width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,0 100,0 100,0 0,100" color="#73BCBF" />
        </svg>
        <FullHeightSection dt>
          <Wrapper dtc v_mid vh_100 w_100 pa6>
              <H1 f3 black_70> Don’t sugar coat it. What are the downsides? </H1>
              <BodyCopy  mt4 measure fw2 black_70>Like 1mb of JS g-zipped.<br/> Also, JavaScript in general.<br/> Only having a vague idea how anything works. </BodyCopy>
              <BodyCopy mt2 fw2 measure black_70>Look, I ‘m not hating on React. But I think it only solves problems at scale. </BodyCopy>
            </Wrapper>
        </FullHeightSection>
        <svg width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,100 100,100 0,0 0,100" color="#E6FCFD" />
        </svg>
        <Wrapper bg_light_blue w_100 pa6>
          <H1 f3 light_purple> Hit me up online </H1>
          <BodyCopy  mt4 measure_wide fw2 light_purple>Please don’t @ me about React.<br/> Can you believe I chose these colours? Jesus. Hope you’re not colour-blind. </BodyCopy>
            <Wrapper flex>
              <H1 mr4 f3 flex_column light_purple> Twitter </H1>
              <H1 mh4 f3 flex_column light_purple> Medium </H1>
              <H1 mh4 f3 flex_column light_purple> Instagram </H1>
            </Wrapper>
        </Wrapper>
        </div>
    );
  }
}
