import axios from "axios";
import React, { useState } from "react";

import styles from './IndexScreen.module.css'

import Logo from '../../logo.svg'

const IndexScreen = () => {
    const [test, setTest] = useState({});

    axios.get("https://inteli-blockchain-campus-party.herokuapp.com/").then((value) => {
        setTest({ "resposta da api": value.data });
    });

    return <main className={styles.Body}>
        <img src={Logo} alt="Health Vault logo" />
        <div>
            <span>Everything you doctor needs to know about you. Where and when you most need it.</span>
            <div>
                <button className={styles.FirstButton}>I want to add my records</button>
                <button className={styles.SecondButton}>I want to see someone's record</button>
            </div>
        </div>

    </main>
}

export default IndexScreen