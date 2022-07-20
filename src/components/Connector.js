import { ConnectButton } from '@rainbow-me/rainbowkit';

const Connector = () => {
	return (
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
	);
};

export default Connector;
