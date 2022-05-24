import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.dataContainer}>
        <div className={styles.header}>
        👋 Hey there!
        </div>

      <div className={styles.bio}>
        <ConnectButton className={styles.waveButton}/>
      </div>
      </div>
    </div>
  )
}