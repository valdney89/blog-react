import React from 'react'
import { useParams } from 'react-router-dom'
import './Post.scss'

import posts from 'json/posts.json'
import PostTemplate from 'components/PostTemplate'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export default function Post() {

  const param = useParams()

  const post = posts.find(post => post.id === Number(param.id))

  return (
    (post && post.id)
      ? <PostTemplate
          fotoCapa={`/assets/images/posts/${post.id}/capa.png`}
          titulo={post.titulo}
        >
          <div className='post-markdown-container'>
            <ReactMarkdown>
              {post.texto}
            </ReactMarkdown>
          </div>
        </PostTemplate>
      : <h1>Post not found</h1>
  )
}
