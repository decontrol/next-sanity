import Link from 'next/link';
import Image from 'next/image';
import { auth, signOut, signIn } from '@/auth';

const Navbar = async () => {
	const session = await auth();
	// if (!session || !session.user) {
	// 	throw new Error('Session is null or undefined');
	// }
	return (
		<header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
			<nav className='flex justify-between items-center'>
				<Link href='/'>
					<Image src='/logo.png' alt='logo' width={144} height={30} priority />
				</Link>
				<div className='flex items-center gap-5 text-black'>
					{session && session.user ? (
						<>
							<Link href='/startup/create'>
								<span>Create</span>
							</Link>
							<form
								action={async () => {
									'use server';

									await signOut({ redirectTo: '/' });
								}}>
								<button type='submit'>
									<span>Logout</span>
								</button>
							</form>
							<Link href={`/user/${session?.id}`}>
								<span>{session?.user?.name}</span>
							</Link>
						</>
					) : (
						<form
							action={async () => {
								'use server';

								await signIn('github');
							}}>
							<button type='submit'>
								<span>Login</span>
							</button>
						</form>
					)}
				</div>
			</nav>
		</header>
	);
};
export default Navbar;
