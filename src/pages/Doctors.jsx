import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import Button from "../components/Button";
import image1 from "../data/images/01.jpg"
import image2 from "../data/images/02.jpg"
import image3 from "../data/images/03.jpg"
import image4 from "../data/images/04.jpg"
import image5 from "../data/images/05.jpg"
import image6 from "../data/images/06.jpg"
import image7 from "../data/images/07.jpg"
import image8 from "../data/images/08.jpg"
import image9 from "../data/images/09.jpg"
import image10 from "../data/images/10.jpg"


const doctorsAvailable = [
    {
        name: "Calvin Carlo",
        department: "Eye Care",
        image: image1,
    },
    {
        name: "Cristino Murphy",
        department: "Gynecology",
        image: image2,
    },
    {
        name: "Alia Reddy",
        department: "Psychotherapy",
        image: image3,
    },
    {
        name: "Toni Kovar",
        department: "Orthopedic",
        image: image4,
    },
    {
        name: "Jessica McFarlane",
        department: "Dentist",
        image: image5,
    },
    {
        name: "Elsie Sherman",
        department: "Gastrologist",
        image: image6,
    },
    {
        name: "Bertha Magers",
        department: "Urologist",
        image: image7,
    },
    {
        name: "Louis Batey",
        department: "Neurologist",
        image: image8,
    },
    {
        name: "Julie Rosario",
        department: "Psychotherapy",
        image:image9,
    },
    {
        name: "Scott Guzman",
        department: "Nutritionists",
        image: image10,
    },
];

const Doctors = () => {
    const params = useLocation();
    const navigate = useNavigate();
    const pathname = params.pathname.split("/")[2];
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
                <Button text="Add A New Doctor" onClick={() => navigate('/doctors/add-doctor')} />
            </div>
            <div className="bg-gray-50 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3 mt-5 mx-4">
                {doctorsAvailable.map((doc, index) => {
                    return (
                        <div
                            key={index}
                            className="drop-shadow-md rounded-md bg-white flex flex-col overflow-hidden shadow-lg"
                        >
                            <div className="flex items-center justify-center">
                                <img src={doc.image} alt="doc" height='100%' width='100%' />
                            </div>
                            <div className="flex flex-col items-center justify-center px-3 h-24 hover:bg-blue-500 hover:text-white">
                                <span className="text-black-900 font-bold">
                                    {doc.name}
                                </span>
                                <span className="text-gray-500">
                                    {doc.department}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Doctors;
