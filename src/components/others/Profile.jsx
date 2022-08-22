import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetNotifications } from "../../state/reducers/error.reducer";

const Profile = () => {
    const { doctor } = useSelector((state) => state.doctor);

     const dispatch = useDispatch()

    useEffect(() => {
      return ()=>dispatch(resetNotifications())
    }, [dispatch])

    return (
        <div className="mx-4">
            <div className="flex flex-col mt-7 ">
                <div className="text-slate-900 text-lg font-semibold ">
                    Introduction:
                </div>
                <p className="pt-8 text-gray-500  font-medium">{doctor?.experience}</p>
            </div>

            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between gap-x-20 mt-5">
                <div className=" w-full">
                    <div className="text-lg text-slate-800 font-bold my-3">
                        Appointment List
                    </div>
                    {doctor?.appointments?.length > 0 ? (
                        doctor?.appointments?.map((appnt) => {
                            return (
                                <div className="gap-6 cursor-pointer">
                                    <div className="flex flex-row mb-3 items-center justify-between px-4 py-2 border drop-shadow-md bg-white w-full">
                                        <div className="flex flex-col mx-2 py-3">
                                            <span className="text-lg text-slate-900 font-bold">
                                                Patient Name
                                            </span>
                                            <span className="text-md text-slate-500">
                                                {appnt?.patient_firstname} {appnt?.patient_lastname}
                                            </span>
                                        </div>
                                        <div className="flex flex-col mx-2 py-3">
                                            <span className="text-lg text-slate-900 font-bold">
                                                Department
                                            </span>
                                            <span className="text-md text-slate-500">
                                                {appnt.department}
                                            </span>
                                        </div>
                                        <div className="flex flex-col mx-2 py-3">
                                            <span className="text-lg text-slate-900 font-bold">
                                                Date
                                            </span>
                                            <span className="text-md text-slate-500">
                                                {appnt.date}
                                            </span>
                                        </div>
                                        <div className="flex flex-col mx-2 py-3">
                                            <span className="text-lg text-slate-900 font-bold">
                                                Status
                                            </span>
                                            <span className="text-md text-slate-500">
                                                {appnt.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="flex items-center justify-center mb-10">
                            <div className="bg-white border h-auto  rounded-md flex items-center justify-center w-auto py-3 sm:w-auto sm:py-auto md:w-[500px] lg:w-[500px] mx-autho">
                                <h1 className="text-xl text-gray-700 px-10">
                                    You do not have any appointments for now
                                </h1>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
