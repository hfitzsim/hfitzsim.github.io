import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import '@mantine/core/styles.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
