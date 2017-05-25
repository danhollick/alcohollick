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
import TextBlock from 'components/Shared/TextBlock.js';
import Footer from 'components/Shared/Footer.js';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FullHeightSection bg_red dt relative>
          <Nav/>
          <Wrapper dt bg_red vh_75 w_100 >
              <TextBlock primary title="Hey, welcome to my site." description="Can you believe I learnt React to build this single page, static site?" description1="I know right. It’s kind of like using a tank to go to the grocery store" description2="You can do it but it doesn’t mean it’s a good idea."/>
          </Wrapper>
        </FullHeightSection>
        <svg width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,0 100,0 100,20 0,100" color="#DE7C7C" />
        </svg>
        <FullHeightSection dt relative>
          <Wrapper right_0 mr4 top__1 absolute>
              <BodyCopy fw2 measure black_70>Look at this angled line!<br/>It's a fucking SVG! The web is a magical place.</BodyCopy>
          </Wrapper>
          <TextBlock title="Wouldn’t it have been easier to just use HTML and CSS?" description="Yup. Like a lot easier." description1="I don’t really have a witty response here. I should have done that" description2="But I wanted to be a cool tech bro…"/>
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
        <FullHeightSection dt relative>
          <TextBlock title="Don’t sugar coat it. What are the downsides?" description="JavaScript, JavaScript everywhere." description1="Only having a vague idea how anything works." descriptionExtra="There are like 1000 things in my node_modules folder." description2="Look, I ‘m not hating on React. But I think it only solves problems at scale."/>
            <Wrapper right_0 top_1 absolute >
              <svg height="400" width="400">
                <circle cx="200" cy="200" r="160" fill="#FFF7CE"/>
                <circle cx="140" cy="140" r="120" fill="#DCD6FF" opacity="0.7"/>
                <ListText light_purple b x="10%" y="32%" text-anchor="middle"> Random shapes are totally</ListText>
                <ListText light_purple b x="10%" y="37%" text-anchor="middle"> on trend </ListText>  
              </svg>
            </Wrapper>
        </FullHeightSection>
        <svg width="100%" height="50" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,100 100,100 0,0 0,100" color="#E6FCFD" />
        </svg>
        
          <Footer title="Hit me up online" description="Please don’t @ me about React." description1="Can you believe I chose these colours? Jesus. Hope you’re not colour-blind." />
          
        </div>
    );
  }
}
