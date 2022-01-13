import React from 'react'

const posts = [
  { id: '1', title: 'Title 1' },
  { id: '2', title: 'Title 2' },
  { id: '3', title: 'Title 3' },
  { id: '4', title: 'Title 4' }
]

// @ts-ignore
export async function getStaticProps ({ params }) {
  console.log('SSG2 - getStaticProps')

  function comparePost (element: { id: string, title: string }, index: number, array: { id: string, title: string }[]) {
    return element.id === params.id
  }

  const post = posts.find(comparePost)
  return {
    props: {
      post
    },
    revalidate: 10
  }
}

export async function getStaticPaths () {
  console.log('SSG2 - getStaticPaths')
  // обратите внимание на структуру возвращаемого массива
  const paths = posts.map((post) => ({
    params: { id: post.id }
  }))
  // `fallback: false` означает, что для ошибки 404 используется другой маршрут
  return {
    paths,
    fallback: false
  }
}

// @ts-ignore
export default function Post ({ post }) {
  return (
    <div>
      ID: { post.id }
      <br/>
      Title: { post.title }
    </div>
  )
}
