import React from 'react'

const TableComp = () => {
  return (
	 <div className="flex">
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
                        <tr className="">
                            <td className="px-2 py-2">1</td>
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
                    </tbody>
                </table>
            </div>
  )
}

export default TableComp