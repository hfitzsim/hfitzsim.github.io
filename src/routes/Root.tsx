import { AppShell, Container } from '@mantine/core';
import { useHeadroom, useMediaQuery } from '@mantine/hooks';
import { Header } from '@/components';
import { Outlet } from 'react-router-dom';

const Root = () => {
	const pinned = useHeadroom({ fixedAt: 120 });
	const isXs = useMediaQuery('(max-width: 900px)');

	return (
		<AppShell header={{ height: 90, collapsed: !pinned, offset: false }} padding={isXs ? 0 : 'md'}>
			<AppShell.Header bg="transparent" withBorder={false} py={20} px={isXs ? 'xs' : 'xl'}>
				<Header size={isXs} />
			</AppShell.Header>
			<AppShell.Main pt={100}>
				<Container fluid px={isXs ? 'xs' : 'xl'} mb="xl">
					<Outlet context={{ isXs }} />
				</Container>
			</AppShell.Main>
			<AppShell.Footer h={10}></AppShell.Footer>
		</AppShell>
	);
};

export { Root };
