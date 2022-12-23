import Profile from './profile'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen grid">
      <div className="grid grid-flow-col auto-cols-auto justify-self-center	self-center content-center gap-8 justify-center">
        <Profile />
        <div className="grid grid-flow-row auto-rows-auto content-center gap-4">
          <div>
            <h1 className="text-6xl text-gray-900 font-extrabold">
              Dan Hollick
            </h1>
            <h3 className="text-3xl text-gray-900 font-mono">
              Design (technically).
            </h3>
          </div>
          <div className="text-gray-900 grid grid-flow-row auto-rows-auto gap-4 mt-6 ">
            <p className="">
              Product designer, working with clients through
              <br />{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ext-link"
                href="https://www.rectangle-labs.com"
              >
                @Rectangle Labs
              </a>
              , a tiny design company.
            </p>
            <p className="">
              Previously:{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ext-link"
                href="https://www.tidal.com"
              >
                @TIDAL
              </a>
              ,{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ext-link"
                href="https://www.barclays.com"
              >
                @Barclays
              </a>{' '}
              and some others.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
