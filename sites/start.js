import React from 'react';
import PageSkeleton from '../components/PageSkeleton.js';
import ContentBox from '../components/ContentBox.js';
import Introduction from '../components/Introduction.js';

const Page = ({ route, texts }) => {
	return (
		<PageSkeleton route={route} texts={texts}>
			<ContentBox>
				<Introduction route={route} texts={texts} />
			</ContentBox>
		</PageSkeleton>
	);
};

export default Page;
