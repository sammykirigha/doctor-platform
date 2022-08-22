import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Header from '../../components/common/Header';
import { FaSpinner } from "react-icons/fa";
import PatientsTable from '../../components/others/PatientsTable';

const Patients = () => {
  const { patient, loading } = useSelector((state) => state.patient);

  const params = useLocation()
  const pathname = params.pathname.split("/")[2];
  
  return (
    <div className='mx-5'>
      <Header pathname={pathname} />
      <div className="mt-5">
        {loading ? (
                <div className="flex items-center justify-center mt-5">
                    <FaSpinner className="h-24 w-24 bg-white text-blue-600 animate-spin" />
                </div>
            ) : patient?.appointments?.length > 0 ? (
                <PatientsTable data={patient?.appointments} />
            ) : (
                <div className="flex items-center justify-center">
                    <div className="bg-white border h-auto  rounded-md flex items-center justify-center w-auto py-3 sm:w-auto sm:py-auto md:w-[500px] lg:w-[500px] mx-autho">
                        <h1 className="text-xl text-gray-700 px-10">
                            You do not have any patients for now
                        </h1>
                    </div>
                </div>
            )}
      </div>
  </div>
  )
}

export default Patients