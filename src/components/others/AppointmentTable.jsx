import React from "react";
import { useState } from "react";
import { PageNavigation, Pagination } from "./Pagination";

//add a filter method to filter data using names

const AppointmentTable = ({ data }) => {
    
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const myData = new Pagination(data, itemsPerPage);


    const changeItemsPerPage = (e) => {
        const num = e.target.value
        setItemsPerPage(+num)
    }

    console.log(itemsPerPage);

    const totalPages = myData.getTotalPages()


    return (
        <div className="flex flex-col">
            <table className="table w-full">
                <thead className="mx-2 bg-blue-300 w-full ">
                    <tr className="text-left px-2">
                        <th className="px-2">Patient Name</th>
                        <th className="px-2">Patient Email</th>
                        <th className="px-2">Patient Phone</th>
                        <th className="px-2">Doctor's Name</th>
                        <th className="px-2">Time</th>
                        <th className="px-2">Date</th>
                        <th className="px-2">Department</th>
                        <th className="px-2">Status</th>
                        <th className="px-2">Fees</th>
                        <th className="px-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {myData?.getPage(currentPage).map((appnt, index) => {
                        return (
                            <tr className="" key={index}>
                                <td className="px-2 py-2">{`${appnt.patient_firstname} ${appnt.patient_lastname}`}</td>
                                <td className="px-2 py-2">{appnt.patient_email}</td>
                                <td className="px-2 py-2">{appnt.patient_phone}</td>
                                <td className="px-2 py-2">{appnt.patient_phone}</td>
                                <td className="px-2 py-2">{appnt.time}</td>
                                <td className="px-2 py-2">{appnt.date}</td>
                                <td className="px-2 py-2">{appnt.department}</td>
                                <td className="px-2 py-2">{appnt.status}</td>
                                <td className="px-2 py-2">{appnt.fees}</td>
                                <td className="px-2 py-2">{appnt.Action}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="bg-white w-[150px] mt-12 px-3 h-[50px] py-2 ">
                <select onChange={changeItemsPerPage} >
                    <option >select size</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                    <option value='30'>30</option>
                    <option value='40'>40</option>
                    <option value='50'>50</option>
                </select>
            </div>
            <PageNavigation
                nextPageHandler={nextPage}
                previousPageHandler={previousPage}
                currentPage={currentPage}
                totalPages={totalPages}
            ></PageNavigation>
        </div>
    );
};

export default AppointmentTable;
