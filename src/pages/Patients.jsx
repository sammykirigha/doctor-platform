import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../components/common/Header'
import TableComp from '../components/others/TableComp';

const Patients = () => {
  const params = useLocation()
  const pathname = params.pathname.split("/")[1];
  
  return (
    <div className='mx-5'>
      <Header pathname={pathname} />
      <div className="mt-5">
        <TableComp />
      </div>
  </div>
  )
}

export default Patients