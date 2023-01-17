import React, { useState } from 'react';

import { getMyStyle } from './Signup.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ route, texts }) => {
	const { style } = useStyle(getMyStyle);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signup = async () => {
		console.log('signup');
	};

	return (
		<div style={style.contentContainer}>
			<div style={style.preContent}>{texts['signup-text']}</div>
			<div style={style.content}>
				<input type="text" placeholder={'Email'} value={email} style={style.input} onChange={(event) => setEmail(event.target.value)} />
				<input type="password" placeholder={'Passwort'} value={password} style={style.input} onChange={(event) => setPassword(event.target.value)} />
				<button style={style.button} onClick={signup}>
					{texts['signup-button']}
				</button>
			</div>
		</div>
	);
};

export default Component;
