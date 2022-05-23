import Image from 'next/image'
import React from 'react'
import pastarolling from '../public/pastarolling.jpg'
function Cater() {
  return (
    <div className="bg-slate-200 pb-96">
      <div className="mx-auto max-w-[1300px] bg-slate-200 pt-16 xl:flex xl:justify-end">
        <div className="container sm:mx-auto">
          <div className="justify-between block md:flex lg:items-center xl:flex xl:items-center">
            <div className="w-11/12 mx-auto md:w-5/12 xl:mx-0 xl:w-4/12">
              <div>
                <h1 className="pt-12 mb-3 text-4xl font-extrabold text-center text-blue-400 md:text-left xl:pt-0">
                  We Cook!
                </h1>
                <h1 className="pt-12 mb-3 text-3xl font-semibold text-center text-blue-400 md:text-left xl:pt-0">
                  Let's Make a Connection.
                </h1>
                <p className="pb-10 mb-6 text-lg text-center text-gray-600 md:text-left">
                  Need a recipe developer? What about a private Chef? Just reach
                  out and we’ll make it happen!
                </p>
                <div className="flex flex-wrap w-full">
                  <div className="w-full">
                    <div className="flex flex-col mb-3">
                      <label
                        className="mb-2 text-base font-bold text-gray-800"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="youremail@gmail.com"
                        className="py-2 pl-2 pr-2 border border-blue-300 rounded-lg outline-none "
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-[#BAE8E8] px-6 py-3 text-base font-bold text-[#272343] hover:bg-yellow-200 focus:outline-none"
                    >
                      Start the Oven
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-] relative mx-auto mt-8 flex w-11/12 justify-end bg-slate-200 py-20 md:w-5/12 xl:mx-1 xl:mt-0 ">
              <div className="w-4/5 h-4/5">
                <Image
                  src={pastarolling}
                  alt
                  className="relative z-10 object-cover w-full h-full -ml-12 overflow-hidden rounded sm:-ml-20 md:-ml-20 lg:-ml-32 xl:-ml-56"
                />
              </div>
              <div className="absolute bottom-0 right-0 z-0 pb-2 pr-2">
                <svg
                  width={243}
                  height={163}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#272343" fillRule="evenodd">
                    <rect width={5} height={5} rx="2.5" />
                    <rect x={30} width={5} height={5} rx="2.5" />
                    <rect x={59} width={5} height={5} rx="2.5" />
                    <rect x={89} width={5} height={5} rx="2.5" />
                    <rect x={119} width={5} height={5} rx="2.5" />
                    <rect x={148} width={5} height={5} rx="2.5" />
                    <rect x={178} width={5} height={5} rx="2.5" />
                    <rect x={208} width={5} height={5} rx="2.5" />
                    <rect x={238} width={5} height={5} rx="2.5" />
                    <rect y={20} width={5} height={5} rx="2.5" />
                    <rect x={30} y={20} width={5} height={5} rx="2.5" />
                    <rect x={59} y={20} width={5} height={5} rx="2.5" />
                    <rect x={89} y={20} width={5} height={5} rx="2.5" />
                    <rect x={119} y={20} width={5} height={5} rx="2.5" />
                    <rect x={148} y={20} width={5} height={5} rx="2.5" />
                    <rect x={178} y={20} width={5} height={5} rx="2.5" />
                    <rect x={208} y={20} width={5} height={5} rx="2.5" />
                    <rect x={238} y={20} width={5} height={5} rx="2.5" />
                    <rect y={39} width={5} height={5} rx="2.5" />
                    <rect x={30} y={39} width={5} height={5} rx="2.5" />
                    <rect x={59} y={39} width={5} height={5} rx="2.5" />
                    <rect x={89} y={39} width={5} height={5} rx="2.5" />
                    <rect x={119} y={39} width={5} height={5} rx="2.5" />
                    <rect x={148} y={39} width={5} height={5} rx="2.5" />
                    <rect x={178} y={39} width={5} height={5} rx="2.5" />
                    <rect x={208} y={39} width={5} height={5} rx="2.5" />
                    <rect x={238} y={39} width={5} height={5} rx="2.5" />
                    <rect y={60} width={5} height={5} rx="2.5" />
                    <rect x={30} y={60} width={5} height={5} rx="2.5" />
                    <rect x={59} y={60} width={5} height={5} rx="2.5" />
                    <rect x={89} y={60} width={5} height={5} rx="2.5" />
                    <rect x={119} y={60} width={5} height={5} rx="2.5" />
                    <rect x={148} y={60} width={5} height={5} rx="2.5" />
                    <rect x={178} y={60} width={5} height={5} rx="2.5" />
                    <rect x={208} y={60} width={5} height={5} rx="2.5" />
                    <rect x={238} y={60} width={5} height={5} rx="2.5" />
                    <rect y={79} width={5} height={5} rx="2.5" />
                    <rect x={30} y={79} width={5} height={5} rx="2.5" />
                    <rect x={59} y={79} width={5} height={5} rx="2.5" />
                    <rect x={89} y={79} width={5} height={5} rx="2.5" />
                    <rect x={119} y={79} width={5} height={5} rx="2.5" />
                    <rect x={148} y={79} width={5} height={5} rx="2.5" />
                    <rect x={178} y={79} width={5} height={5} rx="2.5" />
                    <rect x={208} y={79} width={5} height={5} rx="2.5" />
                    <rect x={238} y={79} width={5} height={5} rx="2.5" />
                    <rect y={99} width={5} height={5} rx="2.5" />
                    <rect x={30} y={99} width={5} height={5} rx="2.5" />
                    <rect x={59} y={99} width={5} height={5} rx="2.5" />
                    <rect x={89} y={99} width={5} height={5} rx="2.5" />
                    <rect x={119} y={99} width={5} height={5} rx="2.5" />
                    <rect x={148} y={99} width={5} height={5} rx="2.5" />
                    <rect x={178} y={99} width={5} height={5} rx="2.5" />
                    <rect x={208} y={99} width={5} height={5} rx="2.5" />
                    <rect x={238} y={99} width={5} height={5} rx="2.5" />
                    <rect y={119} width={5} height={5} rx="2.5" />
                    <rect x={30} y={119} width={5} height={5} rx="2.5" />
                    <rect x={59} y={119} width={5} height={5} rx="2.5" />
                    <rect x={89} y={119} width={5} height={5} rx="2.5" />
                    <rect x={119} y={119} width={5} height={5} rx="2.5" />
                    <rect x={148} y={119} width={5} height={5} rx="2.5" />
                    <rect x={178} y={119} width={5} height={5} rx="2.5" />
                    <rect x={208} y={119} width={5} height={5} rx="2.5" />
                    <rect x={238} y={119} width={5} height={5} rx="2.5" />
                    <rect y={139} width={5} height={5} rx="2.5" />
                    <rect x={30} y={139} width={5} height={5} rx="2.5" />
                    <rect x={59} y={139} width={5} height={5} rx="2.5" />
                    <rect x={89} y={139} width={5} height={5} rx="2.5" />
                    <rect x={119} y={139} width={5} height={5} rx="2.5" />
                    <rect x={148} y={139} width={5} height={5} rx="2.5" />
                    <rect x={178} y={139} width={5} height={5} rx="2.5" />
                    <rect x={208} y={139} width={5} height={5} rx="2.5" />
                    <rect x={238} y={139} width={5} height={5} rx="2.5" />
                    <rect y={158} width={5} height={5} rx="2.5" />
                    <rect x={30} y={158} width={5} height={5} rx="2.5" />
                    <rect x={59} y={158} width={5} height={5} rx="2.5" />
                    <rect x={89} y={158} width={5} height={5} rx="2.5" />
                    <rect x={119} y={158} width={5} height={5} rx="2.5" />
                    <rect x={148} y={158} width={5} height={5} rx="2.5" />
                    <rect x={178} y={158} width={5} height={5} rx="2.5" />
                    <rect x={208} y={158} width={5} height={5} rx="2.5" />
                    <rect x={238} y={158} width={5} height={5} rx="2.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cater
