import React from 'react'
import styled from 'styled-components'
// import { StyledPage } from '../components/page'
import SEO from '../components/seo'
import { Hero } from '../components/tfw/hero'
import { What } from '../components/tfw/what'
import { How } from '../components/tfw/how'
import { New } from '../components/tfw/new'
import { Downloads } from '../components/tfw/downloads'

import Mobile from '../components/tfw/mobile'
import { Box, Stack } from '../components/Layout/index'
import { Reviews } from '../components/tfw/reviews'
import { below } from '../components/Layout/styleUtils'
import { Who } from '../components/tfw/who'

const StyledPage = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 0px 6vw;
  overflow-x: hidden;
  ${below.med`
  padding: 0px 6vw;
  overflow-x: visible;
  `}
`

const PageWrapper = styled.div`
  display: grid;
  justify-self: center;
  max-width: 1000px;
  width: 100%;
  height: 100vh;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 20%;
  ${below.med`
      grid-template-columns:  1fr;
      grid-gap: 0px;
  `} /* background-color: green; */
  /* padding-left: 50%; */
  /* justify-content: start;
  align-content: start; */
`

const IndexPage = () => (
  <StyledPage>
    <SEO
      image="https://cdn.sanity.io/images/h2w4qpx8/production/75211319d59a598abc302663cb6259e31225f869-2876x1588.png"
      favicon="/tfw-favicon.png"
      title="The F*cking Weather"
      description="A weather app for people who don't give a shit about weather."
    />
    <PageWrapper>
      <Box display={['block', 'block', 'none']}>
        <Mobile />
      </Box>
      <Stack>
        <Hero />
        <Box
          css={`
            margin-bottom: 4rem;
          `}
          display={['none', 'none', 'grid']}
        >
          <Mobile />
        </Box>
        <What />
        <New />
        <Reviews />
        <How />
        <Downloads />
        <Who />
      </Stack>
    </PageWrapper>
  </StyledPage>
)

export default IndexPage
