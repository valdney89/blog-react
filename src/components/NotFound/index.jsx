import React from 'react'
import styles from './NotFound.module.scss'
import erro404 from 'assets/erro_404.png'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

    const navigate = useNavigate()

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}></span>

                <h1 className={styles.titulo}>
                    Ops! Page Not Found.
                </h1>

                <p className={styles.paragrafo}>
                    Nothing here... 
                </p>

                <div 
                    className={styles.botaoContainer}
                    onClick={() => navigate(-1)}
                >
                    <Button>Back to Home</Button>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro404} 
                    alt="A dog with sunglasses wearing a human clothers"
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}
