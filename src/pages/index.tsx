import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { SubscribreButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import style from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}
export default function Home({ product }: HomeProps) {
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
              por apenas {product.amount} acesso <strong>TOTAL!!</strong>
            </span>
          </p>
          <SubscribreButton priceId={product.priceId} />
        </section>
        <img src="/images/fundo.svg" alt="garota estudando react" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1M76rpCROxh1o2KkLa6zlKKH')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100)
  }
  return {
    props: {
      product
    }
  }
}
