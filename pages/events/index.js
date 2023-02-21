import { getAllEvents } from '../../dummydata';
import EventList from '../../components/events/event-list';

function AllEventsPage() {
	const events = getAllEvents();

	return (
		<div>
			<EventList items={events} />
		</div>
	);
}

export default AllEventsPage;
