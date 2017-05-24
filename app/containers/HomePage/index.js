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
import H1Link from 'components/Shared/H1Link.js';
import BodyCopy from 'components/Shared/BodyCopy.js';
import ListText from 'components/Shared/ListText.js';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FullHeightSection bg_red dt >
          <Nav />
          <Wrapper dt bg_red vh_75 w_100 ph6 pv7>
            <Wrapper dtc v_mid>
              <H1 f3 f6_ns white> Hey, welcome to my site. </H1>
              <BodyCopy  mt4 measure fw2 white> Can you believe I learnt React to build this single page, static site? <br/> I know right. It’s kind of like using a tank to go to the grocery store </BodyCopy>
              <BodyCopy mt2 fw2 measure white> You can do it but it doesn’t mean it’s a good idea. </BodyCopy>
            </Wrapper>
          </Wrapper>
        </FullHeightSection>
        <svg width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,0 100,0 100,20 0,100" color="#DE7C7C" />
        </svg>
        <FullHeightSection dt relative>
          <Wrapper right_0 mr4 top__1 absolute>
              <BodyCopy fw2 measure black_70>Look at this angled line!<br/>It's a fucking SVG! The web is a magical place.</BodyCopy>
          </Wrapper>
          <Wrapper dtc v_mid vh_75 w_100 pa6>
              <H1 f3 black_70> Wouldn’t it have been easier to just use HTML and CSS? </H1>
              <BodyCopy  mt4 measure fw2 black_70>Yup. Like a lot easier.<br/> I don’t really have a witty response here. I should have done that</BodyCopy>
              <BodyCopy mt2 fw2 measure black_70> But I wanted to be a cool tech bro… </BodyCopy>
            </Wrapper>
        </FullHeightSection>
        <svg width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,100 100,100 0,0 0,100" color="#73BCBF" />
        </svg>
        <FullHeightSection dt>
          <Wrapper vh_100 w_100 ph6 pv5 bg_green>
              <H1 f3 white> I know buzzwords. I have the best buzzwords: </H1>
              <BodyCopy mb0 mt4 measure fw2 white b >React </BodyCopy>
              <ListText fw2 measure white >Imagine if someone said, how can we write more JavaScript?</ListText>
              <BodyCopy mb0 mt4 measure fw2 white b >Webpack </BodyCopy>
              <ListText fw2 measure white >This bundles things. Allows you to keep track of the hundreds of dependencies you now have.</ListText>
              <BodyCopy mb0 mt4 measure fw2 white b >Redux </BodyCopy>
              <ListText fw2 measure white >“Manages state.” I know what those words mean individually but…</ListText>
              <BodyCopy mb0 mt4 measure fw2 white b >Styled Components </BodyCopy>
              <ListText fw2 measure white >Allows you to write CSS inside Javascript components. Oh the irony.</ListText>
              <BodyCopy mb0 mt4 measure fw2 white b >Tachyons </BodyCopy>
              <ListText fw2 measure white >Genuinely dope CSS library.</ListText>
              <BodyCopy mb0 mt4 measure fw2 white b >Tachyons JS </BodyCopy>
              <ListText fw2 measure white >Maps Tachyons to JavaScript functions. </ListText>
              <BodyCopy mb0 mt4 measure fw2 white b >Tachyons for Styled Components </BodyCopy>
              <ListText fw2 measure white >Uses Tachyons JS to let you write Tachyons with Styled Components. *Screams internally*</ListText>
            </Wrapper>
        </FullHeightSection>
        <svg width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,0 100,0 100,0 0,100" color="#73BCBF" />
        </svg>
        <FullHeightSection dt>
          <Wrapper dtc v_mid vh_100 w_100 pl6 relative>
              <H1  f3 black_70> Don’t sugar coat it. What are the downsides? </H1>
              <BodyCopy  mt4 measure fw2 black_70>JavaScript, JavaScript everywhere.<br/>Only having a vague idea how anything works.<br/>There are like 1000 things in my node_modules folder. </BodyCopy>
              <BodyCopy mt2 fw2 measure_wide black_70>Look, I ‘m not hating on React. But I think it only solves problems at scale. </BodyCopy>
              <Wrapper right_0 top_1 absolute >
                <svg height="400" width="400">
                  <circle cx="200" cy="200" r="160" fill="#FFF7CE" />
                  <circle cx="140" cy="140" r="120" fill="#DCD6FF" opacity="0.7" />
                  <ListText light_purple b x="10%" y="32%" text-anchor="middle" > Random shapes are totally</ListText>
                  <ListText light_purple b x="10%" y="37%" text-anchor="middle"> on trend </ListText>  
                </svg>
              </Wrapper>
            </Wrapper>
        </FullHeightSection>
        <svg width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,100 100,100 0,0 0,100" color="#E6FCFD" />
        </svg>
        <Wrapper bg_light_blue w_100 pl6 pt5 pb4>
          <H1 f3 light_purple> Hit me up online </H1>
          <BodyCopy  mt4 measure_wide fw2 light_purple>Please don’t @ me about React.<br/> Can you believe I chose these colours? Jesus. Hope you’re not colour-blind. </BodyCopy>
            <Wrapper flex mt4>
              <H1Link link mr4 f3 b light_purple href="https://twitter.com/DanHollick" target="_blank"> Twitter </H1Link>
              <H1Link link mh4 f3 b light_purple href="https://medium.com/@danhollick" target="_blank"> Medium </H1Link>
              <H1Link link mh4 f3 b light_purple href="https://www.instagram.com/squirrelabuser/" target="_blank"> Instagram </H1Link>
            </Wrapper>
        </Wrapper>
        </div>
    );
  }
}
