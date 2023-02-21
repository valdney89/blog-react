import React from 'react'
import MenuLink from '../MenuLink'
import styles from './Menu.module.scss'

export default function Menu() {

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">Início</MenuLink>
                <MenuLink to="/about-me">Sobre Mim</MenuLink>
            </nav>
        </header>
    )
}
