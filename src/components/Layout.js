import React from 'react';
import Head from 'next/head';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Mint NFT DAPP</title>
				<meta name="description" content="NFT minting dapp" />
			</Head>

			<div className="min-h-screen flex flex-col">
				<Header />
				<main className="flex-grow">{children}</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
