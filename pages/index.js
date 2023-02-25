import { getFeaturedEvents } from '../dummydata';
import EventList from '../components/events/event-list';
import EventSearch from '../components/events/event-search';
import Button from '../components/ui/button';

function HomePage() {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
}

export default HomePage;
