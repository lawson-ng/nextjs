import Layout from '../../components/layout'
import Head from 'next/head'
import db from '../db.json'
import {fetchPost} from '../../lib/post'
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export async function getStaticProps(context){
    const {id} = context.params
    const post = db.find(item => item.id === id)
    const detailPost = await fetchPost(post.url)
    return {
        props: {
            post,
            detailPost,
        }
    }
}

export function getStaticPaths() {
    const paths = db.map(item => ({
        params: {id: item.id}
    }))
    return {
        paths,
        fallback: true
    }
}

const Post = ({post, detailPost}) => {
    const components = {
        code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
            <SyntaxHighlighter  language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
            ) : (
            <code className={className} {...props} />
            )
        }
    }
    
    return (
        <div>
            <Head>
                <title>{post?.title}</title>
            </Head>
            <Layout>
                <ReactMarkdown 
                    escapeHtml={false} 
                    children={detailPost} 
                    components={components}
                />
            </Layout>
        </div>
    )

}

export default Post
