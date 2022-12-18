import React from 'react';

import { useRouter } from 'next/router';

import { getMyStyle } from './Footer.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ route, texts }) => {
	const router = useRouter();
	const { style } = useStyle(getMyStyle);

	return (
		<div style={style.container} id="footer">
			<div style={style.leftBar}>
				<a href="https://www.facebook.com/profile.php?id=100083166580642" style={style.link}>
					<img src={router.pathname + 'fb.png'} style={style.icon} alt="facebook" />
				</a>
			</div>
			<div style={style.rightBar}>
				<a onClick={() => route('conditions')} style={style.link}>
					{texts['footer-conditions-link']}
				</a>
				<a onClick={() => route('imprint')} style={style.link}>
					{texts['footer-imprint-link']}
				</a>
			</div>
		</div>
	);
};

export default Component;
