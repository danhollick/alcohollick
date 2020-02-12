import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Columns } from '../layout'
import { Heading } from '../text'
import { colors } from '../../utils/colors'

const Wrapper = styled.div`
  display: grid;
  padding: 80px 0px;
  grid-row-gap: 40px;
  width: 100%;
  border-top: solid 1px ${colors.light_grey};
  .MaxTextLength {
    max-width: 400px;
  }
`

const UnstyledLink = styled.a`
  text-decoration: none;
  appearance: none;
  transition: transform 200ms ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`

export const Downloads = () => {
  const data = useStaticQuery(graphql`
    query {
      google: file(relativePath: { eq: "play-store.png" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      apple: file(relativePath: { eq: "app-store.png" }) {
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
      <Heading className="JustifyCenter">Download</Heading>
      <Columns spacing={10} className="JustifyCenter">
        <UnstyledLink
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.twf.prod"
        >
          <Img
            className="JustifyCenter"
            fixed={data.google.childImageSharp.fixed}
          />
        </UnstyledLink>
        <UnstyledLink
          target="_blank"
          href="https://itunes.apple.com/us/app/tfw/id1359091947?ls=1&mt=8"
        >
          <Img
            className="JustifyCenter"
            fixed={data.apple.childImageSharp.fixed}
          />
        </UnstyledLink>
      </Columns>
    </Wrapper>
  )
}
