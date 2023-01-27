'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Profile from '../profile'
import ProgressIndicator from './[slug]/progressIndicator'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname()
  const splitPath = path.split('/')

  return (
    <main>
      {children}
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="fixed right w-full bottom-0 grid px-4 py-2 border-t border-t-gray-300 backdrop-blur-[4px] bg-[length:4px_4px] bg-gradient-radial-footer from-gray-900/0  to-gray-50 before:block before:bg-white before:absolute before:top--1px  before:left-0 before:right-0 before:h-px before:opacity-10 ">
        <div className="grid max-w-[850px] md:grid-cols-[minmax(600px,3fr),minmax(200px,1fr)] grid-cols-1  gap-12 py-4  md:justify-self-center items-center">
          <nav className="grid grid-flow-col w-full items-center justify-start  max-w-prose  gap-2 ">
            <Link
              className="font-mono text-sm grid grid-flow-col gap-2 justify-start items-center hover:text-purplish"
              href={'/'}
            >
              <div className="bg-gray-50">
                <Profile size={24} />
              </div>
            </Link>
            {splitPath.map((segment, i) => {
              const link = path.split('/', i + 1).join('/')

              return (
                <Link
                  key={i}
                  className={`font-mono text-sm ${
                    link === path
                      ? `text-purplish font-semibold `
                      : `text-gray-600 `
                  } truncate hover:text-dark_purplish hover:underline`}
                  href={link}
                >
                  {segment === '' ? null : `/ ${segment} `}
                </Link>
              )
            })}
          </nav>
          <ProgressIndicator />
        </div>
      </div>
    </main>
  )
}
