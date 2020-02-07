import React from 'react'
import styled from 'styled-components'

export const Stack = styled.div`
  display: grid;
  row-gap: ${props => (props.spacing ? `${props.spacing * 8}px` : `8px`)};
  grid-template-rows: ${props =>
    props.count
      ? `repeat(${props.count}, auto )`
      : `repeat(${React.Children.count(props.children)}, auto )`};
`

export const Columns = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.count
      ? `repeat(${props.count}, auto )`
      : `repeat(${React.Children.count(props.children)}, auto )`};
  column-gap: ${props => (props.spacing ? `${props.spacing * 8}px` : `8px`)};
  row-gap: ${props => (props.spacing ? `${props.spacing * 8}px` : `8px`)};
`
