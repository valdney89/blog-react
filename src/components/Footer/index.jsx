import React from 'react'
import styles from './Footer.module.scss'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

export default function Footer() {
  return (
    <footer className={styles.rodape}>
        <MarcaRegistrada />
        Desenvolvido por Valdney Nogueira
    </footer>
  )
}
