import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Stack, below } from '../layout'
import { MassiveHeading, Heading } from '../text'
import { FloatingHeader } from './floatingHeader'
import { colors } from '../../utils/colors'

const HeroWrapper = styled.div`
  background-color: red;
  margin: 0rem -9999px;
  min-height: 100vh;
  padding: 0rem 9999px;
  display: grid;
  grid-template-columns: 1fr 320px;
  grid-template-rows: auto 1fr;
  background: rgb(162, 192, 207);
  background: linear-gradient(
    0deg,
    rgba(162, 192, 207, 1) 0%,
    rgba(135, 171, 189, 1) 100%
  );
  ${below.med`
    grid-template-columns: 1fr;
    grid-row-gap: 56px;
  `}
`

const DeviceImage = styled(Img)`
  align-self: end;
  justify-self: end;
  margin: 0px 0px -140px 0px;
  width: 100%;
  ${below.med`
     align-self: end;
      justify-self: center;
      margin: 0px 0px 56px 0px;
  `}
`

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      device: file(relativePath: { eq: "div1.png" }) {
        childImageSharp {
          fixed(width: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <HeroWrapper>
      <FloatingHeader />
      <Stack spacing={4} padding={[6, 3]} className="AlignCenter">
        <MassiveHeading color="white">
          The <br /> F*cking <br /> Weather.
        </MassiveHeading>
        <Heading color={colors.light_grey}>
          A weather app for people
          <br /> who hate weather apps.
        </Heading>
      </Stack>
      <DeviceImage fixed={data.device.childImageSharp.fixed} />
    </HeroWrapper>
  )
}
