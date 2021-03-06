import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { ocean } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export const CodeBlock = ({ node = {} }) => {
  const { language, code } = node

  return (
    <SyntaxHighlighter
      customStyle={{
        padding: '16px',
        lineHeight: '160%',
        borderRadius: '8px',
        fontSize: '16px',
        maxWidth: '800px',
      }}
      style={ocean}
      language={language}
    >
      {code}
    </SyntaxHighlighter>
  )
}
