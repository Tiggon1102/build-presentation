import React from 'react';
import { getMyStyle } from './ContentBox.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ children }) => {
	const { style } = useStyle(getMyStyle);
	return <div style={style.outsideContainer}>{children}</div>;
};

export default Component;
