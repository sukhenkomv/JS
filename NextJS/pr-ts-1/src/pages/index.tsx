import React from 'react'
import Link from 'next/link'

const Home = (): JSX.Element => {
  return (
    <div>
      <h1>SSG</h1>
      Генерация статической разметки (static generation, SSG)
      <br/>
      <br/>
      Без данных
      <br/>
      <br/>
      С данными
      <br/>
      Существует 2 возможных сценария, при которых может потребоваться генерация статической страницы с данными:
      <br/>
      <br/>
      1. Контент страницы зависит от внешних данных: используется getStaticProps
      <br/>
      <Link href="/ssg1">
        <a>SSG #1</a>
      </Link>
      <br/>
      <br/>
      2. Пути (paths) страницы зависят от внешних данных: используется getStaticPaths, как правило, совместно с
      getStaticProps
      <br/>
      <Link href="/posts">
        <a>SSG #2</a>
      </Link>
      <br/>
      <br/>
      <h1>SSR</h1>
      <br/>
      Для обработки рендеринга страницы на стороне сервера из файла должна экспортироваться асинхронная функция
      getServerSideProps.
      <br/>
      Данная функция будет вызываться при каждом запросе страницы.
      <br/>
      <Link href="/ssr1">
        <a>SSR #1</a>
      </Link>
      <br/>
      <Link href="/ssr2">
        <a>SSR #2</a>
      </Link>
    </div>
  )
}

export default Home
