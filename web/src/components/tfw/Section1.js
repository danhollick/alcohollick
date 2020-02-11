import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Stack, Columns } from '../layout'
import { Heading, Body } from '../text'

const FullHeightSection = styled.div`
  display: grid;
  min-height: 100vh;
  width: 100%;
  .MaxTextLength {
    max-width: 400px;
  }
`

export const Section1 = () => {
  const data = useStaticQuery(graphql`
    query {
      device: file(relativePath: { eq: "div2.png" }) {
        childImageSharp {
          fixed(width: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <FullHeightSection id="_why">
      <Columns
        padding={[6, 3]}
        spacing={10}
        smallSpacing={10}
        smallCount={1}
        className="AlignCenter"
      >
        <Img
          className="JustifyCenter"
          fixed={data.device.childImageSharp.fixed}
        />
        <Stack
          spacing={4}
          smallSpacing={4}
          className="AlignCenter  MaxTextLength"
        >
          <Heading>The most vague weather app available today.</Heading>
          <Body>
            If you’re like us, you hate how accurate and precise weather apps
            are.
          </Body>
          <Body>
            That’s why we spent almost an entire month crafting the world’s
            least accurate mobile weather experience.
          </Body>
        </Stack>
      </Columns>
    </FullHeightSection>
  )
}
