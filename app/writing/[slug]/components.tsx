import * as React from 'react'
import { getId } from '../../../lib/getId'

export const H1 = (props: React.HTMLProps<HTMLHeadingElement>) => (
  <h1
    className="text-6xl font-semibold text-gray-900 leading-tight font-serif "
    {...props}
  />
)

export const H2 = (props: React.HTMLProps<HTMLHeadingElement>) => {
  const id = getId(props.children)
  return (
    <h2
      id={id}
      className="text-2xl text-gray-900 font-serif font-semibold mt-16 "
      {...props}
    />
  )
}

export const H3 = (props: React.HTMLProps<HTMLHeadingElement>) => {
  const id = getId(props.children)
  return (
    <h3
      id={id}
      className="text-xl font-semibold text-gray-900 font-serif "
      {...props}
    />
  )
}
export const H4 = (props: React.HTMLProps<HTMLHeadingElement>) => {
  const id = getId(props.children)
  return (
    <h4
      id={id}
      className="font-semibold text-lg text-gray-900 font-serif "
      {...props}
    />
  )
}

export const Body = (props: React.HTMLProps<HTMLParagraphElement>) => (
  <p className="text-base max-w-prose" {...props} />
)

export const Pre = (props: React.HTMLProps<HTMLPreElement>) => (
  <pre className="code-block max-w-prose" {...props} />
)

export const InlineCode = (props: React.HTMLProps<HTMLElement>) => (
  <code
    id={props.id}
    className="text-sm text-mono text-gray900 py-[1px] bg-gray-600/5 border-gray-700/5 border rounded-sm "
    {...props}
  />
)

export const ExternalLink = (props: React.HTMLProps<HTMLAnchorElement>) => (
  <a className="ext-link max-w-prose" {...props} />
)

export const UList = (props: React.HTMLProps<HTMLUListElement>) => (
  <ul className="text-base list-outside list-disc max-w-prose" {...props} />
)

export const ListItem = (props: React.HTMLProps<HTMLLIElement>) => (
  <li className=" marker:text-gray-700 max-w-prose" {...props} />
)

export const Blockquote = (props: React.HTMLProps<HTMLQuoteElement>) => (
  <blockquote
    className="text-base text-gray-500 italic font-normal border-l-purplish border-l-2 "
    {...props}
  />
)

export const Callout = (props: React.HTMLProps<HTMLDivElement>) => (
  <div
    className=" my-8 leading-relaxed text-gray-600 italic   bg-gray-100 rounded-xl  px-6 py-2 "
    {...props}
  >
    {props.children}
  </div>
)
