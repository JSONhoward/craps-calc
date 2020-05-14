import React from 'react'
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
    return (
        <div className={styles.App}>
            <Router>
            <NavBar />
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
