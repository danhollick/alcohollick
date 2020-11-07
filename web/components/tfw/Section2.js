import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Stack, Columns } from '../layout'
import { Heading, Body, Title } from '../text'

const FullHeightSection = styled.div`
  display: grid;
  margin: 0rem -9999px;
  min-height: 100vh;
  padding: 0rem 9999px;
  width: 100%;
  .MaxTextLength {
    max-width: 400px;
  }
  background: rgb(177, 169, 130);
  background: rgb(207, 199, 164);
  background: linear-gradient(
    0deg,
    rgba(207, 199, 164, 1) 0%,
    rgba(149, 184, 183, 1) 31%,
    rgba(129, 198, 212, 1) 100%
  );
`

export const Section2 = () => {
  const data = useStaticQuery(graphql`
    query {
      device: file(relativePath: { eq: "div3.png" }) {
        childImageSharp {
          fixed(width: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <FullHeightSection id="_how">
      <Columns
        padding={[6, 3]}
        spacing={10}
        smallSpacing={10}
        smallCount={1}
        className="AlignCenter"
      >
        <Stack
          as="article"
          spacing={2}
          smallSpacing={4}
          className="AlignCenter  MaxTextLength"
        >
          <Heading color="white">
            AI?
            <br />
            Machine learning?
          </Heading>
          <Body color="white">
            Nope, this machine is as dumb as can be. <br /> And it will stay
            that way. Forever.
          </Body>
          <Stack as="ul" spacing={4} smallSpacing={4} padding={[0, 0]}>
            <Stack as="li">
              <Title color="white">Step 1: </Title>
              <Body color="white">
                We use openweathermap to get extremely accurate weather data for
                your location
              </Body>
            </Stack>
            <Stack as="li">
              <Title color="white">Step 2: </Title>
              <Body color="white">
                We greatly reduce the accuracy of the data by converting it into
                a score.
              </Body>
            </Stack>
            <Stack as="li">
              <Title color="white">Step 3: </Title>
              <Body color="white">
                Finally, we remove any semblance of usefullness by replacing
                that score with an incredibly vague sentence.{' '}
              </Body>
            </Stack>
          </Stack>
        </Stack>
        <Img
          className="JustifyCenter"
          alt="An image of a phone displaying the weather scrolled to the bottom of the page."
          fixed={data.device.childImageSharp.fixed}
        />
      </Columns>
    </FullHeightSection>
  )
}
