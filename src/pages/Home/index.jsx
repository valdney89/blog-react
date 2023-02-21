import React from 'react'
import styles from './Home.module.scss'
import PostCard from 'components/PostCard'

import posts from 'json/posts.json'


export default function Home() {
  return (
    <ul className={styles.posts}>
        {
            posts.map(post => 
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            )
        }
    </ul>
  )
}
