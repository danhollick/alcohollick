import Link from 'next/link'
import Profile from '../../profile'
import ProgressIndicator from './progressIndicator'

export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {children}
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="fixed w-full bottom-0 grid py-2 border-t border-t-gray-300 backdrop-blur-[4px] bg-[length:4px_4px] bg-gradient-radial-footer from-gray-900/0  to-gray-50 before:block before:bg-white before:absolute before:top--1px  before:left-0 before:right-0 before:h-px before:opacity-10 ">
        <div className="grid max-w-[950px] grid-cols-[3fr_1fr] w-full gap-12 py-2  justify-self-center items-center">
          <nav className="grid grid-flow-col w-full items-center justify-start  max-w-prose  gap-6 ">
            <Link
              className="font-mono text-sm grid grid-flow-col gap-2 items-center hover:text-purplish"
              href={'/'}
            >
              <Profile width={32} height={32} />
              Home
            </Link>
            <Link className="font-mono text-sm text-purplish" href={'/writing'}>
              Writing
            </Link>
          </nav>
          <ProgressIndicator />
        </div>
      </div>
    </main>
  )
}
