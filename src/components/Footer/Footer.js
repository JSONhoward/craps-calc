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
                    <FaGithub size={'2rem'} />
                <a title='github repo' rel='noopener noreferrer' target='_blank' href='http://www.github.com/JSONhoward/craps-calc'>
                    Github Repo
                </a>
            </div>
        </div>
    )
}

export default Footer
