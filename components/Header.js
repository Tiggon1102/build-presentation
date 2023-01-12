import React from 'react';

import { getMyStyle } from './Header.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ route, texts }) => {
	const { style } = useStyle(getMyStyle);

	return (
		<div style={style.container} id="footer">
			<div style={style.leftBar}>
				<img src="robot.png" alt="robot" style={style.startPageIcon} onClick={() => route('start')} />
			</div>
			<div style={style.rightBar}>
				<a onClick={() => route('login')} style={style.loginLink}>
					{texts['login-link']}
				</a>
			</div>
		</div>
	);
};

export default Component;
