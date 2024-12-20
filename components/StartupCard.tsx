import { formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import Link from 'next/link';

const StartupCard = ({ post }: { post: StartupCardType }) => {
	const {
		_createdAt,
		views,
		author: { _id: _authorId, name },
		title,
		description,
		category,
		_id,
		image,
	} = post;
	return (
		<li className='startup-card group'>
			<div className='flex-between'>
				<p className='startup_card_date text-xs'>{formatDate(_createdAt)}</p>
				<div className='flex gap-1.5'>
					<EyeIcon className='size-6 text-primary' />
					<span className='text-16-medium'>{views}</span>
				</div>
			</div>
			<div className='flex-between mt-5 gap-5'>
				<div className='flex-1'>
					<Link href={`/user/${_authorId}`}>
						<p className='text-16-medium line-clamp-1'>{name}</p>
					</Link>
				</div>
			</div>
		</li>
	);
};
export default StartupCard;
