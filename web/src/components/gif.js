import React from 'react'
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

const StyledFigure = styled.figure`
  justify-self: center;
  max-width: 800px;
`

export const Gif = ({ node }) => {
  if (!node || !node.asset) {
    return null
  }

  return (
    <StyledFigure>
      <img src={node.asset.url} alt={node.alt} />
      <StyledCaption>{node.caption}</StyledCaption>
    </StyledFigure>
  )
}