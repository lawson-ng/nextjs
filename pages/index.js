import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { getSortedPostsData } from '../lib/post'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import Card from '../components/card'

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

const renderPostCards = (listPosts = []) => {
  return listPosts.map(post => {
    return (
      <Card
        id={post.id}
        title={post.title}
        date={post.date}
      />
    )
  })
}

const title = 'Coder Light'

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coder Light</title>
        <lin3k rel="icon" href="/favicon.ico" />
      </Head>

        <h2>{title}</h2>
        <ul>
          {renderPostCards(allPostsData)}
          {/* {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))} */}
        </ul>
      
    </div>
  )
}
