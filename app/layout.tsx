import './globals.css'
import { Inter } from '@next/font/google'
import localFont from '@next/font/local'

const basis = localFont({
  src: [
    {
      path: './basis-grotesque-mono-regular-pro.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './basis-grotesque-mono-italic-pro.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './basis-grotesque-mono-medium-pro.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './basis-grotesque-mono-medium-italic-pro.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './basis-grotesque-mono-bold-pro.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './basis-grotesque-mono-bold-italic-pro.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-basis-mono',
})

const inter = Inter({
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${basis.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
