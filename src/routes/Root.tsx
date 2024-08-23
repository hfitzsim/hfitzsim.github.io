import { AppShell, Title, Group, Container, useMantineTheme, getGradient } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import { HeaderMenu } from '@/components';
import { Outlet, useNavigate } from 'react-router-dom';

const Root = () => {
	const navigate = useNavigate();
	const theme = useMantineTheme();
	const pinned = useHeadroom({ fixedAt: 120 });
	return (
		<AppShell header={{ height: 90, collapsed: !pinned, offset: false }} padding="md">
			<AppShell.Header bg="transparent" withBorder={false} py={20} px={100}>
				<Group justify="space-between" align="center">
					<Title
						style={{ letterSpacing: '0.5em', cursor: 'pointer' }}
						onClick={() => navigate('/')}
					>
						HANNAH FITZSIMMONS
					</Title>
					<HeaderMenu />
				</Group>
			</AppShell.Header>
			<AppShell.Main pt={100}>
				<Container fluid px={100}>
					<Outlet />
				</Container>
			</AppShell.Main>
		</AppShell>
	);
};

export { Root };
