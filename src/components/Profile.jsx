import React from "react";
import {BsHeart} from 'react-icons/bs'
const Profile = () => {
    return (
        <div className="mx-4">
            <div className="flex flex-col mt-7 ">
                <div className="text-slate-900 text-lg font-semibold ">Introduction:</div>
                <p className="pt-8 text-gray-500  font-medium">
                    Web designers to occupy the space which will later be filled
                    with 'real' content. This is required when, for example, the
                    final text is not yet available. Dummy text is also known as
                    'fill text'. Dummy texts have been in use by typesetters
                    since the 16th century.
                </p>
            </div>
            <div className="flex flex-col mt-5">
                <div className="flex flex-row items-center  mb-5 ">
                    <div className="text-lg text-slate-800 font-bold ">Appointment List</div>
                    <div className="text-lg text-slate-800 font-bold ml-64">Payment List</div>
                </div>
                <div className="">
                    <div className="flex flex-row gap-10">
                        <div className="flex flex-row items-center justify-evenly px-4 py-2 border drop-shadow-md bg-white w-full">
                            <BsHeart className="h-7 w-7 text-blue-600" />
                            <div className="flex flex-col mx-2 py-3">
                                <span className="text-lg text-slate-900 font-bold">Cardiogram</span>
                                <span className="text-md text-slate-500">Dr.Calvin Carlo</span>
                            </div>
                            <span className="text-md text-slate-900">10 Dec</span>
                        </div>
                        <div className="flex flex-row items-center justify-evenly px-4 py-2 border drop-shadow-md bg-white w-full">
                            <BsHeart className="h-7 w-7 text-blue-600" />
                            <div className="flex flex-col mx-2 py-3">
                                <span className="text-lg text-slate-900 font-bold">Cardiogram</span>
                                <span className="text-md text-slate-500">Dr.Calvin Carlo</span>
                            </div>
                            <span className="text-md text-slate-900">10 Dec</span>
                        </div>
                    </div>
                </div>
			</div>
			<div className="flex flex-col">
				<h5>Contact us</h5>
				<div className="flex flex-row">
					<div className="flex flex-col">
						<span>icon</span>
						<p>New Messages</p>
						<span>Read more <span>icon</span></span>
					</div>
					<div className="flex flex-col">
						<span>icon</span>
						<p>Latest Proposals</p>
						<span>View more <span>icon</span></span>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Profile;
