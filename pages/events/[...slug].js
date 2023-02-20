import { useRouter } from 'next/router';

function FilteredEventsPage() {
	const router = useRouter();
	const params = router.query;

	return (
		<div>
			<h1>{params.month}</h1>
			<h1>{params.year}</h1>
		</div>
	);
}

export default FilteredEventsPage;
