import * as React from 'react'
import { getId } from '../../../lib/getId'

export const H1 = (props: React.HTMLProps<HTMLHeadingElement>) => (
  <h1
    className="text-4xl font-semibold text-gray-900 leading-tight font-mono"
    {...props}
  />
)

export const H2 = (props: React.HTMLProps<HTMLHeadingElement>) => {
  const id = getId(props.children)
  return (
    <h2
      id={id}
      className="text-xl text-gray-900 font-mono font-semibold mt-16 "
      {...props}
    />
  )
}

export const H3 = (props: React.HTMLProps<HTMLHeadingElement>) => {
  const id = getId(props.children)
  return (
    <h3
      id={id}
      className="text-xl font-semibold text-gray-900 font-mono"
      {...props}
    />
  )
}
export const H4 = (props: React.HTMLProps<HTMLHeadingElement>) => {
  const id = getId(props.children)
  return <h4 id={id} className="font-bold text-gray-900 font-mono" {...props} />
}

export const Body = (props: React.HTMLProps<HTMLParagraphElement>) => (
  <p className="text-base" {...props} />
)

export const ExternalLink = (props: React.HTMLProps<HTMLAnchorElement>) => (
  <a className="ext-link font-mono font-semibold" {...props} />
)

export const UList = (props: React.HTMLProps<HTMLUListElement>) => (
  <ul className="text-base list-outside list-disc" {...props} />
)

export const ListItem = (props: React.HTMLProps<HTMLLIElement>) => (
  <li className=" marker:text-gray-700 " {...props} />
)

export const Blockquote = (props: React.HTMLProps<HTMLQuoteElement>) => (
  <blockquote
    className="text-base text-gray-500 italic font-normal border-l-purplish border-l-2 "
    {...props}
  />
)

export const Callout = (props: React.HTMLProps<HTMLDivElement>) => (
  <div
    className=" my-8 leading-relaxed text-gray-600 italic   bg-gray-100 rounded-xl  px-6 py-2"
    {...props}
  >
    {props.children}
  </div>
)
