import { useRouter } from 'next/router';

function EventDetailPage() {
	const router = useRouter();
	const params = router.query; // access query params

	return (
		<div>
			<h1>Event Detail Page</h1>
			<p>{params.eventid}</p>
		</div>
	);
}

export default EventDetailPage;
