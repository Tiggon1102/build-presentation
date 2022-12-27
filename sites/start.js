import React from 'react';
import PageSkeleton from '../components/PageSkeleton.js';
import ContentBox from '../components/ContentBox.js';

const Page = ({ route, texts }) => {
	return (
		<PageSkeleton route={route} texts={texts}>
			<ContentBox>
				<button onClick={() => route('presentation')}>Start</button>
			</ContentBox>
		</PageSkeleton>
	);
};

export default Page;
