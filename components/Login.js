import React, { useState } from 'react';

import { getMyStyle } from './Login.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ route, texts }) => {
	const { style } = useStyle(getMyStyle);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = async () => {
		console.log('login');
	};

	return (
		<div style={style.contentContainer}>
			<div style={style.content}>
				<input style={style.input} type="text" placeholder={'Email'} value={email} onChange={(event) => setEmail(event.target.value)} />
				<input style={style.input} type="password" placeholder={'Passwort'} value={password} onChange={(event) => setPassword(event.target.value)} />
				<button style={style.button} onClick={login}>
					{texts['login-button']}
				</button>
			</div>
		</div>
	);
};

export default Component;
