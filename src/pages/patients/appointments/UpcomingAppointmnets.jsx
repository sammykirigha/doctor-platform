import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppointmentTable from '../../../components/others/AppointmentTable'
import useFetchPatient from '../../../hooks/useFetchPatients'
import { GET_APPOINTMENTS_BY_DATE } from '../../../queries/appointments'
import { getAppointmentsByDate } from '../../../state/actions/appointments'
import Appointment from '../../Appointment'

const UpcomingAppointmnets = () => {
  const dispatch = useDispatch()
  const {patient} = useSelector(state => state.patient)
  const state = useSelector(state => state.appoinment)

  const fetchAppointments = async () => {
    const inputValue = {
       patientID: patient?.id
    }
    const details = {
      query : GET_APPOINTMENTS_BY_DATE,
      variables: {
        input: inputValue
      }
    }
     await dispatch(getAppointmentsByDate(details));
  }

  useFetchPatient()

  useEffect(() => {
   fetchAppointments()
  }, [])

  console.log("this state",state?.appoinment);
  
  return (
    <div>
      {/* <AppointmentTable data={state?.appointments?.appointments} /> */}
  </div>
  )
}

export default UpcomingAppointmnets