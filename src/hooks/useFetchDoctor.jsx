import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GET_DOCTOR_QUERY } from '../queries/doctors';
import { getDoctorAction } from '../state/actions/doctors.action';

const useFetchDoctor = () => {
	const { user } = useSelector((state) => state.auth);
	const [doctor, setDoctor] = useState({})

    const dispatch = useDispatch()

	useEffect(() => {
        if (user?.email) {
            const inputValues = {
                email: user?.email,
            };

            const details = {
                query: GET_DOCTOR_QUERY,
                variables: {
                    input: inputValues,
                },
            };

            const getDoctor = async () => {
                const { payload } = await dispatch(getDoctorAction(details));
                setDoctor(payload.doctor)
                return payload
            };
            getDoctor();

            
        }
	}, [user?.email, dispatch, setDoctor]);
	
  return [doctor]

}

export default useFetchDoctor