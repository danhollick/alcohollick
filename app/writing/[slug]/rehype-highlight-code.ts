import { visit } from 'unist-util-visit'
import rangeParser from 'parse-numeric-range'
import { toString } from 'hast-util-to-string'
import { refractor } from 'refractor'
import highlightLine  from './rehype-highlight-line'
import  highlightWord  from './rehype-highlight-word'


const rehypeHighlightCode = (options = {}) => {
  return tree => {
    visit(tree, 'element', visitor)
  }

  function visitor(node, index, parentNode) {
    if (parentNode.tagName === 'pre' && node.tagName === 'code') {
      // syntax highlight
      const lang = node.properties.className
        ? node.properties.className[0].split('-')[1]
        : 'md'
      let result = refractor.highlight(toString(node), lang)

      // line highlight
      const linesToHighlight = rangeParser(node.properties.line || '0')
      result = highlightLine(result, linesToHighlight)

      // word highlight
      result = highlightWord(result)

      node.children = result
    }
  }
}
export default rehypeHighlightCode
