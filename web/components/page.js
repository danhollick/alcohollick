import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../utils/colors'
import Header from './header'
import Footer from './footer'
import { below } from './layout'

export const StyledPage = styled.div`
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
  /* background-color: red; */
`

const Page = ({ children }) => (
  <StyledPage>
    <PageWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </PageWrapper>
  </StyledPage>
)

export const TFWPage = ({ children }) => (
  <StyledPage>
    <TFWPageWrapper>
      <Main>{children}</Main>
    </TFWPageWrapper>
  </StyledPage>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
