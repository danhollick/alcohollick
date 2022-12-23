import Image from 'next/image'

export default function Profile() {
  return (
    <div className="relative">
      <div className="bg-purplish absolute w-full h-full z-10 mix-blend-screen " />
      <Image
        className="filter grayscale"
        src="/profile.png"
        alt="Picture of the Dan Hollick and his cat Weez"
        width={400}
        height={400}
      />
    </div>
  )
}