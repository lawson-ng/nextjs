import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import axios from 'axios'

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

const headers = {
  'Accept': 'application/vnd.github.VERSION.raw'
}

export const fetchPost = async (url) => {
  const content = await axios.get(url).then(res => res.data)
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()
  // const matterResult =  matter(content.data)
  return content
}