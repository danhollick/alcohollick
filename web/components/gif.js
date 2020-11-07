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
  width: 100%;
  max-width: 800px;
  justify-items: center;
  display: grid;
`

const StyledImg = styled.img`
  justify-self: center;

  ${below.med`
    max-width: 100%;
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
