import { Text, Image } from '@mantine/core';

const EventTracker = () => {
	return (
		<>
			<Text>
				This project was for a Web App Development class. We were to create an application using
				HTMl, CSS, and JavaScript. The biggest challenge for this class was creating a login system
				and having to teach myself PHP and MySQL. I went with a clean and simple look and feel for
				the design of each page.
			</Text>
			<figure>
				<Image src="/assets/event-tracker-add-event.png" />
				<figcaption></figcaption>
			</figure>
			<figure>
				<Image src="/assets/event-tracker-update-acct.png" />
				<figcaption></figcaption>
			</figure>
			<figure>
				<Image src="/assets/event-tracker-acct-settings.png" />
				<figcaption></figcaption>
			</figure>
			<figure>
				<Image src="/assets/event-tracker-admin.png" />
				<figcaption></figcaption>
			</figure>
			<figure>
				<Image src="/assets/event-tracker-progress.png" />
				<figcaption></figcaption>
			</figure>
		</>
	);
};

export { EventTracker };