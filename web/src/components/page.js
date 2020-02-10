import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { colors } from '../utils/colors'
import Header from './header'
import Footer from './footer'
import { below } from './layout'

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
.fadeInUpSlight{
  animation-name: fadeInUpSlight;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-duration: 800ms;
}
@keyframes fadeInUpSlight {
    from {
      opacity: 0;
      transform: translate3d(0, 5%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
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
  html {
    scroll-behavior: smooth
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
`

const StyledPage = styled.div`
  background-color: ${colors.background};
  display: grid;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 0px 40px;
  overflow-x: hidden;
  box-sizing: border-box;
  ${below.med`
    padding: 0px 16px;
    `}
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
  row-gap: 140px;
  /* ${below.med`
    margin-top: 40px;
  `} */
`

const TFWPageWrapper = styled.div`
  display: grid;
  justify-self: center;
  max-width: 1000px;
  width: 100%;
  grid-template-rows: 1fr;
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

export const TFWPage = ({ children }) => (
  <StyledPage>
    <GlobalStyles />
    <TFWPageWrapper>
      <Main>{children}</Main>
    </TFWPageWrapper>
  </StyledPage>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
