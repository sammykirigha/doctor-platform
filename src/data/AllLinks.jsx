
import { BiHomeAlt, BiLogOutCircle, BiCube } from 'react-icons/bi';
import { FaStethoscope, FaBlog, FaWheelchair } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineAppstore } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { MdOutlineRestorePage } from 'react-icons/md';
import { IoTabletLandscapeOutline } from 'react-icons/io';
import { GiAlarmClock } from 'react-icons/gi';




export const links = [
	{
		icon: <GiAlarmClock/>,
		name: 'Dashboard',
		link: '/dashboard'
	},
	{
		icon: <FaStethoscope />,
		name: 'Appointment',
		link: '/appointment'
	},
	{
		icon: <AiOutlineUser />,
		name: 'Doctors',
		childrenLinks: [
			{
				name: 'Doctors',
			    link: '/doctors'
			},
			{
				name: 'Add Doctor',
			    link: '/add-doctor'
			},
			{
				name: 'Profile',
			    link: '/profile'
			},
		]
			
		
	},
	{
		icon: <FaWheelchair />,
		name: 'Patients',
		childrenLinks: [
			{
				name: 'All Patients',
			    link: '/patients'
			},
			{
				name: 'Add Patients',
			    link: '/add-patients'
			},
			{
				name: 'Profile',
			    link: '/profile'
			},
		]
	},
	{
		icon: <AiOutlineAppstore />,
		name: 'Apps',
		childrenLinks: [
			{
				name: 'Chat',
			    link: '/chat'
			},
			{
				name: 'Email',
			    link: '/email'
			},
			{
				name: 'Calendar',
			    link: '/calendar'
			},
		]
	},
	{
		icon: <HiOutlineShoppingCart />,
		name: 'Pharmacy',
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
		icon: <FaBlog />,
		name: 'Blogs',
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
		icon: <MdOutlineRestorePage />,
		name: 'Pages',
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
		icon: <BiLogOutCircle />,
		name: 'Authentication',
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
		icon: <BiCube />,
		name: 'Components',
		link: '/comments'
	},
	{
		icon: <BiHomeAlt />,
		name: 'Landing Page',
		link: '/landing-page'
	}
]