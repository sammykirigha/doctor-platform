import React from "react";
import { BiHomeAlt } from "react-icons/bi";

 const iconStyles = {
    height: '28px',
	width: '28px',

}

const cardsInfo = [
    {
        icon: <BiHomeAlt style={iconStyles} />,
        amount: "558",
        category: "Patients",
    },
    {
        icon: <BiHomeAlt style={iconStyles} />,
        amount: "$2164",
        category: "Avg.costs",
    },
    {
        icon: <BiHomeAlt style={iconStyles} />,
        amount: "112",
        category: "Staff Members",
    },
    {
        icon: <BiHomeAlt style={iconStyles} />,
        amount: "16",
        category: "Vehicles",
    },
    {
        icon: <BiHomeAlt style={iconStyles} />,
        amount: "558",
        category: "Appointments",
    },
    {
        icon: <BiHomeAlt style={iconStyles} />,
        amount: "558",
        category: "Operations",
    },
];



const DashboardCards = () => {
	return <div className="bg-gray-200 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-3 mt-5">
		{
			cardsInfo?.map((item, index) => {
				return (
					<div key={index} className='drop-shadow-md rounded-md bg-white flex pl-3 py-5 overflow-hidden shadow-lg'>
						<div className="bg-gray-100 p-3 rounded-md" ><span className=" h-8 w-8 text-sky-900" >{item.icon}</span></div>
						<div className="flex flex-col px-3">
							<span className="text-black-900 font-bold">{item.amount}</span>
							<span className="text-gray-500">{ item.category}</span>
						</div>
					</div>
				)
			})
		}
	</div>;
};

export default DashboardCards;
