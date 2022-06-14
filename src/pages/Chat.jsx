import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import { useLocation } from 'react-router-dom';

const Chat = () => {
	const params = useLocation();
    const firstName = params.pathname.split("/")[1];
	const secondName = params.pathname.split("/")[2];
	
  return (
	  <div className='mx-5 min-h-screen'>
		  <div className="flex flex-row items-center justify-between">
                <h4 className="text-lg text-slate-900 font-semibold">
                    Docto's Profile & Settings
                </h4>
                <div>
                    <p className="paragraph inline-flex items-center justify-between text-md uppercase text-md ">
                        Docris{" "}
                        <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
                        <span className="text-blue-700 text-md">
                            {firstName.toUpperCase()}
                        </span>{" "}
                        <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
                        <span className="text-blue-700 text-md">
                            {secondName.toUpperCase()}
                        </span>{" "}
                    </p>
                </div>
            </div>
	</div>
  )
}

export default Chat