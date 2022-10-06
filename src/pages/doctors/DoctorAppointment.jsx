import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useFetchDoctor from '../../hooks/useFetchDoctor';
import { resetNotifications } from '../../state/reducers/error.reducer';
import Appointment from '../Appointment';

const DoctorAppointment = () => {
	const { doctor, loading } = useSelector((state) => state.doctor);
    const dispatch = useDispatch();

    useFetchDoctor();

    useEffect(() => {
        return () => dispatch(resetNotifications());
    }, [dispatch]);

    return (
        <Appointment appointments={doctor?.appointments} loading={loading} />
    );
}

export default DoctorAppointment