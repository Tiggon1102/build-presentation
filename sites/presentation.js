import React, { useState } from 'react';
import PageSkeleton from '../components/PageSkeleton.js';
import ContentBox from '../components/ContentBox.js';
import TopicInput from '../components/TopicInput.js';
import PresentationEditor from '../components/PresentationEditor.js';
import Results from '../components/Results.js';
import usePresentation from '../hooks/usePresentation.js';

const Page = ({ route, texts }) => {
	const [currentStep, setCurrentStep] = useState('topic');
	const { presentation, generate, updateSlide } = usePresentation(setCurrentStep);

	return (
		<PageSkeleton route={route} texts={texts}>
			<ContentBox>
				{currentStep === 'topic' && <TopicInput generate={generate} texts={texts} />}
				{currentStep === 'edit' && <PresentationEditor texts={texts} presentation={presentation} updateSlide={updateSlide} setCurrentStep={setCurrentStep} />}
				{currentStep === 'result' && <Results texts={texts} />}
			</ContentBox>
		</PageSkeleton>
	);
};

export default Page;
