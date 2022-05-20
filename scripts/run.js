const { getCreate2Address } = require("@ethersproject/address")
const { hexStripZeros } = require("@ethersproject/bytes")

// Hardhat Runtime Environment = hre

const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("🚀 Contract deployed to: ", waveContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();