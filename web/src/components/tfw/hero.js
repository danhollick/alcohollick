import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Stack, Columns, below } from '../layout'
import { MassiveHeading, SubHeading, Heading } from '../text'
import { FloatingHeader } from './floatingHeader'

const HeroWrapper = styled.div`
  background-color: red;
  margin: 0rem -9999px;
  height: 100vh;
  padding: 0rem 9999px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  background: rgb(162, 192, 207);
  background: linear-gradient(
    0deg,
    rgba(162, 192, 207, 1) 0%,
    rgba(135, 171, 189, 1) 100%
  );
  ${below.med`
    grid-template-columns: 1fr;
  `}
`

const DeviceImage = styled(Img)`
  align-self: end;
  justify-self: end;
  margin: 0px 0px -140px 0px;
  ${below.med`
     align-self: end;
  justify-self: center;
  margin: 0px 0px 0px 0px;
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
      <Stack spacing={4} className="AlignCenter">
        <MassiveHeading color="white">
          The <br /> F*cking <br /> Weather.
        </MassiveHeading>
        <Heading color="white">
          A weather app for people
          <br /> who hate weather apps.
        </Heading>
      </Stack>
      <DeviceImage fixed={data.device.childImageSharp.fixed} />
    </HeroWrapper>
  )
}
