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
`;

export default class Nav extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar mt3>
        <LinkGroup db dt-l pa3 w-100 w-75-l tr>
          <NavLink f6 fw2 link dib white dim mr4 mr4-ns to="/"> about this site </NavLink>
          <NavLink f6 fw2 link dib white dim mr4 mr4-ns to="about"> about me </NavLink>
        </LinkGroup>
      </NavBar>
    )
  }
}
