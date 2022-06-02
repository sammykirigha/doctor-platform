import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { RiArrowRightSLine } from "react-icons/ri";
import Button from '../components/Button';
import Select from 'react-select'

const Appointment = () => {
  const params = useLocation()
  const [selectedOption, setSelectedOption] = useState(null)

  const pathname = params.pathname.split('/')[1]

  const options = [
  { value: 'Today', label: 'Today' },
  { value: 'Yesterday', label: 'Yesterday' },
  { value: 'Tomorrow', label: 'Tomorrow' },
  ];
  
  const handleChange = () => {
    setSelectedOption(selectedOption)
  }

  return (
    <div className='flex flex-row items-center justify-between mx-3'>
      <div className='flex flex-col'>
        <h4 className='text-lg text-slate-800 font-semibold mb-2'>{pathname.toUpperCase()}</h4>
        <div>
          <p className="paragraph inline-flex items-center justify-between text-md uppercase text-md ">Docris <RiArrowRightSLine className='flex items-center mx-2 mt-0.5' /> <span className='text-blue-700 text-md'>{ pathname.toUpperCase()}</span> </p>
        </div>
      </div>
      <div className='flex flex-row items-center gap-3'>
        <Select options={options} value={selectedOption} onChange={handleChange} />
        <Button text="Appointment" />
      </div>
  </div>
  )
}

export default Appointment