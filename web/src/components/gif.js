import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/colors'
import { below } from './layout'

const StyledCaption = styled.figcaption`
  margin-top: 8px;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  text-align: center;
  color: ${colors.medium_grey};
`

const StyledFigure = styled.div`
  /* justify-self: center; */
  width: 100%;
  max-width: 800px;
  justify-items: center;
  background-color: red;
  display: grid;
  /* object-fit: cover; */
`

const StyledImg = styled.img`
  justify-self: center;
  /* max-width: 800px; */
  /* object-fit: contain; */

  ${below.med`
    max-width: 100vw;
    // width: 100%;
    // padding: 24px;
  `}
`

export const Gif = ({ node }) => {
  if (!node || !node.asset) {
    return null
  }

  return (
    <StyledFigure>
      <StyledImg src={node.asset.url} alt={node.alt} />
      <StyledCaption>{node.caption}</StyledCaption>
    </StyledFigure>
  )
}
