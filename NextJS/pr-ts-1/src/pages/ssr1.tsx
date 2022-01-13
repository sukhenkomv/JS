import React from 'react'

export async function getServerSideProps () {
  console.log('SSR1 - getServerSideProps')
  return {
    props: {
      data: [
        { id: '1', title: 'Title 1' },
        { id: '2', title: 'Title 2' },
        { id: '3', title: 'Title 3' },
        { id: '4', title: 'Title 4' },
        { id: '5', title: 'Title 5' },
        { id: '6', title: 'Title 6' },
        { id: '7', title: 'Title 7' },
        { id: '8', title: 'Title 8' }
      ]
    }
  }
}

// @ts-ignore
export default function SSR1 ({ data }) {
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
      <ul>
        {
          data.map((post: { id: number; title: string; }) => (
            <li key={ post.id }>{ post.title }</li>
          ))
        }
      </ul>
      <br/>
    </div>
  )
}
