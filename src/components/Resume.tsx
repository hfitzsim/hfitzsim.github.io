import { Paper } from '@mantine/core';
import { pdfjs, Document, Page } from 'react-pdf';
import React, { useState } from 'react';
import '@/styles/pdf.scss';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.mjs',
	import.meta.url
).toString();

interface ResumeProps {
	filepath: string;
}

const Resume: React.FC<ResumeProps> = ({ filepath }) => {
	console.log('filepath', filepath);
	const [numPages, setNumPages] = useState<number | null>(null);

	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
		setNumPages(numPages);
		console.log(numPages);
	};

	return (
		<Paper shadow="xs" p="md" className="pdf-paper">
			<Document file={filepath} onLoadSuccess={onDocumentLoadSuccess} className="pdf-document">
				{Array.from(new Array(numPages), (el, index) => (
					<Page key={`page_${index + 1}`} pageNumber={index + 1} className="pdf-page" />
				))}
			</Document>
		</Paper>
	);
};

export { Resume };
