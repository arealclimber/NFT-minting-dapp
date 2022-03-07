require("dotenv").config()

const main = async() => {
    const nftContractFactory = await ethers.getContractFactory('CreateNFT')
    const nftContract = await nftContractFactory.deploy(100, 6666, 6666, 100, process.env.INIT_BASE_URI, process.env.INIT_NOT_REVEALED_URI)
    await nftContract.deployed()
  console.log("Contract deployed to: ", nftContract.address)
  }
  const runMain = async() => {
    try {
      await main()
      process.exit(0)
    } catch(error) {
      console.log(error)
      process.exit(1)
    }
  }
  runMain()