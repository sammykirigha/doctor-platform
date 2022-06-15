import React from 'react'
import { MdOutlineRefresh } from "react-icons/md";
import Emails from './Emails';

const Sent = () => {
  return (
	<div className=" flex flex-col mt-5">
            <div className="flex flex-row items-center border-b  pb-7">
                <input
                    type="checkbox"
                    width="30px"
                    height="30px"
                    className="default:ring-2 mr-4 cursor-pointer w-[40px] "
                />
                <MdOutlineRefresh className="text-2xl cursor-pointer text-gray-500" />
            </div>
            <div className="slim-scrollbar overflow-y-auto h-[500px] w-full">
                {[1, 2, 3, 4, 5].map(() => {
                    return <Emails />;
                })}
            </div>
        </div>
  )
}

export default Sent