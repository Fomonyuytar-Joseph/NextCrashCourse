import React from 'react'
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <div>
        <h1 className={styles.title}>
            <span>Joseph</span> News 
        </h1>
        <p className={styles.description}>
            up to date with lastest dev news
        </p>
    </div>
  )
}

export default Header