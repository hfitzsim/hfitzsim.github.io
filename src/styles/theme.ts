import { createTheme } from '@mantine/core';

const theme = createTheme({
	colors: {
		charcoal: [
			'#333333',
			'#333333',
			'#333333',
			'#333333',
			'#333333',
			'#333333',
			'#333333',
			'#333333',
			'#333333',
			'#333333',
		],
	},
	primaryColor: 'charcoal',
	primaryShade: 5,
	cursorType: 'pointer',
	defaultRadius: 'sm',
	fontFamily: 'Mulish, sans-serif',
	headings: { fontFamily: 'Mulish, sans-serif' },
});

export { theme };
