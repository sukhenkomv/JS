import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'

const posts = [
  { id: '1', title: 'Title 1' },
  { id: '2', title: 'Title 2' },
  { id: '3', title: 'Title 3' },
  { id: '4', title: 'Title 4' },
  { id: '5', title: 'Title 5' },
  { id: '6', title: 'Title 6' },
  { id: '7', title: 'Title 7' },
  { id: '8', title: 'Title 8' }
]

// export async function getServerSideProps () {
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log('SSR2 - getServerSideProps')

  function comparePost (element: { id: string, title: string }, index: number, array: { id: string, title: string }[]) {
    return element.id === query.id
  }

  const post = posts.find(comparePost)

  // if (post === undefined) {
  //
  // }
  return {
    props: {
      post: post
    }
  }
}

// @ts-ignore
export default function SSR2 ({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <h1>SSR</h1>
      Рендеринг на стороне сервера (server-side rendering, SSR)
      <br/>
      <br/>
      Для обработки рендеринга страницы на стороне сервера из файла должна экспортироваться асинхронная
      функция <b>getServerSideProps</b>.
      <br/>
      Данная функция будет вызываться при каждом запросе страницы.
      <br/>
      <br/>
      ID: {post.id}
      <br/>
      Title: {post.title}
    </div>
  )
}
