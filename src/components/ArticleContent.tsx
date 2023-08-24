import { useEffect, useState } from 'react'
import { ArticleContentParser } from './ArticleContentParser'
import { PostHeader } from './PostHeader'

export const ArticleContent = () => {
  const [markdownContent, setMarkdownContent] = useState('')

  useEffect(() => {
    async function fetchMarkdown() {
      try {
        const response = await fetch('/src/assets/posts/test.md')
        const content = await response.text()
        setMarkdownContent(content)
      } catch (error) {
        console.error('Error fetching article:', error)
      }
    }

    fetchMarkdown()
  }, [])

  // console.log(markdown)

  return (
    <div className='post-content my-5'>
      <PostHeader />

      <article className='article d-flex flex-direction-column gap-4 text-justify m3-5 text-secondary-600'>
        <ArticleContentParser markdown={markdownContent} />
      </article>
    </div>
  )
}
