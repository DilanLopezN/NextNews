import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title> Posts | ReactNews </title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>01 de dezembro de 2022</time>
            <strong>Creating a monorepo</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus iusto est cum quasi dolorem nobis, impedit eos, quae
            </p>
          </a>

          <a href="#">
            <time>01 de dezembro de 2022</time>
            <strong>Creating a monorepo</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus iusto est cum quasi dolorem nobis, impedit eos, quae
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
