import React from 'react'
import BasePortableText from '@sanity/block-content-to-react'
import styled from 'styled-components'
import serializers from './serializers'
import { colors } from '../utils/colors'

const StyledPortableText = styled(BasePortableText)`
  display: grid;
  grid-row-gap: 24px;
  max-width: 680px;
  /* max-width: 100%; */
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 160%;

    color: ${colors.dark_grey};
  }
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 160%;
 
    color: ${colors.dark_grey};
  }
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;line-height: 19px;
  
    color: ${colors.dark_grey};
  }
  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    max-width: 700px;
    color: ${colors.dark_grey};
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;

    color: ${colors.dark_grey};
  }

  blockquote {
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    text-align:left;
    border-left: 2px solid ${colors.light_purplish};
    padding-left: 24px;
    color: ${colors.medium_grey};
  }

  ul {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    color: ${colors.dark_grey};
    li:not(:last-child) {
            margin-bottom: 16px;
        }
  }

  ol {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;

    color: ${colors.dark_grey};
    li:not(:last-child) {
            margin-bottom: 16px;
        }
  }
  p > code, li > code, ul > code {
    font-family: monospace;
    font-size: 18px;
    background-color: ${colors.light_purplish};
    padding: 0px 4px;
    border-radius: 2px;
  }

  a {
      text-decoration: none;
    color: ${colors.purplish};
    transition: background-color 200ms ease-in-out;
    :hover {
      color: ${colors.dark_purplish};
      border-radius: 2px;
      background-color: ${colors.light_purplish};
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
