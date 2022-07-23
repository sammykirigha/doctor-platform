
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
		link: '/admin/dashboard',
		access: ["admin", "doctor", "patient","secretary"]
	},
	{
		icon: <FaStethoscope className='h-4.5 w-4.5' />,
		name: 'Appointment',
		link: '/admin/appointment',
		access: ["admin", "doctor", "patient","secretary"]
	},
	{
		icon: <AiOutlineUser className='h-4.5 w-4.5' />,
		name: 'Doctors',
		link: '/admin/doctors',
		access: ["admin", "doctor","secretary"],
		childrenLinks: [
			{
				name: 'Doctors',
			    link: '/admin/doctors/'
			},
			{
				name: 'Add Doctor',
			    link: '/admin/doctors/new'
			},
			{
				name: 'Profile',
			    link: '/admin/doctors/:id'
			},
		]
			
		
	},
	{
		icon: <FaWheelchair className='h-4.5 w-4.5' />,
		name: 'Patients',
		link: '/admin/patients',
		access: ["admin", "doctor", "secretary"],
		childrenLinks: [
			{
				name: 'All Patients',
			    link: '/admin/patients/'
			},
			{
				name: 'Add Patients',
			    link: '/admin/patients/new/'
			},
			{
				name: 'Profile',
			    link: '/admin/patients/:id'
			},
		]
	},
	{
		icon: <AiOutlineAppstore className='h-4.5 w-4.5' />,
		name: 'Apps',
		link: '/layout/apps',
		access: ["admin", "doctor", "patient","secretary"],
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
		access: ["admin", "doctor", "patient","secretary"],
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