import { Image, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface ImageProps {
	src: string;
	fullWidth?: boolean;
	fullHeight?: boolean;
}

const ExtendedImage: React.FC<ImageProps> = (props) => {
	const [opened, handlers] = useDisclosure(false);
	const modalProps: any = {};

	if (props.fullWidth) {
		modalProps.size = 'auto';
	}

	if (props.fullHeight) {
		modalProps.h = '80vh';
		modalProps.w = '100%';
	}

	return (
		<>
			<Image {...props} onClick={() => handlers.open()} />
			<Modal
				{...modalProps}
				withOverlay
				opened={opened}
				onClose={handlers.close}
				centered
				withCloseButton={false}
				p={0}
			>
				<Image src={props.src} fit="contain" m={0} />
			</Modal>
		</>
	);
};

export { ExtendedImage };
