import { motion } from 'motion/react';
import { Image } from '@mantine/core';
import { useState, useEffect } from 'react';
import img1 from '@/assets/whistler.png';
import img2 from '@/assets/aerial_yoga.jpeg';
import img3 from '@/assets/tulum.jpeg';
import img4 from '@/assets/hannah-amigurumi.png';

const images = [
	{ src: img1, alt: 'Hannah Snowboarding at Whistler' },
	{ src: img2, alt: 'Hannah doing Aerial Yoga in Tulum' },
	{ src: img3, alt: 'Hannah in Tulum' },
	{ src: img4, alt: 'Hannah with one of her corcheted amigurumi' },
];

const ImageRotator = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000); // Change every 3 seconds

		return () => clearInterval(interval);
	}, []);

	// Circular positions for 4 images
	const positions = [
		{ x: '-100%', scale: 0.8, zIndex: 1, opacity: 0.7 }, // Left (exiting)
		{ x: '0%', scale: 1, zIndex: 2, opacity: 1 }, // Center (main focus)
		{ x: '100%', scale: 0.8, zIndex: 1, opacity: 0.7 }, // Right (incoming)
		{ x: '200%', scale: 0.6, zIndex: 0, opacity: 0.5 }, // Extra position (preparing to cycle in)
	];

	return (
		<div style={{ position: 'relative', width: '250px', height: '250px', overflow: 'hidden' }}>
			{images.map((img, i) => {
				const posIndex = (i - index + images.length) % images.length;

				return (
					<motion.div
						key={img.src}
						initial={positions[posIndex]}
						animate={positions[posIndex]}
						transition={{ duration: 0.8, ease: 'easeInOut' }}
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							borderRadius: '50%', // Makes it a perfect circle
							overflow: 'hidden', // Ensures the image stays inside the circle
						}}
					>
						<Image
							src={img.src}
							alt={img.alt}
							radius="xl" // Ensures Mantine's Image is circular
							style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Covers fully
						/>
					</motion.div>
				);
			})}
		</div>
	);
};

export { ImageRotator };
