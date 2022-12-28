import * as React from 'react'

export const H1 = (props: React.HTMLProps<HTMLHeadingElement>) => (
  <h1 className="text-6xl font-bold text-gray-900 leading-snug" {...props} />
)

export const H2 = (props: React.HTMLProps<HTMLHeadingElement>) => (
  <h2 className="text-3xl text-gray-900" {...props} />
)

export const H3 = (props: React.HTMLProps<HTMLHeadingElement>) => (
  <h3 className="text-2xl text-gray-900" {...props} />
)

export const Body = (props: React.HTMLProps<HTMLParagraphElement>) => (
  <p className="text-base text-gray-900" {...props} />
)
