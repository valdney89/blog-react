import React from 'react'
import styles from './Banner.module.scss'
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner() {
  return (
    <section className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Welcome</h1>
            <p className={styles.paragrafo}>
                I am a front-end developer angular 2+ learning react, I wish to share my knowledge 
                with everybody, I hope that you learn something 
                new.
            </p>
        </div>

        <div className={styles.imagens}>
            <img 
                className={styles.circuloColorido}
                src={circuloColorido}
                alt=""
            />

            <img
                className={styles.minhaFoto}
                src="https://github.com/valdney89.png"
                alt="foto valdney" 
            />
        </div>
    </section>
  )
}
