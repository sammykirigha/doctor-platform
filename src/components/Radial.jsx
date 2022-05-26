import React from 'react'
import Chart from "react-apexcharts";

const Radial = () => {
  const chart= {
    height: 280,
    type: "radialBar",
  }
	const series = [
		// {
		// 	name: 'TEAM A',
		// 	data: [67]
		// },
		// {
		// 	name: 'TEAM B',
		// 	data: [84]
		// },
		// {
		// 	name: 'TEAM C',
		// 	data: [97]
		// },
		// {
		// 	name: 'TEAM D',
		// 	data: [61]
		// },
		67, 84, 97, 31]
  const plotOptions ={
    radialBar: {
      dataLabels: {
        total: {
          show: true,
          label: 'TOTAL'
        }
      }
	  },
	  labels:['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
  }


  return (
	  <div>
		 <Chart type='radialBar' series={series}  options={plotOptions}   /> 
	</div>
  )
}

export default Radial