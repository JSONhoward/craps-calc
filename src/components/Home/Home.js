import React from 'react'
import {Helmet} from 'react-helmet'
import { useHistory } from 'react-router-dom'

import styles from './Home.module.scss'
import crapsTable from '../../images/Craps_table_layout.svg'

const Home = () => {
    const history = useHistory()

    return (
        <>
            <Helmet>
                <title>Craps Calc</title>
            </Helmet>
            <div className={styles.Home}>
                <div className={styles['home-image']}>
                    <img alt='craps table' src={crapsTable}></img>
                    <div className={styles['home-image-shadow']}></div>
                </div>
                <div className={styles.tagline}>
                    <p>calculate payouts for all major craps bets</p>
                </div>
                <div className={styles['nav-buttons']}>
                    <button onClick={() => history.push('/placebets')}>Place Bets</button>
                    <button onClick={() => history.push('/propbets')}>Props Bets</button>
                    <button onClick={() => history.push('/hopbets')}>Hop bets</button>
                </div>
            </div>
        </>
    )
}

export default Home
