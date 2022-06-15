import React from 'react'
import { MdOutlineRefresh } from "react-icons/md";

const Drafts = () => {
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
                <span className='ml-5 text-lg text-slate-600 mt-3'>You don't have any saved drafts. Saving a draft allows you to keep a message you aren't ready to send yet.</span>
            </div>
        </div>
  )
}

export default Drafts