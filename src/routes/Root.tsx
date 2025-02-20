import { AppShell, Container } from '@mantine/core';
import { useHeadroom, useMediaQuery } from '@mantine/hooks';
import { Header } from '@/components';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Root = () => {
	const pinned = useHeadroom({ fixedAt: 120 });
	const isXs = useMediaQuery('(max-width: 900px)');
	const location = useLocation();
	return (
		<AppShell
			header={{ height: location.pathname !== '/' ? 90 : 0, collapsed: !pinned, offset: false }}
			padding={isXs ? 0 : 'md'}
			bg={'isabelline'}
		>
			{location.pathname !== '/' && (
				<AppShell.Header bg="isabelline" withBorder={false} py={20} px={isXs ? 'xs' : 'xl'}>
					<Header size={isXs} />
				</AppShell.Header>
			)}

			<AppShell.Main pt={location.pathname !== '/' ? 90 : 10}>
				<Container fluid px={isXs ? 'xs' : 'xl'} mb="xl">
					<Outlet context={{ isXs }} />
				</Container>
			</AppShell.Main>
		</AppShell>
	);
};

export { Root };
