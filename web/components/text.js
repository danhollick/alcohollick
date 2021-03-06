import styled from 'styled-components'
import { colors } from '../utils/colors'

export const MassiveHeading = styled.h1`
  font-style: ${props => props.fontStyle || `normal`};
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.01em;
  color: ${props => props.color || colors.purplish};
`

export const Heading = styled.h2`
  font-style: ${props => props.fontStyle || `normal`};
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${props => props.color || colors.dark_grey};
`

export const SubHeading = styled.h3`
  font-style: ${props => props.fontStyle || `normal`};
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.color || colors.dark_grey};
`
export const Title = styled.h3`
  font-style: ${props => props.fontStyle || `normal`};
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.color || colors.dark_grey};
`

export const Subtitle = styled.h5`
  font-style: ${props => props.fontStyle || `normal`};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.color || colors.dark_grey};
`

export const Body = styled.p`
  font-style: ${props => props.fontStyle || `normal`};
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${props => props.color || colors.dark_grey};
`

export const TextLink = styled.a`
  appearance: none;
  text-decoration: none;
  :hover {
    cursor: pointer;
    color: ${props => props.hoverColor || colors.purplish};
  }
  color: ${props => props.color || colors.dark_grey};
`
