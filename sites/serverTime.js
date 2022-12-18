import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/PageSkeleton.js';
import ContentBox from '../components/ContentBox.js';
import TimeDisplay from '../components/TimeDisplay.js';
import TimestampButton from '../components/TimestampButton.js';
import { getServerTime } from '../fetchers/api.js';
import useLocalStorage from '../hooks/useLocalStorage.js';

const Page = ({ route, texts }) => {
	const [currentVisit, setCurrentVisit] = useState('');
	const [lastVisit, setLastVisit] = useState('');
	useLocalStorage('last-visit-server', lastVisit, setLastVisit);

	const fetchServerTime = async () => {
		const currentServerTime = (await getServerTime()).time;
		setCurrentVisit(currentServerTime);
	};

	useEffect(() => {
		fetchServerTime();
	}, []);

	return (
		<PageSkeleton route={route} texts={texts}>
			<ContentBox>
				<TimeDisplay label={texts['current-visit-server-label']} value={currentVisit} />
				<TimeDisplay label={texts['last-visit-label']} value={lastVisit} />
				<TimestampButton texts={texts} onClick={() => setLastVisit(currentVisit)} />
			</ContentBox>
		</PageSkeleton>
	);
};

export default Page;
