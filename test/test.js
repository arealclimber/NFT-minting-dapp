require("dotenv").config()
const { assert } = require('chai')

describe('NFT Contract', async () => {
	let nft
	let nftContractAddress
	let tokenId
	

	// Deploys the NFT contract before each test
	beforeEach('Setup Contract', async () => {
		const NFT = await ethers.getContractFactory('CreateNFT')
		nft = await NFT.deploy(100, 6666, 6666, 100, process.env.INIT_BASE_URI, process.env.INIT_NOT_REVEALED_URI)
		await nft.deployed()
		nftContractAddress = await nft.address
	})

	// Tests address for the NFT contract
	it('Should have an address', async () => {
		assert.notEqual(nftContractAddress, 0x0)
		assert.notEqual(nftContractAddress, '')
		assert.notEqual(nftContractAddress, null)
		assert.notEqual(nftContractAddress, undefined)
	})

	// Tests name for the token of NFT contract
	it('Should have a name', async () => {
		// Returns the name of the token
		const name = await nft.name()

		assert.equal(name, 'NFT creating')
	})

	// Tests symbol for the token of NFT contract
	it('Should have a symbol', async () => {
		// Returns the symbol of the token
		const symbol = await nft.symbol()

		assert.equal(symbol, 'NFTc')
	})

	// Tests for NFT minting function of NFT contract using tokenID of the minted NFT
	it('Should be able to mint NFT', async () => {
		// Mints a NFT
		let txn = await nft.mintNFT(1)
		let tx = await txn.wait()

		// tokenID of the minted NFT
		let event = tx.events[0]
		let value = event.args[2]
		tokenId = value.toNumber()

		assert.equal(tokenId, 0)

		// Mints another NFT
		txn = await nft.mintNFT(1)
		tx = await txn.wait()

		// tokenID of the minted NFT
		event = tx.events[0]
		value = event.args[2]
		tokenId = value.toNumber()

		assert.equal(tokenId, 1)
	})
})