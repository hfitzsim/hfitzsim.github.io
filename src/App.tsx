import { MantineProvider } from '@mantine/core';
import { theme } from '@/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root, ErrorPage, About, Projects, Contact } from '@/routes';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/projects',
				element: <Projects />,
			},
			{
				path: '/contact',
				element: <Contact />,
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
