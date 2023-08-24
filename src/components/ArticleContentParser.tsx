import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CodePreviewer } from './CodePreviewer'

type Props = {
  markdown: string
}

export const ArticleContentParser = ({ markdown }: Props) => {
  return (
    <ReactMarkdown
      components={{
        code: ({ ...props }) => <CodePreviewer {...props} />,
        blockquote: ({ children, ...props }) => (
          <blockquote
            className='bg-secondary-50 rounded-2 p-1 border-secondary-400 border-left-5'
            {...props}
          >
            {children}
          </blockquote>
        ),
      }}
      remarkPlugins={[remarkGfm]}
    >
      {markdown}
    </ReactMarkdown>
  )
}
