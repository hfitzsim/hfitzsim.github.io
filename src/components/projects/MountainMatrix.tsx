import { Text, Image } from '@mantine/core';

const MountainMatrix = () => {
	return (
		<>
			<Text>
				The purpose of this project was to design and implement different views for users to compare
				ski resort statistics to choose which resort to go to on a particular day. I designed the
				logo with Adobe Illustrator and developed four different pages. This project was built with
				Angular, Angular Materiial and the Leaflet API.
			</Text>
			<figure>
				<Image src="/assets/mtn-matrix-dashboard.png" />
				<figcaption>Dashboard / homepage of Mountain Matrix app</figcaption>
			</figure>
			<figure>
				<Image src="/assets/mtn-matrix-mtn-search.png" />
				<figcaption>
					View to see all mountains and search for mountains. This used ng2-search-filter, a pipe,
					to search the data from user input.
				</figcaption>
			</figure>
			<figure>
				<Image src="/assets/mtn-matrix-mtn-detail.png" />
				<figcaption>Individual Mountain detail view.</figcaption>
			</figure>
			<figure>
				<Image src="/assets/mtn-matrix-map.png" />
				<figcaption>Map view of ski resorts in the north east region.</figcaption>
			</figure>
			<figure>
				<Image src="/assets/mtn-matrix-compare.png" />
				<figcaption>This view is used to compare two mountains' data points.</figcaption>
			</figure>
			<figure>
				<Image src="/assets/mtn-matrix-compare2.png" />
				<figcaption> The selectable mountains are populated dynamically.</figcaption>
			</figure>
		</>
	);
};

export { MountainMatrix };
