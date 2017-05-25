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
import SVGBorderTop from 'components/Body/SVGBorderTop';
import Footer from 'components/Shared/Footer.js';
import FeatureSection from 'components/Shared/FeatureSection.js';
import RandomCircles from 'components/Shared/RandomCircles.js';

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
          <SVGBorderBottom primary/>
          <FullHeightSection dt relative>
            <Wrapper right_0 mr4 top__1 absolute>
                <BodyCopy fw2 measure black_70>Look at this angled line!<br/>It's a fucking SVG! The web is a magical place.</BodyCopy>
            </Wrapper>
            <TextBlock title="Wouldn’t it have been easier to just use HTML and CSS?" description="Yup. Like a lot easier." description1="I don’t really have a witty response here. I should have done that" description2="But I wanted to be a cool tech bro…"/>
          </FullHeightSection>
          <SVGBorderTop/>
          <FullHeightSection dt bg_green>
            <FeatureSection/>
          </FullHeightSection>
          <SVGBorderBottom />
          <FullHeightSection dt relative>
            <TextBlock title="Don’t sugar coat it. What are the downsides?" description="JavaScript, JavaScript everywhere." description1="Only having a vague idea how anything works." descriptionExtra="There are like 1000 things in my node_modules folder." description2="Look, I ‘m not hating on React. But I think it only solves problems at scale."/>
            <RandomCircles />
          </FullHeightSection>
          <SVGBorderTop primary/>
          <Footer title="Hit me up online" description="Please don’t @ me about React." description1="Can you believe I chose these colours? Jesus. Hope you’re not colour-blind." />
        </div>
    );
  }
}
