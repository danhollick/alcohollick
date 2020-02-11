import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Stack, Columns } from '../layout'
import { Body } from '../text'
import { colors } from '../../utils/colors'

const Wrapper = styled.div`
  display: grid;
  padding: 80px 0px;
  grid-row-gap: 40px;
  width: 100%;
  .MaxTextLength {
    max-width: 400px;
  }
`

export const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      techCrunch: file(relativePath: { eq: "TC-logo.png" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ventureBeat: file(relativePath: { eq: "VB-logo.png" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      wired: file(relativePath: { eq: "Wired-logo.png" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Body
        className="JustifyCenter"
        color={colors.light_grey}
        fontStyle="italic"
      >
        ** None of these companies have ever used this app **
      </Body>
      <Columns spacing={10} count={3} smallCount={1} className="AlignCenter">
        <Stack>
          <Img
            className="JustifyCenter"
            fixed={data.techCrunch.childImageSharp.fixed}
          />
          <Body
            fontStyle="italic"
            color={colors.medium_grey}
            className="JustifyCenter"
          >
            "Nice colors."
          </Body>
        </Stack>
        <Stack>
          <Img
            className="JustifyCenter"
            fixed={data.ventureBeat.childImageSharp.fixed}
          />
          <Body
            fontStyle="italic"
            color={colors.medium_grey}
            className="JustifyCenter"
          >
            "Deleted it almost immediately."
          </Body>
        </Stack>
        <Stack>
          <Img
            className="JustifyCenter"
            fixed={data.wired.childImageSharp.fixed}
          />
          <Body
            fontStyle="italic"
            color={colors.medium_grey}
            className="JustifyCenter"
          >
            "I don’t see the point of this app."
          </Body>
        </Stack>
      </Columns>
    </Wrapper>
  )
}
