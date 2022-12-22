import React from 'react';

import Footer from './Footer';
import PageContent from './PageContent';

import { getMyStyle } from './PageSkeleton.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ route, children, texts }) => {
	const { style } = useStyle(getMyStyle);
	return (
		<>
			<style jsx global>{`
				body {
					margin: 0;
				}
			`}</style>
			<div style={style.container}>
				<PageContent>{children}</PageContent>
				<Footer route={route} texts={texts} />
			</div>
		</>
	);
};

export default Component;
