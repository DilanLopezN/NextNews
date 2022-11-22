import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Next News</title>
      </Head>
      <main>
        <section>
          <span>Bem vindo 👏</span>
          <h1>
            Novidades sobre o mundo de <span>Desenvolvimento</span>
          </h1>

          <p>
            Tenha acesso a todas publicações <br />{' '}
            <span>por apenas R$7,99 reais</span>{' '}
          </p>
        </section>
        <img src="/images/fundo.png" alt="astronaut looking black hole" />
      </main>
    </>
  )
}
