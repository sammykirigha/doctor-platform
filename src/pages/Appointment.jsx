import React from 'react'
import { useLocation } from 'react-router-dom'

const Appointment = () => {
  const params = useLocation()
  console.log(params.pathname.split('/')[1].toUpperCase());
  return (
	<div>Appointment</div>
  )
}

export default Appointment