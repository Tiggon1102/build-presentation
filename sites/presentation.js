import React from 'react';
import PageSkeleton from '../components/PageSkeleton.js';
import ContentBox from '../components/ContentBox.js';
import PresentationEditor from '../components/PresentationEditor.js';

const Page = ({ route, texts }) => {
	return (
		<PageSkeleton route={route} texts={texts}>
			<ContentBox>
				<PresentationEditor texts={texts} />
			</ContentBox>
		</PageSkeleton>
	);
};

export default Page;
