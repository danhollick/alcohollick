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

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
