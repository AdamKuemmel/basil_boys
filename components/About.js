import Image from 'next/image'
import React from 'react'
import aboutIMG from '../public/aboutIMG.png'

export default function About() {
  return (
    <div className="overflow-y-hidden bg-gradient-to-b from-slate-500 ">
      <div className="px-4 py-12 md:px-6 xl:container xl:mx-auto xl:px-20">
        <div className="items-center justify-center lg:flex lg:space-x-12 2xl:space-x-6">
          <div className="max-w-3xl">
            <p className="text-3xl font-extrabold leading-9 text-blue-400 lg:text-4xl">
              First things first, who are the “Bois”?
            </p>
            <p className="w-full pb-10 mt-4 text-lg leading-7 text-white xl:w-7/12">
              First things first, who are the “Bois”? The Bois are anyone who
              like to cook or eating so much, they have to put on sweatpants
              after. It doesn’t matter who you are or where you’re from,
              HomeBois is for everyone. Here at HomeBois we focus on making
              restaurant quality food accessible and fun to make. We are always
              looking to find more efficient ways to make plant based cooking
              more affordable, more delicious and to make it in a way that
              traditional and vegan eaters alike will love.
            </p>
          </div>
          <div className="w-[80vw] overflow-hidden rounded-xl">
            <Image src={aboutIMG} />
          </div>
        </div>
      </div>
    </div>
  )
}
