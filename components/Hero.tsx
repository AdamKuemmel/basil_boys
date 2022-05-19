import Link from 'next/link'
import React from 'react'
import Header from './Header'
import heroIMG from '../public/heroIMG.jpg'
import Image from 'next/image'
export default function Hero() {
  return (
    <>
      <div className="relative h-auto max-h-[100vh]">
        <Header />
        <Image src={heroIMG} layout="fill" objectFit="cover" />
        <div className="relative top-0 w-full h-screen ">
          <div className="grid place-items-center">
            <div className="container flex flex-col items-center sm:py-24">
              <div className="flex-col items-center justify-center mb-5 sm:mb-10 sm:w-2/3 lg:flex">
                <h1 className="text-4xl font-black leading-9 text-center text-white pt-36 sm:text-3xl md:pt-20 md:text-4xl md:leading-10 lg:text-5xl xl:text-6xl">
                  <span className="text-blue-300 ">
                    Vegan
                    <br />
                  </span>
                  Recipes for Everyone
                </h1>
                <p className="p-10 mt-5 text-sm font-normal text-center text-white sm:mt-10 sm:text-lg lg:w-10/12">
                  Recipe Development specializing in Plant-Based Italian and
                  comfort food.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/recipes">
                  <button className="px-4 py-2 text-sm text-white transition duration-150 ease-in-out bg-blue-300 border border-indigo-700 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 sm:px-10 sm:py-4 lg:text-xl lg:font-bold">
                    Start Cookin'
                  </button>
                </Link>
                <button className="px-4 py-2 ml-4 text-sm text-blue-300 transition duration-150 ease-in-out bg-transparent border border-blue-300 rounded hover:border-indigo-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 sm:px-10 sm:py-4 lg:text-xl lg:font-bold">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
