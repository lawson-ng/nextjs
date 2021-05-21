import Head from 'next/head'
import Card from '../components/card'
import db from './db.json'
import Layout from '../components/layout'
import Image from 'next/image'
import * as UserAPI from '../lib/user'

export async function getStaticProps(context){
  const me = await UserAPI.fetchMe()
  return {
    props: {
      allPostsData: db,
      me,
    }
  }
}
const renderPostCards = (listPosts = []) => {
  return listPosts.map(post => {
    return (
      <Card
        key={post.id}
        id={post.id}
        title={post.title}
        date={post.date}
      />
    )
  })
}

export default function Home({ allPostsData, me }) {
  const {
    avatar_url,
    name,
    bio
  } = me
  return (
    <Layout>
      <Head>
        <title>Coder Light</title>
        <lin3k rel="icon" href="/favicon.ico" />
      </Head>

      <div id="home" className="d-flex flex-column">
        <div className="row justify-content-center">
            <Image
              priority
              src={avatar_url}
              className={'col-3 rounded-circle align-self-center p-1 bg-secondary border'}
              height={200}
              width={200}
              alt="Abraham Lawson"
              layout="fixed"
            />
            <h5 className="text-center">{name}</h5>
            <p className="text-center text-black-50">{bio}</p>
        </div>
        {/* All posts */}
        <div className="d-flex align-items-center flex-column">
          {renderPostCards(allPostsData)}
        </div>
      </div>
    </Layout>
  )
}
