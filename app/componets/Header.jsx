import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


export default function Header() {

	console.log( usePathname() )

	function render_AddMovie() {
		if ( usePathname() === '/adminDashboard' ) {
			return (
				<div className='mr-auto bg-red-500 py-2 px-6 rounded-lg'>
					<Link className=" items text-white" href={"/addMovie"}>Add Movie</Link>
				</div>
			)
		}
	}

	return (
		<nav className="bg-blue-950 text-white flex flex-col w-full  fixed-top-0  text-xl font-bold ">
			<ul>
				<div class={'flex p-3 space-x-8 font-medium text-md'}>

					<div className='text-xl font-normal mr-auto py-2 px-6'>
						<li> {'Welcome'} </li>
					</div>

					{ render_AddMovie() }

					<div className='mr-auto py-2 pr-8'>
						<Link href="/"> {'Logout'} </Link>
					</div>

				</div>
			</ul>
		</nav>
	);
}