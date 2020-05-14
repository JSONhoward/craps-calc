import React, { useState } from 'react'
import {Helmet} from 'react-helmet'

import styles from './HopBets.module.scss'
import dice1 from '../../images/dice1.png'
import dice2 from '../../images/dice2.png'
import dice3 from '../../images/dice3.png'
import dice4 from '../../images/dice4.png'
import dice5 from '../../images/dice5.png'
import dice6 from '../../images/dice6.png'
import { FaArrowCircleUp } from 'react-icons/fa'
import { FaArrowCircleDown } from 'react-icons/fa'
import { payouts, diceNumbers } from './utils/payouts'

const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6]

const HopBets = () => {
    const [bet, setBet] = useState(0)
    const [die, setDie] = useState(0)
    const [die2, setDie2] = useState(0)
    const [dicePays, setDicePays] = useState(diceNumbers)

    const getPayouts = payouts()

    const handlePays = () => {
        let pays = getPayouts(die, die2, bet)
        setDicePays(pays)
    }

    const handleBet = (event) => {
        let betAmount = event.target.value
        if(betAmount.length < 5) {
            setBet(betAmount)
        }
    }

    const handleDiceUp = dieNum => {
        switch (dieNum) {
            case 1:
                if (die >= 5) {
                    setDie(0)
                } else {
                    let currentNum = die + 1
                    setDie(currentNum)
                }
                break
            case 2:
                if (die2 >= 5) {
                    setDie2(0)
                } else {
                    let currentNum = die2 + 1
                    setDie2(currentNum)
                }
                break
            default:
                break
        }
    }

    const handleDiceDown = dieNum => {
        switch (dieNum) {
            case 1:
                if (die <= 0) {
                    setDie(5)
                } else {
                    let currentNum = die - 1
                    setDie(currentNum)
                }
                break
            case 2:
                if (die2 <= 0) {
                    setDie2(5)
                } else {
                    let currentNum = die2 - 1
                    setDie2(currentNum)
                }
                break
            default:
                break
        }
    }

    return (
        <>
            <Helmet>
                <title>Craps Calc | Hop Bets</title>
            </Helmet>
            <div className={styles.HopBets}>
                <input onChange={handleBet} maxLength="5" value={bet} type='number' name='place' id='place' />
                <div className={styles.diceCombination}>
                    <div className={styles.arrows}>
                        <div className={styles['arrow-icon']} onClick={() => handleDiceUp(1)}>
                            <FaArrowCircleUp size={"1.5rem"} />
                        </div>
                        <div className={styles['arrow-icon']} onClick={() => handleDiceDown(1)}>
                            <FaArrowCircleDown size={"1.5rem"} />
                        </div>
                    </div>
                    <img alt='a die' src={diceArray[die]} />
                    <img alt='a die' src={diceArray[die2]} />
                    <div className={styles.arrows}>
                        <div className={styles['arrow-icon']} onClick={() => handleDiceUp(2)}>
                            <FaArrowCircleUp size={"1.5rem"} />
                        </div>
                        <div className={styles['arrow-icon']} onClick={() => handleDiceDown(2)}>
                            <FaArrowCircleDown size={"1.5rem"} />
                        </div>
                    </div>
                </div>
                <button type='button' name='calculate' onClick={handlePays}>PAYS</button>
                <div className={styles.propBox}>
                    <div className={styles.dice}>
                        <div className={[styles['die-box'], styles.noBorderBottom, styles.noBorderRight].join(' ')}>
                            <div className={styles['dice-images']}>
                                <img alt='dice 3' src={dice3} />
                                <img alt='dice 1' src={dice1} />
                            </div>
                            <p>15 to 1</p>
                            <p>Pays ${dicePays.thirtyOne}</p>
                        </div>
                        <div className={[styles['die-box'], styles.noBorderBottom].join(' ')}>
                            <div className={styles['dice-images']}>
                                <img alt='dice 2' src={dice2} />
                                <img alt='dice 2' src={dice2} />
                            </div>
                            <p>30 to 1</p>
                            <p>Pays ${dicePays.twentyTwo}</p>
                        </div>
                    </div>
                    <div className={styles.dice}>
                        <div className={[styles['die-box'], styles.noBorderBottom, styles.noBorderRight].join(' ')}>
                            <div className={styles['dice-images']}>
                                <img alt='dice 4' src={dice4} />
                                <img alt='dice 1' src={dice1} />
                            </div>
                            <p>15 to 1</p>
                            <p>Pays ${dicePays.fortyOne}</p>
                        </div>
                        <div className={[styles['die-box'], styles.noBorderBottom].join(' ')}>
                            <div className={styles['dice-images']}>
                                <img alt='dice 3' src={dice3} />
                                <img alt='dice 2' src={dice2} />
                            </div>
                            <p>15 to 1</p>
                            <p>Pays ${dicePays.thirtyTwo}</p>
                        </div>
                    </div>
                    <div className={styles.dice}>
                        <div className={[styles['die-box'], styles.noBorderBottom, styles.noBorderRight].join(' ')}>
                            <div className={styles['dice-images']}>
                                <img alt='dice 5' src={dice5} />
                                <img alt='dice 1' src={dice1} />
                            </div>
                            <p>15 to 1</p>
                            <p>Pays ${dicePays.fiftyOne}</p>
                        </div>
                        <div className={[styles['die-box'], styles.noBorderBottom, styles.noBorderRight].join(' ')}>
                            <div className={styles['dice-images']}>
                                <img alt='dice 4' src={dice4} />
                                <img alt='dice 2' src={dice2} />
                            </div>
                            <p>15 to 1</p>
                            <p>Pays ${dicePays.fortyTwo}</p>
                        </div>
                        <div className={[styles['die-box'], styles.noBorderBottom].join(' ')}>
                            <div className={styles['dice-images']}>
                                <img alt='dice 3' src={dice3} />
                                <img alt='dice 3' src={dice3} />
                            </div>
                            <p>30 to 1</p>
                            <p>Pays ${dicePays.thirtyThree}</p>
                        </div>
                    </div>
                    <div className={styles.dice}>
                        <div className={[styles['die-box'], styles.noBorderRight].join(' ')}>
                            <div className={styles['dice-images']}>
                                <img alt='dice 5' src={dice5} />
                                <img alt='dice 3' src={dice3} />
                            </div>
                            <p>15 to 1</p>
                            <p>Pays ${dicePays.fiftyThree}</p>
                        </div>
                        <div className={[styles['die-box'], styles.noBorderRight].join(' ')}>
                            <div className={styles['dice-images']}>
                                <img alt='dice 6' src={dice6} />
                                <img alt='dice 2' src={dice2} />
                            </div>
                            <p>15 to 1</p>
                            <p>Pays ${dicePays.sixtyTwo}</p>
                        </div>
                        <div className={styles['die-box']}>
                            <div className={styles['dice-images']}>
                                <img alt='dice 4' src={dice4} />
                                <img alt='dice 4' src={dice4} />
                            </div>
                            <p>30 to 1</p>
                            <p>Pays ${dicePays.fortyFour}</p>
                        </div>
                    </div>
                    <div className={styles.dice}>
                        <div className={[styles['die-box'], styles.noBorderTop, styles.noBorderRight].join(' ')}>
                            <div className={styles['dice-images']}>
                                <img alt='dice 6' src={dice6} />
                                <img alt='dice 3' src={dice3} />
                            </div>
                            <p>15 to 1</p>
                            <p>Pays ${dicePays.sixtyThree}</p>
                        </div>
                        <div className={[styles['die-box'], styles.noBorderTop].join(' ')}>
                            <div className={styles['dice-images']}>
                                <img alt='dice 4' src={dice4} />
                                <img alt='dice 5' src={dice5} />
                            </div>
                            <p>15 to 1</p>
                            <p>Pays ${dicePays.fiftyFour}</p>
                        </div>
                    </div>
                    <div className={styles.dice}>
                        <div className={[styles['die-box'], styles.noBorderTop, styles.noBorderRight].join(' ')}>
                            <div className={styles['dice-images']}>
                                <img alt='die 6' src={dice6} />
                                <img alt='die 4' src={dice4} />
                            </div>
                            <p>15 to 1</p>
                            <p>Pays ${dicePays.sixtyFour}</p>
                        </div>
                        <div className={[styles['die-box'], styles.snoBorderTop].join(' ')}>
                            <div className={styles['dice-images']}>
                                <img alt='dice 5' src={dice5} />
                                <img alt='dice 5' src={dice5} />
                            </div>
                            <p>30 to 1</p>
                            <p>Pays ${dicePays.fiftyFive}</p>
                        </div>
                    </div>

                </div>
                <div className={styles.moreHopBets}>
                    <div className={styles['moreBets-line']}>
                        <p>Hop 4's</p>
                        <div className={styles.morePays}>
                            <p>Pays ${dicePays.fours}</p>
                        </div>
                    </div>
                    <hr className={styles.moreBetsDivider} />
                    <div className={styles['moreBets-line']}>
                        <p>Hop 5's</p>
                        <div className={styles.morePays}>
                            <p>Pays ${dicePays.fives}</p>
                        </div>
                    </div>
                    <hr className={styles.moreBetsDivider} />
                    <div className={styles['moreBets-line']}>
                        <p>Hop 6's</p>
                        <div className={styles.morePays}>
                            <p>Pays ${dicePays.sixes}</p>
                        </div>
                    </div>
                    <hr className={styles.moreBetsDivider} />
                    <div className={styles['moreBets-line']}>
                        <p>Hop 8's</p>
                        <div className={styles.morePays}>
                            <p>Pays ${dicePays.eights}</p>
                        </div>
                    </div>
                    <hr className={styles.moreBetsDivider} />
                    <div className={styles['moreBets-line']}>
                        <p>Hop 9's</p>
                        <div className={styles.morePays}>
                            <p>Pays ${dicePays.nines}</p>
                        </div>
                    </div>
                    <hr className={styles.moreBetsDivider} />
                    <div className={styles['moreBets-line']}>
                        <p>Hop 10's</p>
                        <div className={styles.morePays}>
                            <p>Pays ${dicePays.tens}</p>
                        </div>
                    </div>
                    <hr className={styles.moreBetsDivider} />
                    <div className={styles['moreBets-line']}>
                        <p>Hop 4's & 10's</p>
                        <div className={styles.morePays}>
                            <p>Pays ${dicePays.foursTens}</p>
                        </div>
                    </div>
                    <hr className={styles.moreBetsDivider} />
                    <div className={styles['moreBets-line']}>
                        <p>Hop 5's & 9's</p>
                        <div className={styles.morePays}>
                            <p>Pays ${dicePays.fivesNines}</p>
                        </div>
                    </div>
                    <hr className={styles.moreBetsDivider} />
                    <div className={styles['moreBets-line']}>
                        <p>Hop 6's & 8's</p>
                        <div className={styles.morePays}>
                            <p>Pays ${dicePays.sixesEights}</p>
                        </div>
                    </div>
                    <hr className={styles.moreBetsDivider} />
                    <div className={styles['moreBets-line']}>
                        <p>Hop Hardways</p>
                        <div className={styles.morePays}>
                            <p>Pays ${dicePays.hardWays}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HopBets
