import { getFeaturedEvents } from '../dummydata';
import EventList from '../components/events/event-list';

function HomePage() {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<ul>
				<EventList items={featuredEvents} />
			</ul>
		</div>
	);
}

export default HomePage;
