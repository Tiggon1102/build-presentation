import React, { useEffect } from 'react';

import useRouting from '../hooks/useRouting';
import useTexts from '../hooks/useTexts';

import PresentationPage from '../sites/presentation';
import ImprintPage from '../sites/imprint';
import ConditionsPage from '../sites/conditions';

const App = () => {
	// routing
	const { path, route } = useRouting();
	useEffect(() => route('presentation'), []);

	// locales
	const { texts } = useTexts();

	// application state
	// ...here we can put state shared between pages

	// routes
	return (
		<>
			{path === 'presentation' && <PresentationPage route={route} texts={texts} />}
			{path === 'imprint' && <ImprintPage />}
			{path === 'conditions' && <ConditionsPage />}
		</>
	);
};

export default App;
