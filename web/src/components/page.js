import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { colors } from '../utils/colors'
import Header from './header'
import Footer from './footer'

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
  font-weight: 500;
  font-style: normal;
  src: url("Inter-Medium.otf") format("otf");
  font-display: swap;
}
@font-face {
  font-family: Inter;
  font-weight: 500;
  font-style: italic;
  src: url("Inter-MediumItalic.otf") format("otf");
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
.AlignEnd {
    align-self: end;
  }
  .AlignCenter {
    align-self: center;
  }
  .AlignStart {
    align-self: start;
  }
  .AligntStretch {
    align-self: stretch;
  }
  .JustifyEnd {
    justify-self: end;
  }
  .JustifyCenter {
    justify-self: center;
  }
  .JustifyStart {
    justify-self: start;
  }
  .JustifyStretch {
    justify-self: stretch;
  }
  body {
    font: 400 18px Inter, sans-serif;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  p, span, a, h1, h2, h3, h4, h5, h6, form, fieldset, legend, label, input {
        margin:0px;
        padding: 0;
    }

  /* h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 29px;
  color: ${props => props.color || colors.dark_grey};
  }
  h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 22px;
  color: ${props => props.color || colors.dark_grey};
  }
  h3 {
    font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.color || colors.dark_grey};
  }
  h4 {
    font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.color || colors.dark_grey};
  }
  p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;

  color: ${props => props.color || colors.dark_grey};
  }

  blockquote {
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: ${props => props.color || colors.medium_grey};
  }

  ul {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${props => props.color || colors.dark_grey};
  } */
`

const StyledPage = styled.div`
  background-color: ${colors.background};
  display: grid;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 0px 40px;
`

const PageWrapper = styled.div`
  display: grid;
  justify-self: center;
  max-width: 1000px;
  width: 100%;
  grid-template-rows: auto 1fr auto;
`

const Main = styled.main`
  display: grid;
`

const Page = ({ children }) => (
  <StyledPage>
    <GlobalStyles />
    <PageWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </PageWrapper>
  </StyledPage>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
