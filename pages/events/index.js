import { getAllEvents } from '../../dummydata';
import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';

function AllEventsPage() {
	const events = getAllEvents();
	const router = useRouter();

	function findEventsHandler(year, month) {
		router.push(`/events/${year}/${month}`);
	}

	return (
		<div>
			<EventSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</div>
	);
}

export default AllEventsPage;
