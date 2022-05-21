import Link from 'next/link'
import React from 'react'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

export default function recipes({ posts }: Props) {
  const usePosts = posts
  return (
    <>
      ALL RECIPES
      <div className="bg-yellow-200 pb-28">
        <div className="mx-auto grid max-w-[1400px] snap-normal grid-cols-1 gap-3 bg-yellow-200 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
          {usePosts.slice(0, 6).map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="overflow-hidden rounded-lg cursor-pointer group">
                <img
                  className="object-cover w-full transition-transform duration-200 ease-in-out h-60 group-hover:scale-105"
                  src={urlFor(post.mainImage).url()}
                  alt=""
                />
                <div className="flex justify-between bg-[#272343] p-5">
                  <div>
                    <p className="text-lg font-bold text-[#BAE8E8]">
                      {post.title}
                    </p>
                    <p className="w-[80%] text-xs text-[#f3fbfb]">
                      {post.description} by {post.author.name}
                    </p>
                  </div>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={urlFor(post.author.image).url()!}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  author -> {
  name,
  image
},
description,
mainImage,
slug
}`
  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
  }
}
