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
import Nav from 'components/Nav'


export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FullHeightSection bg_dark_green >
        <Nav/>
        <h1> About </h1>
      </FullHeightSection>
    );
  }
}
