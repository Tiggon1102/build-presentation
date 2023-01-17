import React from 'react';
import PageSkeleton from '../components/PageSkeleton.js';
import ContentBox from '../components/ContentBox.js';
import Login from '../components/Login.js';
import Signup from '../components/Signup.js';

const Page = ({ route, texts }) => {
	return (
		<PageSkeleton route={route} texts={texts}>
			<ContentBox>
				<Login route={route} texts={texts} />
			</ContentBox>
			<ContentBox>
				<Signup route={route} texts={texts} />
			</ContentBox>
		</PageSkeleton>
	);
};

export default Page;
