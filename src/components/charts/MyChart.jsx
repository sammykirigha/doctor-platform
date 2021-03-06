import React, { Component } from "react";
import Chart from "react-apexcharts";

const MyChart = () => {
    const options = {
        chart: {
            id: "Patients Visit by Gender",
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
    };
    const series = [
        {
            name: "Male",
            data: [20, 20, 18, 80, 49, 80, 57, 31, 75, 70, 91, 150],
        },
        {
            name: "Female",
            data: [60, 50, 95, 50, 49, 24, 33, 20, 35, 70, 61, 45],
        },
        {
            name: "Children",
            data: [10, 90, 35, 50, 130, 64, 120, 100, 80, 70, 41, 65],
        },
    ];
    return (
        <div className=" bg-white h-[350px] sm:w-[100%] sm:mt-3 md:w-[100%] lg:w-[100%] rounded-md" >
            <Chart
                options={options}
                series={series}
                type="bar"
                width='100%'
                height={320}
            />
        </div>
    );
};

export default MyChart;
