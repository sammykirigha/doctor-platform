
import { BiHomeAlt, BiLogOutCircle, BiCube } from 'react-icons/bi';
import { FaStethoscope, FaBlog, FaWheelchair } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineAppstore } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { MdOutlineRestorePage } from 'react-icons/md';
import { IoTabletLandscapeOutline } from 'react-icons/io';
import { GiAlarmClock } from 'react-icons/gi';




export const links = [
	{
		icon: <GiAlarmClock className='h-4.5 w-4.5' />,
		name: 'Dashboard',
		link: '/dashboard'
	},
	{
		icon: <FaStethoscope className='h-4.5 w-4.5' />,
		name: 'Appointment',
		link: '/appointment'
	},
	{
		icon: <AiOutlineUser className='h-4.5 w-4.5' />,
		name: 'Doctors',
		link: 'doctors',
		childrenLinks: [
			{
				name: 'Doctors',
			    link: '/doctors/all-doctors'
			},
			{
				name: 'Add Doctor',
			    link: '/doctors/add-doctor'
			},
			{
				name: 'Profile',
			    link: '/doctors/profile'
			},
		]
			
		
	},
	{
		icon: <FaWheelchair className='h-4.5 w-4.5' />,
		name: 'Patients',
		link: 'patients',
		childrenLinks: [
			{
				name: 'All Patients',
			    link: '/patients/all-patients'
			},
			{
				name: 'Add Patients',
			    link: '/patients/add-patient'
			},
			{
				name: 'Profile',
			    link: '/patients/profile'
			},
		]
	},
	{
		icon: <AiOutlineAppstore className='h-4.5 w-4.5' />,
		name: 'Apps',
		link: 'apps',
		childrenLinks: [
			{
				name: 'Chat',
			    link: '/apps/chat'
			},
			{
				name: 'Email',
			    link: '/apps/email'
			},
			{
				name: 'Calendar',
			    link: '/apps/calendar'
			},
		]
	},
	{
		icon: <HiOutlineShoppingCart className='h-4.5 w-4.5' />,
		name: 'Pharmacy',
		link: 'pharmacy',
		childrenLinks: [
			{
				name: 'Shop',
			    link: '/shop'
			},
			{
				name: 'Shop Detail',
			    link: '/shopdetail'
			},
			{
				name: 'Shopcart',
			    link: '/shopcart'
			},
			{
				name: 'Checkout',
			    link: '/checkout'
			},
		]
	},
	{
		icon: <FaBlog className='h-4.5 w-4.5' />,
		name: 'Blogs',
		link: 'blogs',
		childrenLinks: [
			{
				name: 'Blogs',
			    link: '/blogs'
			},
			{
				name: 'Blog Detail',
			    link: '/blog-detail'
			},
			
		]
	},
	{
		icon: <MdOutlineRestorePage className='h-4.5 w-4.5' />,
		name: 'Pages',
		link: 'pages',
		childrenLinks: [
			{
				name: 'FAQs',
			    link: '/faq'
			},
			{
				name: 'Reviews',
			    link: '/reviews'
			},
			{
				name: 'Invoice List',
			    link: '/invoice-list'
			},
			{
				name: 'Invoice',
			    link: '/invoice'
			},
			{
				name: 'Terms & Policy',
			    link: '/terms-and-policy'
			},
			{
				name: 'Privacy Policy',
			    link: '/privacy-policy'
			},
			{
				name: '404 !',
			    link: '/404'
			},
			{
				name: 'Blank Page',
			    link: '/blank-page'
			},
		]
	},
	{
		icon: <BiLogOutCircle className='h-4.5 w-4.5' />,
		name: 'Authentication',
		link: 'authentication',
		childrenLinks: [
			{
				name: 'Login',
			    link: '/login'
			},
			{
				name: 'Signup',
			    link: '/signup'
			},
			{
				name: 'Forgot Password',
			    link: '/Lock Screen'
			},
			{
				name: 'Thank you !',
			    link: '/thank-you'
			}
		]
	},
	{
		icon: <BiCube className='h-4.5 w-4.5' />,
		name: 'Components',
		link: '/comments'
	},
	{
		icon: <BiHomeAlt className='h-4.5 w-4.5' />,
		name: 'Landing Page',
		link: '/landing-page'
	}
]