import React from 'react'
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <div className={styles.title}>
        <h1>Webs <span>news</span></h1>
        <p className={styles.description}>Keeep up todate with the latest news</p>
    </div>
  )
}

export default Header