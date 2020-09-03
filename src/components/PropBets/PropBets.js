import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import styles from './PropBets.module.scss'
import {
    twoOrTwelveHighSide,
    threeOrElevenHighSide,
    highSide,
    lowSide,
    hornHighSide,
    byThree,
    bySeven,
    byFifteen,
    byThirty
} from './utils/payouts'
import dice1 from '../../images/dice1.png'
import dice2 from '../../images/dice2.png'
import dice5 from '../../images/dice5.png'
import dice6 from '../../images/dice6.png'

const PropBets = () => {
    const [bet, setBet] = useState(0)
    const [two, setTwo] = useState(0)
    const [three, setThree] = useState(0)
    const [eleven, setEleven] = useState(0)
    const [twelve, setTwelve] = useState(0)
    const [horn, setHorn] = useState(0)
    const [crapSelect, setCrapSelect] = useState({})
    const [anyCrap, setAnyCrap] = useState(0)
    const [hornHigh12, setHornHigh12] = useState(0)
    const [hornHigh2, setHornHigh2] = useState(0)
    const [hornHigh3, setHornHigh3] = useState(0)
    const [hornHigh11, setHornHigh11] = useState(0)
    const [crapsEleven, setCrapsEleven] = useState(0)

    const handleBet = event => {
        const bet = Math.abs(+event.target.value)

        if (bet < 1e4) {
            setBet(bet)
            setCrapSelect({})
        }
    }

    const handleButton = event => {
        const roll = event.target.name

        setCrapSelect({ [roll]: true })
        getPayouts(Number(roll))
    }

    const getPayouts = (roll) => {
        let byThreeResult = byThree(bet),
        bySevenResult = bySeven(bet),
        byFifteenResult = byFifteen(bet),
        byThirtyResult = byThirty(bet),
        highSideResult = highSide(bet),
        hornHighSideResult = hornHighSide(bet),
        twoOrTwelveHighSideResult = twoOrTwelveHighSide(bet),
        threeOrElevenHighSideResult = threeOrElevenHighSide(bet),
        lowSideResult = lowSide(bet)

        if (roll === 2) {
            setTwo(byThirtyResult)
            setThree(0)
            setEleven(0)
            setTwelve(0)
            setAnyCrap(bySevenResult)
            setHorn(hornHighSideResult)
            setHornHigh2(twoOrTwelveHighSideResult)
            setHornHigh3(highSideResult)
            setHornHigh11(highSideResult)
            setHornHigh12(highSideResult)
            setCrapsEleven(byThreeResult)
        } else if (roll === 3) {
            setTwo(0)
            setThree(byFifteenResult)
            setEleven(0)
            setTwelve(0)
            setAnyCrap(bySevenResult)
            setHorn(byThreeResult)
            setHornHigh2(lowSideResult)
            setHornHigh3(threeOrElevenHighSideResult)
            setHornHigh11(lowSideResult)
            setHornHigh12(lowSideResult)
            setCrapsEleven(byThreeResult)
        } else if (roll === 11) {
            setTwo(0)
            setThree(0)
            setEleven(byFifteenResult)
            setTwelve(0)
            setAnyCrap(0)
            setHorn(byThreeResult)
            setHornHigh2(lowSideResult)
            setHornHigh3(lowSideResult)
            setHornHigh11(threeOrElevenHighSideResult)
            setHornHigh12(lowSideResult)
            setCrapsEleven(bySevenResult)
        } else {
            setTwo(0)
            setThree(0)
            setEleven(0)
            setTwelve(byThirtyResult)
            setAnyCrap(bySevenResult)
            setHorn(hornHighSideResult)
            setHornHigh2(highSideResult)
            setHornHigh3(highSideResult)
            setHornHigh11(highSideResult)
            setHornHigh12(twoOrTwelveHighSideResult)
            setCrapsEleven(byThreeResult)
        }
    }

    return (
        <div className={styles.PropBets}>
            <Helmet>
                <title>Craps Calc | Prop Bets</title>
            </Helmet>
            <input onChange={handleBet} maxLength="5" value={bet} type='number' name='place' id='place' />
            <div id='crapNumbers' className={styles.crapNumbers}>
                <div className={styles.crapNumbersLeft}>
                    <div id='2' className={crapSelect['2'] ? styles['craps2-selected'] : styles.craps2}>
                        <img alt='die 1' src={dice1} />
                        <img alt='die 1' src={dice1} />
                    </div>
                    <button onClick={handleButton} name='2' type='button'>select</button>
                    <div id='3' className={crapSelect['3'] ? styles['craps3-selected'] : styles.craps3}>
                        <img alt='die 1' src={dice1} />
                        <img alt='die 2' src={dice2} />
                    </div>
                    <button onClick={handleButton} name='3' type='button'>select</button>
                </div>
                <div className={styles.crapNumbersRight}>
                    <div id='11' className={crapSelect['11'] ? styles['craps11-selected'] : styles.craps11}>
                        <img alt='die 5' src={dice5} />
                        <img alt='die 6' src={dice6} />
                    </div>
                    <button onClick={handleButton} name='11' type='button'>select</button>
                    <div id='12' className={crapSelect['12'] ? styles['craps12-selected'] : styles.craps12}>
                        <img alt='die 6' src={dice6} />
                        <img alt='die 6' src={dice6} />
                    </div>
                    <button onClick={handleButton} name='12' type='button'>select</button>
                </div>
            </div>
            <div className={styles.propsBox}>
                <div className={styles.propPays}>
                    <div className={styles.twoTwelve}>
                        <div className={[styles.crapTwoTwelve, styles.noBorderBottom, styles.noBorderRight].join(' ')}>
                            <div className={styles.dice2}>
                                <img alt='die 1' src={dice1} />
                                <img alt='die 1' src={dice1} />
                            </div>
                            <p className={styles['propPays-odds']}>30 to 1</p>
                            <p className={styles.pays2}>Pays</p>
                            <p className={styles.pays2}>${two}</p>
                        </div>
                        <div className={[styles.crapTwoTwelve, styles.noBorderBottom].join(' ')}>
                            <div className={styles.dice12}>
                                <img alt='die 6' src={dice6} />
                                <img alt='die 6' src={dice6} />
                            </div>
                            <p className={styles['propPays-odds']}>30 to 1</p>
                            <p className={styles.pays12}>Pays</p>
                            <p className={styles.pays12}>${twelve}</p>
                        </div>
                    </div>
                    <div className={styles.threeEleven}>
                        <div className={[styles.crapThreeEleven, styles.noBorderRight].join(' ')}>
                            <p className={styles['propPays-odds']}>15 to 1</p>
                            <div className={styles.dice3}>
                                <img alt='die 1' src={dice1} />
                                <img alt='die 2' src={dice2} />
                            </div>
                            <p className={styles.pays2}>${three}</p>
                            <p className={styles.pays2}>Pays</p>
                        </div>
                        <div className={styles.crapThreeEleven}>
                            <p className={styles['propPays-odds']}>15 to 1</p>
                            <div className={styles.dice11}>
                                <img alt='die 5' src={dice5} />
                                <img alt='die 6' src={dice6} />
                            </div>
                            <p className={styles.pays12}>$ {eleven}</p>
                            <p className={styles.pays12}>Pays</p>
                        </div>
                    </div>
                    <div className={styles.horn}>
                        <p>HORN BET</p>
                        <p>Pays</p>
                        <p>${horn}</p>
                    </div>
                </div>
            </div>
            <div className={styles.anyCrap}>
                <p>Any Craps</p>
                <p>Pays ${anyCrap}</p>
                <p className={styles.oddsLeft}>7 to 1</p>
                <p className={styles.oddsRight}>7 to 1</p>
            </div>
            <div className={styles.moreBets}>
                <div className={styles.crapsEleven}>
                    <p>C & E</p>
                    <div className={styles.morePays}>
                        <p>Pays ${crapsEleven}</p>
                    </div>
                </div>
                <hr className={styles.moreBetsDivider} />
                <div className={styles.hornHigh2}>
                    <p>Horn High 2</p>
                    <div className={styles.morePays}>
                        <p>Pays ${hornHigh2}</p>
                    </div>
                </div>
                <hr className={styles.moreBetsDivider} />
                <div className={styles.hornHigh3}>
                    <p>Horn High 3</p>
                    <div className={styles.morePays}>
                        <p>Pays ${hornHigh3}</p>
                    </div>
                </div>
                <hr className={styles.moreBetsDivider} />
                <div className={styles.hornHigh11}>
                    <p>Horn High 11</p>
                    <div className={styles.morePays}>
                        <p>Pays ${hornHigh11}</p>
                    </div>
                </div>
                <hr className={styles.moreBetsDivider} />
                <div className={styles.hornHigh12}>
                    <p>Horn High 12</p>
                    <div className={styles.morePays}>
                        <p>Pays ${hornHigh12}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropBets
