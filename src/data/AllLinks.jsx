
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
		link: '/layout/dashboard'
	},
	{
		icon: <FaStethoscope className='h-4.5 w-4.5' />,
		name: 'Appointment',
		link: '/layout/appointment'
	},
	{
		icon: <AiOutlineUser className='h-4.5 w-4.5' />,
		name: 'Doctors',
		link: '/layout/doctors',
		childrenLinks: [
			{
				name: 'Doctors',
			    link: '/layout/doctors/all-doctors'
			},
			{
				name: 'Add Doctor',
			    link: '/layout/doctors/add-doctor'
			},
			{
				name: 'Profile',
			    link: '/layout/doctors/profile'
			},
		]
			
		
	},
	{
		icon: <FaWheelchair className='h-4.5 w-4.5' />,
		name: 'Patients',
		link: '/layout/patients',
		childrenLinks: [
			{
				name: 'All Patients',
			    link: '/layout/patients/all-patients'
			},
			{
				name: 'Add Patients',
			    link: '/layout/patients/add-patient'
			},
			{
				name: 'Profile',
			    link: '/layout/patients/profile'
			},
		]
	},
	{
		icon: <AiOutlineAppstore className='h-4.5 w-4.5' />,
		name: 'Apps',
		link: '/layout/apps',
		childrenLinks: [
			{
				name: 'Chat',
			    link: '/layout/apps/chat'
			},
			{
				name: 'Email',
			    link: '/layout/apps/email'
			},
			{
				name: 'Calendar',
			    link: '/layout/apps/calendar'
			},
		]
	},
	{
		icon: <HiOutlineShoppingCart className='h-4.5 w-4.5' />,
		name: 'Pharmacy',
		link: '/layout/pharmacy',
		childrenLinks: [
			{
				name: 'Shop',
			    link: '/layout/shop'
			},
			{
				name: 'Shop Detail',
			    link: '/layout/shopdetail'
			},
			{
				name: 'Shopcart',
			    link: '/layout/shopcart'
			},
			{
				name: 'Checkout',
			    link: '/layout/checkout'
			},
		]
	},
	{
		icon: <FaBlog className='h-4.5 w-4.5' />,
		name: 'Blogs',
		link: '/layout/blogs',
		childrenLinks: [
			{
				name: 'Blogs',
			    link: '/layout/blogs'
			},
			{
				name: 'Blog Detail',
			    link: '/layout/blog-detail'
			},
			
		]
	},
	{
		icon: <MdOutlineRestorePage className='h-4.5 w-4.5' />,
		name: 'Pages',
		link: '/layout/pages',
		childrenLinks: [
			{
				name: 'FAQs',
			    link: '/layout/faq'
			},
			{
				name: 'Reviews',
			    link: '/layout/reviews'
			},
			{
				name: 'Invoice List',
			    link: '/layout/invoice-list'
			},
			{
				name: 'Invoice',
			    link: '/layout/invoice'
			},
			{
				name: 'Terms & Policy',
			    link: '/layout/terms-and-policy'
			},
			{
				name: 'Privacy Policy',
			    link: '/layout/privacy-policy'
			},
			{
				name: '404 !',
			    link: '/layout/404'
			},
			{
				name: 'Blank Page',
			    link: '/layout/blank-page'
			},
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