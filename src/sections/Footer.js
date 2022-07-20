import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="py-6 text-center font-forHeading text-sm">
			<span className="font-bold text-lg mr-2 hover:cursor-pointer">
				<Link href="https://github.com/arealclimber/NFT-minting-dapp">
					<a>Lumii</a>
				</Link>
			</span>
			&copy; {new Date().getFullYear()} All Rights Reversed
		</footer>
	);
};

export default Footer;
