import * as React from "react";
import { ethers } from "ethers";
import styles from '../styles/Home.module.css'

export default function WaveApp() {

  const wave = () => {
    
  }
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.dataContainer}>
        <div className="header">
          👋🏻 Hey there!
        </div>

        <div className={styles.bio}>
          Connect Wallet
        </div>

        <button className={styles.waveButton} onClick={wave}>
          Wave at me
        </button>
      </div>
    </div>
  )
}
