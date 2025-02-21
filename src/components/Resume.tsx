import { pdfjs, Document, Page } from 'react-pdf';
import React, { useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.mjs',
	import.meta.url
).toString();

interface ResumeProps {
	filepath: string;
	ref?: React.RefObject<any>;
}

const Resume: React.FC<ResumeProps> = ({ filepath, ref }) => {
	const [numPages, setNumPages] = useState<number | null>(null);

	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
		setNumPages(numPages);
		console.log(numPages);
	};

	return (
		<div style={{ width: '100%' }}>
			<Document file={filepath} onLoadSuccess={onDocumentLoadSuccess}>
				{Array.from(new Array(numPages), (_el, index) => (
					<Page key={`page_${index + 1}`} pageNumber={index + 1} />
				))}
			</Document>
		</div>
	);
};

export { Resume };
