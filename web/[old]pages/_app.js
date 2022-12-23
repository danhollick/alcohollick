import React, { useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

const GlobalStyles = createGlobalStyle`
:root {
 --spacing_base: 8px;
  --spacing_half: calc(var(--spacing_base) * 0.5);
  --spacing_two: calc(var(--spacing_base) * 2);
  --spacing_three: calc(var(--spacing_base) * 3);
  --spacing_four: calc(var(--spacing_base) * 4);
  --spacing_five: calc(var(--spacing_base) * 5);
  --spacing_six: calc(var(--spacing_base) * 6);
  --spacing_seven: calc(var(--spacing_base) * 7);
  --spacing_eight: calc(var(--spacing_base) * 8);
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
  const router = useRouter()

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load('LSSGHCET', {
      includedDomains: ['https://alcohollick.com/'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
