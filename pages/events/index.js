function AllEventsPage() {
	const events = ['event1', 'event2', 'event3', 'event4', 'event5'];

	return (
		<div>
			<ul>
				{/* iterate over each event in array */}
				{events.map((event, index) => (
					<li key={index}>{event}</li>
				))}
			</ul>
		</div>
	);
}

export default AllEventsPage;
