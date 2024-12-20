import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const query = (await searchParams).query;

	interface StartupCardType {
		_createdAt: string;
		views: number;
		author: { _id: number; name: string };
		_id: number;
		description: string;
		image: string;
		category: string;
		title: string;
	}

	const posts: StartupCardType[] = [
		{
			_createdAt: new Date(),
			views: 55,
			author: { _id: 1, name: 'Elon Musk' },
			_id: 1,
			description: 'This is a description',
			image: 'https://en.wikipedia.org/wiki/Elon_Musk#/media/File:Elon_Musk_Royal_Society_crop.jpg',
			category: 'Robots',
			title: 'We Robots',
		},
	];
	return (
		<>
			<section className='pink_container'>
				<h1 className='heading'>
					Pitch Your Startup, <br /> Connect with Entrepreneurs
				</h1>
				<p className='sub-heading !max-w-3xl'>
					Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
				</p>
				<SearchForm query={query} />
			</section>

			<section className='section_container'>
				<p className='text-30-semibold'>
					{query ? `Search Results for "${query}"` : 'All Startups'}
				</p>
				<ul className='mt-7 card_grid'>
					{posts.length > 0 ? (
						posts.map((post: StartupCardType, index: number) => (
							<StartupCard key={post?._id} post={post} />
						))
					) : (
						<p className='no-results'>No Startups found</p>
					)}
				</ul>
			</section>
		</>
	);
}