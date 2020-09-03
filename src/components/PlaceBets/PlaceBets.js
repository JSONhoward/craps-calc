import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import styles from './PlaceBets.module.scss'
import { outsideEven, odd, insideEven, boughtOutsideEven } from './utils/payouts'

const PlaceBets = () => {
    const [bet, setBet] = useState(0)
    const [fourTen, setFourTen] = useState(0)
    const [fiveNine, setFiveNine] = useState(0)
    const [sixEight, setSixEight] = useState(0)
    const [boughtFourTen, setBoughtFourTen] = useState(0)
    const [buy4and10, setBuy4and10] = useState(false)

    const handleBet = (event) => {
        const bet = Math.abs(+event.target.value)

        if (bet < 1e5) {
            setBet(bet)
            setFourTen(outsideEven(bet))
            setFiveNine(odd(bet))
            setSixEight(insideEven(bet))
            setBoughtFourTen(boughtOutsideEven(bet))
        }
    }

    const handleCheckbox = event => setBuy4and10(prev => !prev)

    return (
        <div className={styles.PlaceBets}>
            <Helmet>
                <title>Craps Calc | Place Bets</title>
            </Helmet>
            <input max={9999} value={bet} type='number' name='place' id='place-input' onChange={handleBet} />
            <div className={styles.buyCheckbox}>
                <input type='checkbox' name='buy4and10' value={buy4and10} id='buy4and10' onChange={handleCheckbox} />
                <p>Buy 4 and 10?</p>
            </div>
            <div className={styles.placeBetsBox}>
                <div className={[styles.box, styles.noBorderBottom].join(' ')}>
                    <div className={styles.placeBox}>
                        <div className={styles.placePairNumbers}>
                            <p>4</p>
                        </div>
                        <div className={styles.placeOdds}>
                            {
                                buy4and10 ?
                                    <p className={styles['placeBet-odds']}>2 to 1</p> :
                                    <p className={styles['placeBet-odds']}>9 to 5</p>
                            }
                        </div>
                        <div className={styles['placeBox-pays']}>
                            <p>pays</p>
                            {
                                buy4and10 ?
                                    <p className={styles.result}>${boughtFourTen}</p> :
                                    <p className={styles.result}>${fourTen}</p>
                            }
                        </div>
                    </div>
                </div>
                <div className={[styles.box, styles.noBorderBottom].join(' ')}>
                    <div className={styles.placeBox}>
                        <div className={styles.placePairNumbers}>
                            <p>5</p>
                        </div>
                        <div className={styles.placeOdds}>
                            <p className={styles['placeBet-odds']}>7 to 5</p>
                        </div>
                        <div className={styles['placeBox-pays']}>
                            <p>pays</p>
                            <p className={styles.result}>${fiveNine}</p>
                        </div>
                    </div>
                </div>
                <div className={[styles.box, styles.noBorderBottom].join(' ')}>
                    <div className={styles.placeBox}>
                        <div className={styles.placePairNumbers}>
                            <p>Six</p>
                        </div>
                        <div className={styles.placeOdds}>
                            <p className={styles['placeBet-odds']}>7 to 6</p>
                        </div>
                        <div className={styles['placeBox-pays']}>
                            <p>pays</p>
                            <p className={styles.result}>${sixEight}</p>
                        </div>
                    </div>
                </div>
                <div className={[styles.box, styles.noBorderBottom].join(' ')}>
                    <div className={styles.placeBox}>
                        <div className={styles.placePairNumbers}>
                            <p>8</p>
                        </div>
                        <div className={styles.placeOdds}>
                            <p className={styles['placeBet-odds']}>7 to 6</p>
                        </div>
                        <div className={styles['placeBox-pays']}>
                            <p>pays</p>
                            <p className={styles.result}>${sixEight}</p>
                        </div>
                    </div>
                </div>
                <div className={[styles.box, styles.noBorderBottom].join(' ')}>
                    <div className={styles.placeBox}>
                        <div className={styles.placePairNumbers}>
                            <p>Nine</p>
                        </div>
                        <div className={styles.placeOdds}>
                            <p className={styles['placeBet-odds']}>7 to 5</p>
                        </div>
                        <div className={styles['placeBox-pays']}>
                            <p>pays</p>
                            <p className={styles.result}>${fiveNine}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.placeBox}>
                        <div className={styles.placePairNumbers}>
                            <p>10</p>
                        </div>
                        <div className={styles.placeOdds}>
                            {
                                buy4and10 ?
                                    <p className={styles['placeBet-odds']}>2 to 1</p> :
                                    <p className={styles['placeBet-odds']}>9 to 5</p>
                            }
                        </div>
                        <div className={styles['placeBox-pays']}>
                            <p>pays</p>
                            {
                                buy4and10 ?
                                    <p className={styles.result}>${boughtFourTen}</p> :
                                    <p className={styles.result}>${fourTen}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceBets
