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
                patientId: {
                    eq: patient?.id
                } ,
                and: [
                    {
                        date: {
                            gte: new Date().toISOString()
                        }
                    },
                    {
                        date: {
                            lt: new Date(new Date().getTime() + (86400000 * 7)).toISOString()
                        }
                    }
                ]
            };

            const details = {
                query: GET_APPOINTMENTS_BY_DATE,
                variables: {
                    filters: inputValue,
                },
            };
            await dispatch(getAppointmentsByDate(details));
        };

        fetchAppointments();
    }, [dispatch, patient?.id]);

    console.log("this state", appointments);

    return (
        <div className="p-2">
            <AppointmentTable showAction={false} showPagination={false} data={appointments} />
        </div>
    );
};

export default UpcomingAppointmnets;
