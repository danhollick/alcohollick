import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/colors'

const NavLink = styled(Link)`
  font: 700 16px Inter, sans-serif;
  text-decoration: none;
  appearance: none;
  color: ${colors.dark_grey};
  transition: color ease-in-out 200ms;
  transition: scale ease-in-out 200ms;
  :hover {
    cursor: pointer;
    color: ${colors.purplish};
  }
  :active {
    cursor: pointer;
    color: ${colors.dark_purplish};
    transform: scale(0.99);
    transform-origin: left;
  }
`
const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto auto;
  max-width: 1000px;
  width: 100%;
  align-self: start;
  padding: 24px 0px;
  column-gap: 40px;
  .active {
    color: ${colors.purplish};
  }
`

const Header = ({ siteTitle }) => (
  <Nav>
    <NavLink activeClassName="active" to="/">
      alcohollick.
    </NavLink>
    <NavLink activeClassName="active" to="/things/">
      things I have built.
    </NavLink>
    <NavLink activeClassName="active" to="/writing/">
      writing.
    </NavLink>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
