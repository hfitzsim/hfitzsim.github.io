import { useState, useEffect } from 'react';

const useImageRotator = (imageArray: string[], interval: number = 3000) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const rotateImage = () => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
		};

		const intervalId = setInterval(rotateImage, interval);

		return () => clearInterval(intervalId);
	}, [imageArray, interval]);

	return imageArray[currentImageIndex];
};

export { useImageRotator };
