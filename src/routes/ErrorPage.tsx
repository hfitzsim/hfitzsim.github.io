import { useRouteError } from 'react-router-dom';
import { Container } from '@mantine/core';

const ErrorPage = () => {
	const error: any = useRouteError();

	return (
		<Container>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occured.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</Container>
	);
};

export { ErrorPage };
