import { Group, Collapse, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useOutletContext } from 'react-router-dom';

interface HeaderMenuProps {
	data: any;
	onClick: () => void;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ data, onClick }) => {
	const [opened, { toggle }] = useDisclosure(false);
	const isXs = useOutletContext();

	return (
		<Stack gap={0}>
			<Group onClick={toggle}>
				<NavLink to={'#'} className="link" onClick={(event) => event.preventDefault()}>
					{data.label}
				</NavLink>
				<FontAwesomeIcon
					icon={faChevronDown}
					style={{ transform: opened ? 'rotate(-180deg)' : 'none' }}
				/>
			</Group>

			<Collapse
				in={opened}
				p={10}
				mt={isXs ? 0 : 50}
				miw={200}
				maw={500}
				style={{
					position: isXs ? 'relative' : 'absolute',
					zIndex: 1000,
					backgroundColor: 'white',
					border: isXs ? '1px solid #d3d3d3' : 'none',
				}}
			>
				<Stack ml={isXs ? 30 : 0} mt={-10} style={{ width: '100%' }}>
					<NavLink key={'link' + data.value} to={data.value} className="link" onClick={onClick}>
						{'All ' + data.label}
					</NavLink>
					{data.children.map((child: any) => (
						<NavLink
							key={'link' + child.value}
							to={child.value}
							className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
							onClick={onClick}
						>
							{child.label}
						</NavLink>
					))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

export { HeaderMenu };
