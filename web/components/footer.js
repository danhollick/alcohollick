import React from 'react'
import { Columns } from './layout'
import { Title, TextLink } from './text'

const Footer = () => (
  <Columns className="JustifyEnd" padding={[2, 0]} spacing={3}>
    <Title>
      <TextLink href="https://twitter.com/DanHollick" target="_blank">
        twitter
      </TextLink>
    </Title>
    <Title>
      <TextLink href="https://github.com/danhollick" target="_blank">
        github
      </TextLink>
    </Title>
    <Title>
      <TextLink href="https://medium.com/@danhollick" target="_blank">
        medium
      </TextLink>
    </Title>
  </Columns>
)

export default Footer
