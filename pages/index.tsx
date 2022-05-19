import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Hero from '../components/Hero'
import logo from '../public/HomeBois.png'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'
import About from '../components/About'

interface Props {
  posts: [Post]
}

const Home = ({ posts }: Props) => {
  const usePosts = posts
  console.log(posts)
  return (
    <div className="mx-auto">
      <Head>
        <title>HomeBois | Vegan Comfort Food</title>
        <link rel="icon" href="/HomeBois.png" />
      </Head>
      {/* <Header /> */}
      <Hero />
      {/* her0 */}
      <About />
      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {usePosts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="overflow-hidden border rounded-lg cursor-pointer group">
              <img
                className="object-cover w-full transition-transform duration-200 ease-in-out h-60 group-hover:scale-105"
                src={urlFor(post.mainImage).url()}
                alt=""
              />
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
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
  )
}

export default Home
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
