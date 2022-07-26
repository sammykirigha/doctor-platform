import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContext } from "../../contexts/navigation.context";
import Logo from "../common/Logo";
import { BiMessageRounded } from "react-icons/bi";
import { links } from "../../data/AllLinks";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
import { useEffect } from "react";
import { GET_DOCTOR } from "../../queries/doctors";
import { getDoctorAction } from "../../state/actions/doctors.action";

const Sidebar = () => {
    const { user } = useSelector((state) => state.auth);
    const { doctor, loading } = useSelector((state) => state.doctor);
    const { sideBarOpen } = useContext(NavigationContext);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState("");

    useEffect( () => {

        const inputValues = {
            email: user.email,
        };

        const details = {
            query: GET_DOCTOR,
            variables: {
                input: inputValues,
            },
        };

        dispatch(getDoctorAction(details));
        console.log(user);
        
    }, [user, dispatch])
    
    console.log(doctor);

    return (
        <div
            className={`fixed w-[250px] top-[68px] bg-white border-r border-gray-200 h-screen lg:top-0 left-0 z-10 ${
                sideBarOpen ? "translate-x-0" : "-translate-x-[100%]"
            }`}
        >
            <Logo />
            <div className="pt-2 slim-scrollbar overflow-auto h-[470px] bg-white">
                <>
                    {links?.map(({ icon, link, name, childrenLinks, access =[] }, index) => {
                        if(!access.includes(user?.role)) return null
                        if (childrenLinks?.length > 0) {
                            return (
                                <div className="w-full" key={index}>
                                    <div className=" flex flex-col items-center pl-3">
                                        <div className="flex justify-between w-full items-center pr-3"  onClick={() =>
                                                    setIsActive(isActive === name?"":name)
                                                } >
                                            <div className="flex flex-row items-center cursor-pointer pt-3 justify-between ">
                                                <div className="w-8 h-8 bg-gray-50 flex items-center rounded-md pl-2 mr-2">{icon}</div>
                                                <div className="text-md text-gray-500 font-semibold">{name}</div>
                                            </div>

                                            <div className="flex items-center mt-2.5 cursor-pointer" >
                                                {isActive === name ? (
                                                    <RiArrowUpSLine className="text-gray-500" />
                                                ) : (
                                                    <RiArrowDownSLine className="text-gray-500" />
                                                )}
                                            </div>
                                        </div>

                                        <div className="bg-white w-full pl-5">
                                            {isActive === name &&
                                                childrenLinks.map(
                                                    (child, index) => {
                                                        return (
                                                            <div>
                                                                <div key={index} className='' onClick={() =>navigate("/"+user?.role+child.link)} >
                                                                    <div className="flex pt-3 mx-3 text-sm text-gray-500 cursor-pointer items-center">
                                                                        <span><IoMdArrowDropright className="text-slate-800" /></span>
                                                                        {child.name }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div key={index} className="ml-3 mt-3">
                                    <div  onClick={() => navigate("/"+user?.role+link)} className='flex items-center cursor-pointer' >
                                        <div className="w-7 h-7 bg-gray-50 flex items-center rounded-md pl-2 mr-2">{icon}</div>
                                        <div className="text-md text-gray-500 font-semibold">{name}</div>
                                    </div>
                                </div>
                            );
                        }    
                    }
                       
                    )}
                </>
            </div>
        </div>
    );
};

export default Sidebar;
