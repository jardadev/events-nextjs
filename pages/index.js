function HomePage() {
	const featuredEvents = ['yerr', 'yerr2', 'yerr3', 'yerr4', 'yerr5'];

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
