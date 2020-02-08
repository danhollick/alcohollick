import React from 'react'
import BasePortableText from '@sanity/block-content-to-react'
import serializers from './serializers'

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    // TODO: put into .env files
    dataset="production"
    projectId="h2w4qpx8"
  />
)

export default PortableText
