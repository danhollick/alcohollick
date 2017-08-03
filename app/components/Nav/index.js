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

const NavBar = styled.nav`
${tachyons}
`;

const LinkGroup = styled.div`
${tachyons}
`;

const NavLink = styled(Link)`
  ${tachyons}
    &:hover {
      opacity: 1;
      transition: opacity .15s ease-in;
    }
    &:focus {
      opacity: 1;
      transition: opacity .15s ease-in;
    }
    &:active {
      opacity: 1;
      transition: opacity .15s ease-in;
    }
    text-decoration: none;
    color: white;
    opacity: 0.5;
`;

export default class Nav extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (

      <NavBar mt3_ns mt2>
        <LinkGroup db pa3_ns pa2 w_100 tr>
          <NavLink f6 fw2_ns fw4 dib mr4 activeStyle={{opacity: 1}} to="/"> about this site </NavLink>
          <NavLink f6 fw2_ns fw4 dib mr4_ns mr2 activeStyle={{opacity: 1}} to="about"> about me </NavLink>
        </LinkGroup>
      </NavBar>
    )
  }
}
