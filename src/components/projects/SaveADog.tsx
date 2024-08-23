import { Text, Image } from '@mantine/core';

const SaveADog = () => {
	return (
		<>
			<h4>Website Redesign</h4>
			<Text>
				This project is a redesign of the website <a href="https://saveadog.org/">SaveADog.org. </a>
				The final design incorporates some of the original colors used on the website and gives it a
				more modern look and feel. The logo was created with Adobe Illustrator, the navigation bar
				is now solely at the top of the page, and the most pertinent information to potential
				adopters is shown right on the landing page. For this project I used, Leaflet API, Angular
				Material, and{' '}
			</Text>
			<figure>
				<Image src="/assets/SaveADog-1.png" />
				<figcaption>
					Resdesign of SaveADog.org homepage. A PDF of the image above can be viewed{' '}
					<a target="_blank" href="https://hfitzsim.github.io/images/ui_designs/SaveADog.pdf">
						here.
					</a>
				</figcaption>
			</figure>
			<Text>
				{' '}
				In addition to resdesigning the home page, I chose to redesign the page that lists dogs
				available for adoption. This takes a clean, minimalistic approach, showing images of each
				dog, their name, age, and sex. This page does not include any 'back' or 'next' buttons as
				users can scroll to see all dogs. Contact information remains visible in the footer until
				all dogs have loaded and can be viewed.{' '}
			</Text>
			<figure>
				<Image src="/assets/SaveADog-2.png" />
				<figcaption>
					Redesign of SaveADog.org available dogs page. A PDF of the image above can be viewed{' '}
					<a target="_blank" href="https://hfitzsim.github.io/images/ui_designs/SaveADog_pg2.pdf">
						here.
					</a>
				</figcaption>
			</figure>
		</>
	);
};

export { SaveADog };
