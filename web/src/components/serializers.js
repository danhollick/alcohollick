import React from 'react'
import { CodeBlock } from './codeblock'
import { Figure } from './figure'
import { Gif } from './gif'

const serializers = {
  types: {
    // mainImage: Figure,
    code: CodeBlock,
    // image: node => {
    //   console.log(node)
    //   return null
    // },
    image: Figure,
    gif: Gif,
  },
}

export default serializers
