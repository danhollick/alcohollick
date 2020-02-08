import { CodeBlock } from './codeblock'
import { Figure } from './figure'

const serializers = {
  types: {
    // mainImage: Figure,
    code: CodeBlock,
    // image: node => {
    //   console.log(node)
    //   return null
    // },
    image: Figure,
  },
}

export default serializers
