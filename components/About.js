import Image from 'next/image'
import React from 'react'
import aboutIMG from '../public/aboutIMG.png'

export default function About() {
  return (
    <div className="pb-40 bg-yellow-200">
      <div className="mx-auto max-w-[1300px] overflow-y-hidden bg-yellow-200">
        <div className="max-w-2xl py-12 mx-auto px- xl:container xl:mx-auto ">
          <div className="items-center justify-center lg:flex lg:space-x-12 2xl:space-x-6">
            <div className="max-w-3xl">
              <p className="pb-2 text-xl font-extrabold leading-9 text-center text-blue-400 md:text-left lg:text-4xl">
                First things first,
              </p>
              <p className="text-xl font-semibold leading-9 text-center text-blue-400 md:text-left lg:text-3xl">
                who are the “Bois”?
              </p>
              <p className="mt-4 w-full pb-10 text-center text-lg leading-7 text-[#272343] md:text-left xl:w-7/12">
                The Bois are anyone who like to cook or eating so much, they
                have to put on sweatpants after. It doesn’t matter who you are
                or where you’re from, HomeBois is for everyone. Here at HomeBois
                we focus on making restaurant quality food accessible and fun to
                make. We are always looking to find more efficient ways to make
                plant based cooking more affordable, more delicious and to make
                it in a way that traditional and vegan eaters alike will love.
              </p>
            </div>
            <div className="mx-auto mb-2 w-[80vw] overflow-hidden rounded-3xl">
              <Image src={aboutIMG} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
