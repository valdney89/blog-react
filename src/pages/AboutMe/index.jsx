import PostTemplate from 'components/PostTemplate'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './AboutMe.module.scss'

export default function AboutMe() {
  return (
    <PostTemplate
        fotoCapa={fotoCapa}
        titulo="About me"
    >
        <h3 className={styles.subtitulo}>
            Hello, my name is Valdney Nogueira.
        </h3>

        <img
            className={styles.fotoSobreMim}
            src="https://github.com/valdney89.png"
            alt="foto valdney" 
        />

        <p className={styles.paragrafo}>
            As a front-end developer, I am able to develop large systems 
            using best practices to ensure clean, performant, accessible 
            and tested code using Angular 2+ with Typescript, RxJs, NgRx, 
            Jasmine, Jest and others Tools.
        </p>

        <p className={styles.paragrafo}>
            I have a easy profile for teamwork, I tried propose ideas, 
            feedbacks, help in the requirements and help other 
            developers with code reviews.
        </p>

        <p className={styles.paragrafo}>
            I have a bachelor's degree in Information Systems from 
            Catholic University of Brasilia, where I also did a postgraduate 
            in Project Management and I have a 2nd postgraduate in 
            Front-end Development from IGTI.
        </p>
    </PostTemplate>
  )
}
