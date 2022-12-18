import React, { useEffect } from 'react';

import useRouting from '../hooks/useRouting';
import useTexts from '../hooks/useTexts';

import ClientTimePage from '../sites/clientTime';
import ServerTimePage from '../sites/serverTime';
import ImprintPage from '../sites/imprint';
import ConditionsPage from '../sites/conditions';

const App = () => {
	// routing
	const { path, route } = useRouting();
	useEffect(() => route('clientTime'), []);

	// locales
	const { texts } = useTexts();

	// application state
	// ...here we can put state shared between pages

	// routes
	return (
		<>
			{path === 'clientTime' && <ClientTimePage route={route} texts={texts} />}
			{path === 'serverTime' && <ServerTimePage route={route} texts={texts} />}
			{path === 'imprint' && <ImprintPage />}
			{path === 'conditions' && <ConditionsPage />}
		</>
	);
};

export default App;
