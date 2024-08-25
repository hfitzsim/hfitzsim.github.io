import { Text, Image, SimpleGrid } from '@mantine/core';
import { useOutletContext } from 'react-router-dom';

const TheSill = () => {
	const isXs = useOutletContext();
	const allImages = () => {
		return (
			<>
				<figure>
					<Image src="/assets/TheSillMobileApp-2.png" />
					<figcaption>Opening Page</figcaption>
				</figure>
				<figure>
					<Image src="/assets/TheSillMobileApp-3.png" />
					<figcaption>Home Page</figcaption>
				</figure>
				<figure>
					<Image src="/assets/TheSillMobileApp-4.png" />
					<figcaption>Shopping Page</figcaption>
				</figure>
				<figure>
					<Image src="/assets/TheSillMobileApp-5.png" />
					<figcaption>Cart/Checkout Page</figcaption>
				</figure>
				<figure>
					<Image src="/assets/TheSillMobileApp-6.png" />
					<figcaption>Account Page</figcaption>
				</figure>
			</>
		);
	};
	return (
		<>
			<h4>Mobile App Design</h4>
			<Text>
				For this class, we were asked to design a mobile app for a website that did not already have
				one. I chose <a href="https://www.thesill.com/">TheSill.com.</a> For part one, we were to
				redesign the logo and create wireframes for five different app pages that would represent
				different app functions. Below are the landing page, main menu of services, shopping page,
				shopping cart/checkout, and account page. The wireframes were presented for peer review and
				feedback received was implemented into the final design.
			</Text>
			<figure>
				<Image src="/assets/TheSillWireframes-1.png" />
			</figure>
			<Text>
				Below is the final design which simplified the landing page, added color, images, and a
				quick add button when on the shopping page.
			</Text>
			{isXs ? allImages() : <SimpleGrid cols={5}>{allImages()}</SimpleGrid>}
		</>
	);
};

export { TheSill };
