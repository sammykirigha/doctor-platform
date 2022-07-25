
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
		link: '/dashboard',
		access: ["admin", "doctor", "patient","secretary"]
	},
	{
		icon: <FaStethoscope className='h-4.5 w-4.5' />,
		name: 'Appointment',
		link: '/appointment',
		access: ["admin", "doctor", "patient","secretary"]
	},
	{
		icon: <AiOutlineUser className='h-4.5 w-4.5' />,
		name: 'Doctors',
		link: '/doctors',
		access: ["admin", "patient","secretary"],
	},
	{
		icon: <AiOutlineUser className='h-4.5 w-4.5' />,
		name: 'Add Doctor',
		link: '/doctors/new',
		access: ["admin","secretary"],
	},
		{
		icon: <AiOutlineUser className='h-4.5 w-4.5' />,
		name: 'Profile',
		link: '/doctors/:id',
		access: ["admin", "doctor","secretary"],
			
		
	},
	{
		icon: <FaWheelchair className='h-4.5 w-4.5' />,
		name: 'Patients',
		link: '/patients',
		access: ["admin", "doctor", "secretary"],
	},
	{
		icon: <FaWheelchair className='h-4.5 w-4.5' />,
		name: 'Add New Patient',
		link: '/patients/new/',
		access: ["admin", "doctor", "secretary"],
	},
	{
		icon: <FaWheelchair className='h-4.5 w-4.5' />,
		name: 'Patient Profile',
		link: '/patients/:id',
		access: ["admin", "patient", "secretary"],
	},
	{
		icon: <AiOutlineAppstore className='h-4.5 w-4.5' />,
		name: 'Messages',
		link: '/chat',
		access: ["admin", "doctor", "patient", "secretary"],
	},
	{
		icon: <AiOutlineAppstore className='h-4.5 w-4.5' />,
		name: 'Emails',
		link: '/email/:id',
		access: ["admin", "doctor", "patient","secretary"],
	},
	{
		icon: <AiOutlineAppstore className='h-4.5 w-4.5' />,
		name: 'Calendar',
		link: "/calender",
		access: ["admin", "doctor", "patient","secretary"],
	},
	{
		icon: <HiOutlineShoppingCart className='h-4.5 w-4.5' />,
		name: 'Pharmacy',
		link: '/layout/pharmacy',
		// access: ["admin", "patient","secretary"],
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