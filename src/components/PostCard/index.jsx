import Button from 'components/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PostCard.module.scss'

export default function PostCard({post}) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
          <img
              className={styles.capa}
              src={`/assets/images/posts/${post.id}/capa.png`}
              alt="" 
          />

          <h2 className={styles.titulo}>
              {post.titulo}
          </h2>

          <Button>Leia mais</Button>
      </div>
    </Link>
    
  )
}
