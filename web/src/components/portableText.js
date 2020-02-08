import React from 'react'
import BasePortableText from '@sanity/block-content-to-react'
import styled from 'styled-components'
import serializers from './serializers'
import { colors } from '../utils/colors'

const StyledPortableText = styled(BasePortableText)`
  display: grid;
  grid-row-gap: 24px;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 29px;
    max-width:680px;
    color: ${colors.dark_grey};
  }
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 22px;
    max-width:680px;
    color: ${colors.dark_grey};
  }
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    max-width:680px;
    color: ${colors.dark_grey};
  }
  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    max-width:680px;
    color: ${colors.dark_grey};
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    max-width:680px;
    color: ${colors.dark_grey};
  }

  blockquote {
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    text-align:center;
    color: ${colors.medium_grey};
  }

  ul {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    max-width:680px;
    color: ${colors.dark_grey};
    li:not(:last-child) {
            margin-bottom: 16px;
        }
  }

  p > code, li > code {
    font-family: monospace;
    font-size: 18px;
    background-color: ${colors.light_purplish};
    padding: 0px 4px;
    border-radius: 2px;
  }

  a {
      text-decoration: none;
    color: ${colors.purplish};
    :hover {
      color: ${colors.dark_purplish};
    }
    /* :active {
      color: ${colors.dark_purplish};
    } */
    :visited {
      color: ${colors.dark_purplish};
    }
  }
`

const PortableText = ({ blocks }) => (
  <StyledPortableText
    blocks={blocks}
    serializers={serializers}
    // TODO: put into .env files
    dataset="production"
    projectId="h2w4qpx8"
  />
)

export default PortableText
