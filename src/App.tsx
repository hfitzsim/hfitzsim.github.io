import { MantineProvider } from '@mantine/core';
import { theme } from '@/styles';
import { useState } from 'react';
import {
	Header,
	Footer,
	BachItinerary,
	BridalShowerJeopardy,
	EventTracker,
	MountainMatrix,
	SaveADog,
	TheSill,
	YouGotThis,
} from '@/components';
import { Home } from '@/routes';

const App = () => {
	const [currentView, setCurrentView] = useState('home');
	return (
		<MantineProvider theme={theme}>
			<div id="blob"></div>
			<div id="blob2"></div>
			<Header nav={setCurrentView} />
			{currentView === 'home' && <Home nav={setCurrentView} />}
			{currentView === 'Event Tracker' && <EventTracker />}
			{currentView === 'Mountain Matrix' && <MountainMatrix />}
			{currentView === 'Save A Dog' && <SaveADog />}
			{currentView === 'The Sill' && <TheSill />}
			{currentView === 'You Got This' && <YouGotThis />}
			{currentView === 'Bach Itinerary' && <BachItinerary />}
			{currentView === 'Bridal Shower Jeopardy' && <BridalShowerJeopardy />}
			<Footer />
		</MantineProvider>
	);
};

export { App };
