import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import Button from "../../components/common/Button";
import DoctorsList from "./DoctorsList";
import { useDispatch, useSelector } from "react-redux";
import { resetNotifications } from "../../state/reducers/error.reducer";
import useFetchAllDoctor from "../../hooks/useFetchAllDoctors";

const Doctors = () => {
    const params = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const pathname = params.pathname.split("/")[2];

    const { doctors } = useSelector(state => state.doctor)
    const { user } = useSelector(state => state.auth)
    
    console.log('doctors', doctors);
    useFetchAllDoctor()
    
     useEffect(() => {
        return ()=>dispatch(resetNotifications())
     }, [dispatch])
    
    return (
        <div>
            <div className="flex flex-row items-center justify-between mx-4">
                <div>
                    <h4 className="text-lg text-slate-900 font-bold">
                        Doctors
                    </h4>
                    <p className="paragraph inline-flex items-center justify-between text-md uppercase text-md ">
                        Docris{" "}
                        <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
                        <span className="text-blue-700 text-md">
                            {pathname.toUpperCase()}
                        </span>{" "}
                    </p>
                </div>
                {user?.role === "doctor" || user?.role === "patient" ? null : (

                <Button text="Add A New Doctor" onClick={() => navigate('/doctors/add-doctor')} />
                )}
            </div>
            <div className="bg-gray-50 grid  sm:grid-cols-2 gap-y-16 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3 mt-5 mx-4">
                {
                    doctors?.length === 0 ? (<h1>No Doctors yet</h1>) : <DoctorsList doctors={doctors} />
               }
            </div>
        </div>
    );
};

export default Doctors;
