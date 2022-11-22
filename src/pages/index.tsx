import Head from 'next/head'
import style from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Next News</title>
      </Head>
      <main className={style.contentContainer}>
        <section className={style.hero}>
          <span>Bem vindo 👏</span>
          <h1>
            Novidades sobre &lt;
            <span>React</span> <strong>/</strong> &gt; atualizações e muito
            mais!!
          </h1>

          <p>
            Tenha acesso a todas publicações <br />
            <span>
              por apenas R$2,99 acesso <strong>VITALICIO!!</strong>
            </span>
          </p>
        </section>
        <img src="/images/fundo.svg" alt="astronaut looking black hole" />
      </main>
    </>
  )
}
