import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';
import styles from "../styles/Home.module.css";
import abi from "../utils/WavePortal.json";

export default function App() {

  const [currentAccount, setCurrectAccount] = useState("");

  const contractAddress = "0x48261af7411c7Fa6c14B5b1DB44FebF5985cBe2f"

  const contractABI = abi.abi;

  const [allWaves, setAllWaves] = useState([]);

  const getAllWaves = async () => {
    try {
      const { ethereum } = window;
    
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

      const waves = await wavePortalContract.getAllWaves();

      let wavesCleaned = [];
      waves.forEach(wave => {
        wavesCleaned.push({
          address: wave.waver,
          timestamp: new Date(wave.timestamp * 1000),
          message: wave.message
        });
      });

      setAllWaves(waveCleaned);
    } else {
      console.log("Ethereum not find")
    }
  } catch (error) {
    console.log(error);
    }
  }

  const wave = async () => {
    try {
      const { ethereum } = window;
    
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
    
      let count = await wavePortalContract.getTotalWaves();
      console.log("Retrieved total wave count...", count.toNumber()); 

      const waveTxn = await wavePortalContract.wave();
      console.log("⛏ Mining...", waveTxn.hash);

      await waveTxn.wait();
      console.log("💰 Mined -- ", waveTxn.hash);

      count = await wavePortalContract.getTotalWaves();
      console.log("👾 Retrieved total wave count... -- ", count.toNumber());
    } else {
      console.log("Ethereum object does not exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (
    <div className={styles.mainContainer}>
      <div className={styles.dataContainer}>
        <div className={styles.header}>
          👋 Hey there!
        </div>

        <div className={styles.bio}>
          I am farza and I worked on self-driving cars so that's pretty cool right? Connect your Ethereum wallet and wave at me!
        </div>

        <button className={styles.waveButton} onClick={wave}>
          Wave at Me
        </button>

        {!currentAccount && (
          <button className={styles.waveButton} onClick={connectWallet}>
            Connect Wallet
          </button>
        )}

        {allWaves.map((wave, index) => {
          return (
            <div key={index} style={{ backgroundColor: "OldLace", marginTop: "16px", padding: "8px" }}>
              <div>Address: {wave.address}</div>
              <div>Time: {wave.timestamp.toString()}</div>
              <div>Message: {wave.message}</div>
            </div>)
        })}
      </div>
    </div>
  );
}