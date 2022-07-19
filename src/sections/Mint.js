import Button from '../components/Button';

const Mint = () => {
	return (
		<section className="mt-16 flex flex-col item-center justify-center">
			<h1 className="text-7xl font-bold font-forHeading">
				Mint Your <span className="dark:text-red-300 text-red-900">NFT</span>
			</h1>
			<h3 className="text-4xl my-3">On Rinkeby Testnet</h3>
			<p className="text-gray-600 mb-8">
				Randomized picture powered by hashlip
			</p>
			<Button className="text-5xl px-10 py-5 bg-blue-900 text-white mt-20">
				Mint
			</Button>
		</section>
	);
};

export default Mint;
