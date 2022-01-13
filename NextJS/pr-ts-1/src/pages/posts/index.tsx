import React from 'react'
import Link from 'next/link'

export default function Posts () {
  return (
    <div>
      <h1>SSG</h1>
      Генерация статической разметки (static generation, SSG)
      <br/>
      <br/>
      Пути страницы зависят от внешних данных
      <br/>
      Для обработки предварительного рендеринга статической страницы, пути которой зависят от внешних данных,
      <br/>
      из динамической страницы (например, pages/posts/[id].js) должна экспортироваться асинхронная функция
      getStaticPaths - определение динамических роутов для предварительного рендеринга страниц на основе данных
      <br/>
      Данная функция вызывается во время сборки и позволяет определить пути для пререндеринга

      <br/>

      <ul>
        <li>
          <Link href="/posts/1">
            <a>post 1</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/2">
            <a>post 2</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/3">
            <a>post 3</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/4">
            <a>post 4</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/5">
            <a>post 5 (нет такого)</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
