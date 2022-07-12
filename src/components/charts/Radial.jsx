import React from 'react'
import Chart from "react-apexcharts";
import Select from 'react-select'

const Radial = () => {
  const chart= {
    height: 280,
    type: "radialBar",
  }
	const series = [67, 84, 97, 31]
  const plotOptions ={
	   total: {
          show: true,
          label: 'TOTAL'
        },
	  labels:['Department A', 'Department B', 'Department C', 'Department D']
	}
	
	
const selectOptions = [
  { value: 'Today', label: 'Today' },
  { value: 'Yesterday', label: 'Yesterday' },
  { value: 'Tomorrow', label: 'Tomorrow' }
]


  return (
	  <div className='w-full flex flex-col items-center bg-white rounded-md h-[350px] mb-5 lg:mt-3'>
		  <div className='flex flex-row w-[100%] items-center justify-between mt-4 px-2'>
			  <h4 className='text-gray-800 text-lg font-semibold'>Patients By Department</h4>
			  <Select options={selectOptions } className="mt-3" />
		  </div>
		 <Chart type='radialBar' series={series}  options={plotOptions}   /> 
	</div>
  )
}

export default Radial