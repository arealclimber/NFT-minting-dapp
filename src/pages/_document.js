import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function PageDocument() {
	return (
		<Html>
			<Head />
			<body className="bg-white text-blue-900 dark:bg-black dark:text-blue-200">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
