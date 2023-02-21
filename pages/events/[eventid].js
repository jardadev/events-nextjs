import { useRouter } from 'next/router';
import { getEventById } from '../../dummydata';

impo
function EventDetailPage() { 
	const router = useRouter();
	const eventId = router.query.eventId; // access query params
	const event = getEventById(eventId);

	if (!event) {
		return <p>Event not found</p>;
    }

	return (
		<div>
			<h1>Event Detail Page</h1>
			<p>{params.eventid}</p>
		</div>
	);
}

export default EventDetailPage;
