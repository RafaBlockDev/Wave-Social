const { getCreate2Address } = require("@ethersproject/address")
const { hexStripZeros } = require("@ethersproject/bytes")

// Hardhat Runtime Environment = hre

const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("🚀 Contract deployed to: ", waveContract.address);
    console.log("👻 Contract deployed by: ", owner.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    // Ejecuta el wave
    await waveTxn.wait();
    // Después de ejecutar waveTxn otra vez mostramos cuantos waves tenemos
    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();
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