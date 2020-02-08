import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styled from 'styled-components'

export const CodeSnippet = styled.p`
  font-family: monospace;
  font-size: 14px;
  max-width: 800px;
`

export const CodeBlock = ({ node = {} }) => {
  const { language, code } = node

  return (
    <CodeSnippet>
      <SyntaxHighlighter style={atomOneDarkReasonable} language={language}>
        {code}
      </SyntaxHighlighter>
    </CodeSnippet>
  )
}
