import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';

export interface StartupCardType {
	_createdAt: string;
	views: number;
	author: { _id: number; name: string };
	_id: number;
	description: string;
	image: string;
	category: string;
	title: string;
}

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const query = (await searchParams).query;

	const posts: StartupCardType[] = [
		{
			_createdAt: new Date().toDateString(),
			views: 55,
			author: { _id: 1, name: 'Elon Musk' },
			_id: 1,
			description: 'We Robots are an initiative by Elon Musk of Tesla/Boring Company/X fame.',
			image: '/img/elon.jpg',
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
						posts.map((post: StartupCardType) => <StartupCard key={post?._id} post={post} />)
					) : (
						<p className='no-results'>No Startups found</p>
					)}
				</ul>
			</section>
		</>
	);
}
