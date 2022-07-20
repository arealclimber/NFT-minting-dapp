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
import {
	chain,
	configureChains,
	createClient,
	WagmiConfig,
	defaultChains,
	Chain,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const avalancheChain = {
	id: 43_114,
	name: 'Avalanche',
	network: 'avalanche',
	nativeCurrency: {
		decimals: 18,
		name: 'Avalanche',
		symbol: 'AVAX',
	},
	rpcUrls: {
		default: 'https://api.avax.network/ext/bc/C/rpc',
	},
	blockExplorers: {
		default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
	},
	testnet: false,
};

const { chains, provider } = configureChains(
	[chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
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
