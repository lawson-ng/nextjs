import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { getSortedPostsData } from '../lib/post'
import Link from 'next/link'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps(){
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Profile = () => (
  <Image
    src='../public/images/avatar.jpg'
    height={144}
    width={144}
    alt={'Abraham Lawson'}
  />
)

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abraham Lawson Here !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <section >
        <h2 >Blog</h2>
        <ul >
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      </main>
    </div>
  )
}
