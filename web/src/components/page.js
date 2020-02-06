import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { colors } from '../utils/colors'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: Inter;
  font-weight: 400;
  font-style: normal;
  src: url("Inter.otf") format("otf");
  font-display: swap;
}
@font-face {
  font-family: Inter;
  font-weight: 400;
  font-style: italic;
  src: url("Inter.otf") format("otf");
  font-display: swap;
}
@font-face {
  font-family: Inter;
  font-weight: 700;
  font-style: normal;
  src: url("Inter-Bold.otf") format("otf");
  font-display: swap;
}
@font-face {
  font-family: Inter;
  font-weight: 700;
  font-style: italic;
  src: url("Inter-BoldItalic.otf") format("otf");
  font-display: swap;
}
  body {
    font: 400 18px Inter, sans-serif;
    box-sizing: border-box;
  }
`

const StyledPage = styled.div`
  background-color: ${colors.background};
  display: grid;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`

const Page = ({ children }) => (
  <StyledPage>
    <GlobalStyles />
    {children}
  </StyledPage>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
