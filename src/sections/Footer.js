import React from 'react';

const Footer = () => {
	return (
		<footer className="py-6 text-center font-forHeading text-sm">
			<span className="font-bold text-lg mr-2">Lumii</span>&copy;{' '}
			{new Date().getFullYear()} All Rights Reversed
		</footer>
	);
};

export default Footer;
