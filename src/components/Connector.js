import { ConnectButton } from '@rainbow-me/rainbowkit';

const Connector = () => {
	return (
		<div className="flex justify-center mb-10 mx-5">
			<ConnectButton
				label="Sign in"
				showBalance={{
					smallScreen: false,
					largeScreen: true,
				}}
				accountStatus={{
					smallScreen: 'avatar',
					largeScreen: 'full',
				}}
			/>
		</div>
	);
};

export default Connector;
