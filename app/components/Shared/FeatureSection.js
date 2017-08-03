import React from 'react';
import tachyons from 'styled-components-tachyons';
import styled from 'styled-components';
import 'variables.css';

import Wrapper from 'components/Body/Wrapper';
import ListItem from 'components/Shared/ListItem.js';
import H1 from 'components/Shared/H1.js';

export default class FeatureSection extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper w_100 ph6_l ph5_m ph4 pv6_l pv5_m pv4>
          <H1 f3 white> I know buzzwords. I have the best buzzwords: </H1>
          <ListItem listHeader="React" listDescription="Imagine if someone said, “How can we write more JavaScript?”"/>
          <ListItem listHeader="Webpack" listDescription="Bundles the thousands of dependencies you now have."/>
          <ListItem listHeader="Redux" listDescription="“Manages state” I know what those words mean individually but…"/>
          <ListItem listHeader="Styled Components" listDescription="Allows you to write CSS inside Javascript. Yep."/>
          <ListItem listHeader="Tachyons" listDescription="Genuinely dope CSS library."/>
          <ListItem listHeader="Tachyons JS " listDescription="Allows writing tachyons in JS"/>
          <ListItem listHeader="Tachyons for Styled Components" listDescription="Uses Tachyons JS to let you write Tachyons with Styled Components. *Screams internally*"/>
        </Wrapper>
    )
  }
}
