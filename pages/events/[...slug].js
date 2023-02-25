import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummydata';

import ErrorAlert from '../../components/error-alert/error-alert';
import ResultsTitle from '../../components/results-title/results-title';
import EventList from '../../components/events/event-list';

function FilteredEventsPage() {
	const router = useRouter();
	const filterData = router.query.slug;

	if (!filterData) {
		return <p className='center'>Loading...</p>;
	}
	// unpack the query data and assign it to a variable
	const filteredYear = filterData[0];
	const filteredMonth = filterData[1];

	// data from URL will always be a string, here we convert it to a number
	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	// check if the year and month was properly converted to numbers and that they are within specified ranges.
	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numMonth > 12 ||
		numYear < 2021 ||
		numMonth < 1
	) {
		return (
			<ErrorAlert>
				<p className='center'>
					Invalid Filter. Please adjust your values.
				</p>
			</ErrorAlert>
		);
	}

	// Call the getFilteredEvents function with the year and month
	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth,
	});

	// If there are no events or an error occurs, return a message.
	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<ErrorAlert>
				<p className='center'>No events found.</p>;
			</ErrorAlert>
		);
	}

	// Create Date object from filter to pass to the ResultsTitle component

	const date = new Date(numYear, numMonth - 1);

	return (
		<>
			<ResultsTitle>
				<EventList>{filteredEvents}</EventList>
			</ResultsTitle>
		</>
	);
}

export default FilteredEventsPage;
