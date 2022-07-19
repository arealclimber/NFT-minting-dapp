import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import Header from '../sections/Header';
import Mint from '../sections/Mint';

export default function Home() {
	return (
		<div>
			<Mint />
		</div>
	);
}
