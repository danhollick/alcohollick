import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import styled from 'styled-components'
import { colors } from '../utils/colors'
import client from '../client'

const StyledCaption = styled.figcaption`
  margin-top: 8px;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  text-align: center;
  color: ${colors.medium_grey};
`
export const builder = imageUrlBuilder(client)

export const Figure = ({ node }) => {
  if (!node || !node.asset) {
    return null
  }

  return (
    <figure
      style={{
        maxWidth: '680px',
        position: 'relative',
        display: 'grid',
        justifyItems: 'center',
      }}
    >
      <img
        style={{
          objectFit: 'contain',
          maxWidth: '100%',
        }}
        src={builder.image(node).url()}
        alt={node.alt}
        layout="fill"
        loading="lazy"
      />

      <StyledCaption>{node.caption}</StyledCaption>
    </figure>
  )
}
