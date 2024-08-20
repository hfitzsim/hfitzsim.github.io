import { AppShell, Title, Group, useMantineTheme, getGradient } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import { HeaderMenu } from '@/components';
import { Outlet } from 'react-router-dom';

const Root = () => {
	const theme = useMantineTheme();
	const pinned = useHeadroom({ fixedAt: 120 });
	getGradient({ deg: 180, from: 'blue', to: 'cyan.7' }, theme);
	return (
		<AppShell header={{ height: 90, collapsed: !pinned, offset: false }} padding="md">
			<AppShell.Header bg="transparent" withBorder={false} py={20} px={60}>
				<Group justify="space-between" align="center">
					<Title style={{ letterSpacing: '0.5em' }}>HANNAH FITZSIMMONS</Title>
					<HeaderMenu />
				</Group>
			</AppShell.Header>
			<AppShell.Main
				pt={100}
				bg={getGradient(
					{ deg: 160, from: 'rgba(255,199,72,1) 0%', to: 'rgba(237,131,214,1) 100%' },
					theme
				)}
			>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
};

export { Root };
