import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/colors'
import { Columns, below } from './layout'

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
  grid-template-columns: auto auto;
  max-width: 1000px;
  /* width: 100%; */
  align-self: start;
  padding: 24px 0px;
  grid-column-gap: 16px;
  .active {
    color: ${colors.purplish};
  }
  ${below.med`
  padding: 16px 0px;
  `}
`

const Header = () => (
  <Nav>
    <NavLink className="JustifyStart" activeClassName="active" to="/">
      alcohollick.
    </NavLink>
    <Columns spacing={5} smallSpacing={2} className="JustifyEnd">
      <NavLink activeClassName="active" to="/things/">
        things i've built.
      </NavLink>
      <NavLink activeClassName="active" partiallyActive to="/writing/">
        writing.
      </NavLink>
    </Columns>
  </Nav>
)

Header.propTypes = {}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
