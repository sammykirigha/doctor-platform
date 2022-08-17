import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFetchPatient from '../../hooks/useFetchPatients'
import { resetNotifications } from '../../state/reducers/error.reducer'
import Appointment from '../Appointment'

const PatientAppointments = () => {

	const { patient, loading } = useSelector(state => state.patient)
	const dispatch = useDispatch()
	
	useFetchPatient()

	useEffect(() => {
        return ()=>dispatch(resetNotifications())
    },[dispatch])
	
  return (
	  <Appointment appointments={patient?.appointments} loading={loading}  />
  )
}

export default PatientAppointments