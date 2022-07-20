import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';
import '@rainbow-me/rainbowkit/styles.css';

import {
	darkTheme,
	getDefaultWallets,
	lightTheme,
	RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
	[chain.rinkeby],
	[alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
	appName: 'Mint NFT',
	chains,
});
const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

function MyApp({ Component, pageProps }) {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider
				chains={chains}
				theme={{
					lightMode: lightTheme(),
					darkMode: darkTheme({
						accentColor: '#a8ccff',
						accentColorForeground: '#000000',
						borderRadius: 'large',
						fontStack: 'system',
					}),
				}}
			>
				<ThemeProvider attribute="class">
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

export default MyApp;
