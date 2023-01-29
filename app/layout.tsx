import './globals.css'
import { Inter } from '@next/font/google'
import localFont from '@next/font/local'

const basis = localFont({
  src: [
    {
      path: '../styles/fonts/basis-grotesque-mono-regular-pro.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/basis-grotesque-mono-italic-pro.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../styles/fonts/basis-grotesque-mono-medium-pro.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../styles/fonts/basis-grotesque-mono-medium-italic-pro.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../styles/fonts/basis-grotesque-mono-bold-pro.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../styles/fonts/basis-grotesque-mono-bold-italic-pro.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-basis-mono',
  display: 'swap',
})

const erode = localFont({
  src: [
    {
      path: '../styles/fonts/Erode-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/Erode-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../styles/fonts/Erode-Medium.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../styles/fonts/Erode-MediumItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../styles/fonts/Erode-Semibold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../styles/fonts/Erode-SemiboldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../styles/fonts/Erode-Bold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../styles/fonts/Erode-BoldItalic.otf',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-erode',
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'optional',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${basis.variable} ${erode.variable} bg-gray-50 scroll-smooth `}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
