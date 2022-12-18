import React from 'react';

import { useRouter } from 'next/router';

import { getMyStyle } from './Header.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ route }) => {
	const router = useRouter();
	const { style } = useStyle(getMyStyle);

	return (
		<div style={style.container} id="header">
			<img id="client" style={style.icon} src={router.pathname + 'customer.png'} onClick={() => route('clientTime')} alt="customer" />
			<img id="server" style={style.icon} src={router.pathname + 'server.png'} onClick={() => route('serverTime')} alt="server" />
		</div>
	);
};

export default Component;
