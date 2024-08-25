import { Breadcrumbs, Anchor } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface BreadcrumbProps {
	project: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ project }) => {
	const url = new URL(window.location.href);
	const breadcrumbs: { href: string; label: string }[] = [];

	const pathParts = url.hash
		.replace(/^#/, '')
		.split('/')
		.filter((part) => part !== '');

	pathParts.forEach((part, index) => {
		const href = '#' + pathParts.slice(0, index + 1).join('/');
		const label = part === '' ? 'Home' : Number.isInteger(Number(part)) ? project : 'Projects';
		breadcrumbs.push({ href, label });
	});

	breadcrumbs.unshift({ href: url.origin, label: 'Home' });

	const crumbs = breadcrumbs.map((a, index) => {
		return (
			<Anchor key={index} href={a.href}>
				{a.label}
			</Anchor>
		);
	});

	return (
		<Breadcrumbs
			separator={<FontAwesomeIcon icon={faChevronRight} size="xs" />}
			separatorMargin="xs"
			mb="lg"
		>
			{crumbs}
		</Breadcrumbs>
	);
};

export { Breadcrumb };
