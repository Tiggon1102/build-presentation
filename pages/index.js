import React, { useEffect } from 'react';

import useRouting from '../hooks/useRouting';
import useTexts from '../hooks/useTexts';

import StartPage from '../sites/start';
import LoginPage from '../sites/login';
import PresentationPage from '../sites/presentation';
import ImprintPage from '../sites/imprint';
import ConditionsPage from '../sites/conditions';

const App = () => {
	// routing
	const { path, route } = useRouting();
	useEffect(() => route('start'), []);

	// locales
	const { texts } = useTexts();

	// application state
	// ...here we can put state shared between pages

	// routes
	return (
		<>
			{path === 'start' && <StartPage route={route} texts={texts} />}
			{path === 'login' && <LoginPage route={route} texts={texts} />}
			{path === 'presentation' && <PresentationPage route={route} texts={texts} />}
			{path === 'imprint' && <ImprintPage />}
			{path === 'conditions' && <ConditionsPage />}
		</>
	);
};

export default App;
