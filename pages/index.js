import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from "../styles/Home.module.css";

export default function App() {

  const wave = async () => {
    try {
      const { ethereum } = window;
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.dataContainer}>
        <div className={styles.header}>
        👋 Hi there!
        </div>

        <div className={styles.bio}>
        <ConnectButton className={styles.waveButton}/>
      </div>
      </div>
    </div>
  )
}