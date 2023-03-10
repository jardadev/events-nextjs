import { useRouter } from 'next/router';
import { getEventById } from '../../dummydata';

import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import ErrorAlert from '../../components/error-alert/error-alert';

function EventDetailPage() {
	const router = useRouter();
	const eventId = router.query.eventId; // access query params
	const event = getEventById(eventId);

	if (!event) {
		return (
			<ErrorAlert>
				<p>Event not found</p>
			</ErrorAlert>
		);
	}

	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	);
}

export default EventDetailPage;
