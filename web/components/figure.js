import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import styled from 'styled-components'
import { colors } from '../utils/colors'

const StyledCaption = styled.figcaption`
  margin-top: 8px;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  text-align: center;
  color: ${colors.medium_grey};
`

export const Figure = ({ node }) => {
  // console.log(node)
  // let normalizedProps = node.asset
  // if (node.asset.fluid && node.asset.fluid.presentationWidth) {
  //   normalizedProps = {
  //     ...node.asset,
  //     style: {
  //       ...(node.asset.style || {}),
  //       maxWidth: node.asset.fluid.presentationWidth,
  //       margin: '0 auto', // Used to center the image
  //     },
  //   }
  // }

  if (!node || !node.asset || !node.asset._id) {
    return null
  }
  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 800 },
    { projectId: 'h2w4qpx8', dataset: 'production' }
  )
  return (
    <figure>
      {/* <Img fluid={fluidProps} alt={node.alt} {...normalizedProps} /> */}
      <Img fluid={fluidProps} alt={node.alt} />
      <StyledCaption>{node.caption}</StyledCaption>
    </figure>
  )
}
