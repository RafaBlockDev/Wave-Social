import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';
import styles from "../styles/Home.module.css";

export default function App() {

  const wave = async () => {
    try {
      const { ethereum } = window;
    
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
    
      let count = await wavePortalContract.getTotalWaves();
      console.log("Retrieved total wave count...", count.toNumber()); 
    } else {
      console.log("Ethereum object does not exist!")
    }

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