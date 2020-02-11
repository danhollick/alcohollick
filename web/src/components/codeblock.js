import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styled from 'styled-components'
import { colors } from '../utils/colors'
import { below } from './layout'

export const CodeSnippet = styled.pre`
  font-family: monospace;
  font-size: 16px;
  max-width: 800px;
  padding: 0px 4px;
  ${below.med`
      max-width:90vw;
    `}
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
