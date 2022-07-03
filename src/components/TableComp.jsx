import React, { useRef } from "react";
import { useEffect } from "react";
import { createRef } from "react";
import { useState } from "react";
import { PageNavigation, Pagination } from "./Pagination";

const data = [
    1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,31, 32, 33, 34, 35, 36, 36, 37, 38, 39, 40
];

//add a filter method to filter data using names

const TableComp = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5)

    const bottomDetector = useRef()
    

    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const myData = new Pagination(data, 1);


    const changeItemsPerPage = (e) => {
        setItemsPerPage(e.target.value)
    }

    const totalPages = myData.getTotalPages()
    let xyz = myData.getUptoPage(currentPage)

    console.log('hjvgjhfbkjv', xyz);

    useEffect(() => {
        let options = {
          threshold: 1.0
        }
        
        const observer = new IntersectionObserver(nextPage, options);
        console.log('my observer', observer);

        observer.observe(bottomDetector.current)

    }, [])
    
    useEffect(() => {
        const viewbox = bottomDetector.current.getBoundingClientRect();
        console.log(viewbox);

        if (viewbox.top < window.innerHeight && currentPage < totalPages) {
            nextPage()
        }
    },[])

    console.log('bottomup', bottomDetector.current);
    return (
        <div className="flex flex-col">
            <table className="table w-full">
                <thead className="mx-2 bg-blue-300 w-full ">
                    <tr className="text-left px-2">
                        <th className="px-2">#</th>
                        <th className="px-2">Name</th>
                        <th className="px-2">Email</th>
                        <th className="px-2">Age</th>
                        <th className="px-2">Gender</th>
                        <th className="px-2">Date</th>
                        <th className="px-2">Time</th>
                        <th className="px-2">Department</th>
                        <th className="px-2">Doctor</th>
                        <th className="px-2">Fees</th>
                    </tr>
                </thead>
                <tbody>
                    {myData.getUptoPage(currentPage).map((item, index) => {
                        return (
                            <tr className="" key={index}>
                                <td className="px-2 py-2">{item}</td>
                                <td className="px-2 py-2">Doe</td>
                                <td className="px-2 py-2">doe@gmail.com</td>
                                <td className="px-2 py-2">23</td>
                                <td className="px-2 py-2">Male</td>
                                <td className="px-2 py-2">20-06-2022</td>
                                <td className="px-2 py-2">08:30am</td>
                                <td className="px-2 py-2">Cardiology</td>
                                <td className="px-2 py-2">Dr. Calvin Carno</td>
                                <td className="px-2 py-2">$ 200</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div ref={bottomDetector}></div>

            {/* <div className="bg-white w-[150px] mt-12 px-3 h-[50px] py-2 ">
                <select onChange={changeItemsPerPage} >
                    <option >select size</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                    <option value='30'>30</option>
                    <option value='40'>40</option>
                    <option value='50'>50</option>
                </select>
            </div> */}
            {/* <PageNavigation
                nextPageHandler={nextPage}
                previousPageHandler={previousPage}
                currentPage={currentPage}
                totalPages={totalPages}
            ></PageNavigation> */}
        </div>
    );
};

export default TableComp;
