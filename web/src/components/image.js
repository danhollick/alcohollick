import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { colors } from '../utils/colors'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Greyscale = styled(Img)`
  grid-row: 1;
  grid-column: 1;
  transition: filter ease-in-out 400ms;
  filter: grayscale(1);
  z-index: 1;
  width: ${props => `${props.width}px`};
`

const PurpleFilter = styled.div`
  grid-row: 1;
  grid-column: 1;
  width: 100%;
  height: 100%;
  background-color: ${colors.purplish};
  z-index: 2;
  mix-blend-mode: screen;
  transition: background-color ease-in-out 400ms;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;
  :hover {
    ${Greyscale} {
      filter: grayscale(0);
    }
    ${PurpleFilter} {
      background-color: transparent;
    }
  }
  :active {
    ${Greyscale} {
      filter: saturate(140%);
    }
    ${PurpleFilter} {
      background-color: ${colors.purplish};
      mix-blend-mode: color-dodge;
    }
  }
`

const PurpleImage = ({ width, url, className }) => (
  <Wrapper className={className}>
    <PurpleFilter />
    <Greyscale
      width={width}
      // sizes={data.profileImage.sizes}
      fluid={url}
    />
  </Wrapper>
)

export default PurpleImage
