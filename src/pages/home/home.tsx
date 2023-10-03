import styles from  './home.module.css'


const Home=()=>{
    return(
        <div className={styles.container}> 
    <div className={styles.item}>
      <h1 className={styles.title}>Grow Your Business With Us</h1>
  
      <p className={styles.description}>
  
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      <br />incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      <br />nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
     
      
      <button  className={styles.btn}>See our works</button>
    </div>
    <div className={styles.item}>
      <img src="src/assets/hero.png" alt='image is here' className={styles.img}></img>
    </div>
   </div>
    )
}

export default Home;