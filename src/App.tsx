import { MantineProvider } from '@mantine/core';
import { theme } from '@/styles';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Root, ErrorPage, Home, Projects, Contact } from '@/routes';
import { ProjectDetail } from '@/components';

const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/projects',
				element: <Projects />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/projects/:projectId',
				element: <ProjectDetail />,
			},
		],
	},
]);

const App = () => {
	return (
		<MantineProvider theme={theme}>
			<RouterProvider router={router} />
		</MantineProvider>
	);
};

export { App };
