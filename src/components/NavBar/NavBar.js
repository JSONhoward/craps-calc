import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './NavBar.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    const handleMenuToggle = () => {
        setMenuToggle(!menuToggle)
    }

    return (
        <div className={styles.NavBar}>
            <div className='logo'>
                <h1>Craps Calc</h1>
            </div>
            <div className={styles.hamburger} onClick={handleMenuToggle}>
                <GiHamburgerMenu size={"2rem"} color={'white'} />
            </div>
            {menuToggle ? <nav id='menu' className={styles.menu}>
                <Link onClick={handleMenuToggle} to='/'>Home</Link>
                <hr />
                <Link onClick={handleMenuToggle} to='/placebets'>Place Bets</Link>
                <hr />
                <Link onClick={handleMenuToggle} to='/hopbets'>Hop Bets</Link>
                <hr />
                <Link onClick={handleMenuToggle} to='/propbets'>Prop Bets</Link>
            </nav> : <></>}
        </div>
    )
}

export default NavBar
