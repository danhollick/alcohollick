import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import styled from 'styled-components'
import Image from 'next/image'
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
  // console.log(node)

  if (!node || !node.asset) {
    return null
  }
  // Get a pre-configured url-builder from your sanity client

  // Then we like to make a simple function like this that gives the
  // builder an image and returns the builder for you to specify additional
  // parameters:
  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <figure
      style={{
        width: '100%',
        maxWidth: '680px',
        // backgroundColor: 'red',
        position: 'relative',
        display: 'grid',
        justifyItems: 'center',
        // height: '800px',
      }}
    >
      <img
        style={{
          objectFit: 'contain',
          maxWidth: '100%',
          // height: '800px',
        }}
        src={urlFor(node)
          .width(800)
          .url()}
        alt={node.alt}
        layout="fill"
        loading="lazy"
        // width={800}
        // height={450}
      />

      <StyledCaption>{node.caption}</StyledCaption>
    </figure>
  )
}
