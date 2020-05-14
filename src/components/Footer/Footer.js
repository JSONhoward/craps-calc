import React from 'react'
import { FaGithub } from 'react-icons/fa'

import styles from './Footer.module.scss'

const YEAR = new Date().getFullYear()

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles['footer-left']}></div>
            <div className={styles['footer-middle']}>
                <p id='copyright'>&copy; {YEAR} Craps Calc</p>
            </div>
            <div className={styles['footer-right']}>
                <a rel='noopener noreferrer' target='_blank' href='http://www.github.com/JSONhoward/craps-calc'>
                    <FaGithub size={'2rem'} />
                </a>
                <a rel='noopener noreferrer' target='_blank' href='http://www.github.com/JSONhoward/craps-calc'>
                    <p>Github Repo</p>
                </a>
            </div>
        </div>
    )
}

export default Footer
