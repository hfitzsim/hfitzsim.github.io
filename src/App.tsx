import { MantineProvider } from '@mantine/core';
import { theme } from '@/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root, ErrorPage, Home, Bio, Projects, Contact } from '@/routes';
import { ProjectDetail } from '@/components';

const router = createBrowserRouter([
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
				path: '/bio',
				element: <Bio />,
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
