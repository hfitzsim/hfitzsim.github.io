import { Paper } from '@mantine/core';
import { Document, Page } from 'react-pdf';
import React, { useState } from 'react';

interface ResumeProps {
	filepath: string;
}

const Resume: React.FC<ResumeProps> = ({ filepath }) => {
	const [numPages, setNumPages] = useState<number | null>(null);

	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
		setNumPages(numPages);
	};

	return (
		<Paper shadow="xs" p="md">
			<Document file={filepath} onLoadSuccess={onDocumentLoadSuccess}>
				{Array.from(new Array(numPages), (el, index) => (
					<Page key={`page_${index + 1}`} pageNumber={index + 1} />
				))}
			</Document>
		</Paper>
	);
};

export { Resume };
