import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Image from 'next/image'
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

export const Downloads = () => (
  <Wrapper>
    <Heading className="JustifyCenter">Download</Heading>
    <Columns spacing={10} className="JustifyCenter">
      <UnstyledLink
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.twf.prod"
      >
        <Image
          width={120}
          height={120}
          className="JustifyCenter"
          src="/play-store.png"
        />
      </UnstyledLink>
      <UnstyledLink
        target="_blank"
        href="https://itunes.apple.com/us/app/tfw/id1359091947?ls=1&mt=8"
      >
        <Image
          width={120}
          height={120}
          className="JustifyCenter"
          src="/app-store.png"
        />
      </UnstyledLink>
    </Columns>
  </Wrapper>
)
