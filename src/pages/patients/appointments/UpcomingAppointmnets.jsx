import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppointmentTable from "../../../components/others/AppointmentTable";
import useFetchPatient from "../../../hooks/useFetchPatients";
import { GET_APPOINTMENTS_BY_DATE } from "../../../queries/appointments";
import { getAppointmentsByDate } from "../../../state/actions/appointments";
import Appointment from "../../Appointment";

const UpcomingAppointmnets = () => {
    const dispatch = useDispatch();
    const { patient } = useSelector((state) => state.patient);
    const { appointments } = useSelector((state) => state.appoinment);

    useFetchPatient();

    useEffect(() => {
        const fetchAppointments = async () => {
            const inputValue = {
                patientID: patient?.id,
            };

            const details = {
                query: GET_APPOINTMENTS_BY_DATE,
                variables: {
                    input: inputValue,
                },
            };
            await dispatch(getAppointmentsByDate(details));
        };

        fetchAppointments();
    }, [dispatch, patient?.id]);

    console.log("this state", appointments);

    return (
        <div>
            <AppointmentTable showAction={false} data={appointments} />
        </div>
    );
};

export default UpcomingAppointmnets;
