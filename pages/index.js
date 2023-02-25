import { getFeaturedEvents } from '../dummydata';
import EventList from '../components/events/event-list';

function HomePage() {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<h1 className='center'>Featured Events</h1>
			<EventList items={featuredEvents} />
		</div>
	);
}

export default HomePage;
