import { Image, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface ImageProps {
	src: string;
	alt: string;
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
			<Image
				{...props}
				onClick={() => handlers.open()}
				style={{ display: 'block', margin: 0, padding: 0 }}
			/>
			<Modal
				{...modalProps}
				withOverlay
				opened={opened}
				onClose={handlers.close}
				centered
				withCloseButton={false}
				p={0}
				style={{
					position: 'absolute',
					top: '0',
					left: '0',
					right: '0',
					bottom: '0',
					zIndex: opened ? 200 : -1,
				}}
			>
				<Image src={props.src} alt={props.alt} fit="contain" m={0} style={{ display: 'block' }} />
			</Modal>
		</>
	);
};

export { ExtendedImage };
