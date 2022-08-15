import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getAllDoctorsdAction } from '../state/actions/doctors.action';

const useFetchAllDoctor = () => {
	const [doctors, setDoctors] = useState({})

    const dispatch = useDispatch()

	useEffect(() => {

            const getDoctors = async () => {
                const { payload } = await dispatch(getAllDoctorsdAction());
				setDoctors(payload.doctors)
				console.log(payload.doctors);
                return payload
            };
            getDoctors();

            
        
	}, [dispatch]);
	
  return [doctors]

}

export default useFetchAllDoctor