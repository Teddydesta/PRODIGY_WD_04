import React from "react"

import styles from './home.module.css'

const Home=()=>{
    return(

        <div className={styles.container}>
            <h1>Home</h1>
            <div className={styles.imgContainer}>
                <img src="https://user-images.githubusercontent.com/78824988/177599683-5cddada6-4bf7-48f0-9e9f-cab98296e802.png" alt="Image Here" />

            </div>

        

        </div>
    );
}

export default Home;