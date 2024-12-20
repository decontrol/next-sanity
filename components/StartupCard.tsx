import { formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
// import { cn } from '../lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { StartupCardType } from '@/app/(root)/page';
import { Button } from './ui/button';

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
					<Link href={`/startup/${_id}`}>
						<h3 className='text-26-semibold line-clamp-1'>{title}</h3>
					</Link>
				</div>
				<Link href={`/user/${_authorId}`}>
					<Image width='48' height='48' className='rounded-full' src={image} alt={title} />
				</Link>
			</div>
			<Link href={`/startup/${_id}`}>
				<p className='startup-card_desc'>{description}</p>
				<img src='img/robotics.jpg' alt='placeholder' className='startup-card_img' />
			</Link>
			<div className='flex-between gap-3 mt-5'>
				<Link href={`/?query=${category.toLowerCase()}`}>
					<p className='text-16-medium'>{category}</p>
				</Link>
				<Button className='startup-card_btn' asChild>
					<Link href={`/startup/${_id}`}>Dertails</Link>
				</Button>
			</div>
		</li>
	);
};
export default StartupCard;
