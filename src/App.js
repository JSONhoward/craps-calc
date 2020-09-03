import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import styles from './App.module.scss'
import Home from './components/Home/Home'
import PlaceBets from './components/PlaceBets/PlaceBets'
import PropBets from './components/PropBets/PropBets';
import HopBets from './components/HopBets/HopBets';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const App = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    const handleClose = event => {
        const id = event.target.id
        if(menuToggle && id !== 'menu' && id !== 'placebets' && id !== 'propbets' && id !== 'hopbets') {
            setMenuToggle(!menuToggle)
        }
    }

    const handleMenuToggle = () => {
        setMenuToggle(!menuToggle)
    }

    return (
        <div onClick={(event) => handleClose(event)} className={styles.App}>
            <Router>
            <NavBar handleMenuToggle={handleMenuToggle} menuToggle={menuToggle} />
                <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/placebets' component={PlaceBets} />
                        <Route path='/propbets' component={PropBets} />
                        <Route path='/hopbets' component={HopBets} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App
