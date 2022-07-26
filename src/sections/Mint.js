import Button from '../components/Button';
import Connector from '../components/Connector';
import { nftContractAddress } from '../config/config';
import NFT from '../config/NFT.json';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import {
	useAccount,
	useContractRead,
	useContractWrite,
	useWaitForTransaction,
} from 'wagmi';

// FIXME: Clicking Sign-in will destroy the layout
const contractConfig = {
	addressOrName: nftContractAddress,
	contractInterface: NFT,
};

const Mint = () => {
	const [totalMinted, setTotalMinted] = useState(0);
	const { isConnected } = useAccount();
	const {
		data: mintData,
		write: mintNFT,
		isLoading: isMintLoading,
		isSuccess: isMintStarted,
		error: mintError,
	} = useContractWrite({
		...contractConfig,
		functionName: 'mintNFT',
		args: 1,
		overrides: {
			value: ethers.utils.parseEther('0.01'),
		},
	});

	const { data: totalSupplyData } = useContractRead({
		...contractConfig,
		functionName: 'totalSupply',
		watch: true,
	});

	const { isSuccess: txSuccess, error: txError } = useWaitForTransaction({
		hash: mintData?.hash,
	});

	useEffect(() => {
		if (totalSupplyData) {
			setTotalMinted(totalSupplyData.toNumber());
		}
	}, [totalSupplyData]);

	const isMinted = txSuccess;

	return (
		<section className="mt-10 flex flex-col justify-center">
			<div className="flex justify-center mb-10 mx-5">
				<Connector />
			</div>

			<div className="flex flex-col items-center justify-center">
				<h1 className="text-7xl font-bold font-forHeading">
					Mint Your{' '}
					<span className="dark:text-blue-200 text-red-900">NFT</span>
				</h1>
				<h3 className="text-4xl my-3">On Rinkeby Testnet</h3>
				<p className="text-gray-600 mb-8">0.01Ξ each</p>
			</div>
			<div className="flex flex-col items-center justify-center">
				<p className="text-2xl my-3">
					{' '}
					<span className="text-teal-700">{totalMinted}</span> minted so
					far!
				</p>
				{mintError && (
					<p className="dark:text-red-400 text-red-700">
						Error: {mintError.message}
					</p>
				)}
				{txError && (
					<p className="dark:text-red-400 text-red-700">
						Error: {txError.message}
					</p>
				)}

				{isMinted ? (
					<div className="">
						<p className="text-2xl pt-5 dark:text-green-500 text-green-800">
							Success!
						</p>

						<p className="text-2xl pt-5">
							View on{' '}
							<a
								href={`https://rinkeby.etherscan.io/tx/${mintData?.hash}`}
								className="hover:text-blue-500"
							>
								Rinkeby Scan
							</a>
						</p>
						<p className="text-2xl pt-5">
							View on{' '}
							<a
								href={`https://testnets.opensea.io/assets/rinkeby/0x38a91753a4064d926074907bb5671f03afc4539c/${
									totalMinted - 1
								}`}
								className="hover:text-blue-500"
							>
								Opensea
							</a>
						</p>
					</div>
				) : isMintStarted ? (
					<p className="text-2xl pt-5 dark:text-green-500 text-green-800">
						Minting...
					</p>
				) : isMintLoading ? (
					<p className="text-2xl pt-5 dark:text-green-500 text-green-800">
						Waiting for approval
					</p>
				) : (
					<p></p>
				)}

				<Button
					onClick={() => mintNFT()}
					className="text-5xl px-20 py-5 bg-blue-900 text-white mt-20"
				>
					Mint
				</Button>
			</div>
		</section>
	);
};

export default Mint;
