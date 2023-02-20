import { getFeaturedEvents } from '../dummydata'

function HomePage() {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<ul>
				{/* iterate over each event in array */}
				{featuredEvents.map((event, index) => (
					<li key={index}>{event}</li>
				))}
			</ul>
		</div>
	);
}

export default HomePage;
