import * as React from "react";
// import { ethers } from "ethers";
import styles from '../styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function WaveApp() {

  const wave = () => {
    
  }
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.dataContainer}>
        <div className="header">
          👋🏻 Hey there!
        </div>

        <ConnectButton/>

      </div>
    </div>
  )
}
