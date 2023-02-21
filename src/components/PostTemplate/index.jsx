import React from 'react'
import styles from './PostTemplate.module.scss'

export default function PostTemplate({fotoCapa, titulo, children}) {
  return (
    <article className={styles.postModeloContainer}>
        <div
            className={styles.fotoCapa}
            style={{ backgroundImage: `url(${fotoCapa})` }}
        ></div>

        <h2 className={styles.titulo}>{titulo}</h2>

        <div className={styles.postConteudoContainer}>
            {children}
        </div>
    </article>
  )
}
