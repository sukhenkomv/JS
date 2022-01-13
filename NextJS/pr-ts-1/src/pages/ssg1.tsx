import React from 'react'

export async function getStaticProps () {
  console.log('SSG1 - getStaticProps')
  return {
    props: {
      items: [
        { id: 1, title: 'Title 1' },
        { id: 2, title: 'Title 2' },
        { id: 3, title: 'Title 3' },
        { id: 4, title: 'Title 4' }
      ]
    },
    revalidate: 10
  }
}

// @ts-ignore
export default function SSG1 ({ items }) {
  return (
    <div>
      <h1>SSG</h1>
      Генерация статической разметки (static generation, SSG)
      <br/>
      <br/>
      Контент страницы зависит от внешних данных: используется getStaticProps - получение данных во время сборки
      <br/>
      Страница, на которой экспортируется асинхронная функция getStaticProps, предварительно рендерится с помощью
      возвращаемых этой функцией пропов.
      <br/>
      <ul>
        {
          items.map((post: { id: number; title: string; }) => (
            <li key={ post.id }>{ post.title }</li>
          ))
        }
      </ul>
      <br/>
    </div>
  )
}
